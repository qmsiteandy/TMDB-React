import style from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem";

export function TVShowList({ tvShowList, setCurrentTVShow }) {
  return (
    <div>
      <div className={style.title}>You'll probably like:</div>
      <div className={style.container}>
        {tvShowList.map((tvShow) => {
          return (
            <div className={style.showItem} key={tvShow.id}>
              <TVShowListItem
                tvShow={tvShow}
                onClick={() => {
                  setCurrentTVShow(tvShow);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
