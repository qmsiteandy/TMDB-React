import { useEffect, useState } from "react";
import style from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config.js";
import { TVShowAPI } from "./api/tv-show";
import { TVShowDetail } from "./components/TVShowDetail";
import { TVShowList } from "./components/TVShowList";
import { SearchBar } from "./components/SearchBar";
import logoImg from "./assets/images/logo.png";
import { Logo } from "./components/Logo";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState();

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) setCurrentTVShow(populars[0]);
  }

  async function fetchRecommendations(showId) {
    const recommendations = await TVShowAPI.fetchRecommendations(showId);
    if (recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  }

  async function fetchByTitle(title) {
    const searchResult = await TVShowAPI.fetchByTitle(title);
    if (searchResult.length > 0) setCurrentTVShow(searchResult[0]);
    else alert(`Can't search show: ${title}`);
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    currentTVShow && fetchRecommendations(currentTVShow.id);
  }, [currentTVShow]);

  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.8)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logoImg}
              title="TMDB Shows"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className={style.tv_show_detail}>
        {currentTVShow && <TVShowDetail show={currentTVShow} />}
      </div>
      <div className={style.recommend_tv_show}>
        {recommendationList && (
          <TVShowList
            tvShowList={recommendationList}
            setCurrentTVShow={setCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
