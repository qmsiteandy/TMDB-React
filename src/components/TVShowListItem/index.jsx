import style from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
const MAX_TITLE_CHAR = 20;

export function TVShowListItem({ tvShow, onClick }) {
  const _onClick = () => {
    onClick(tvShow);
  };
  return (
    <div>
      <div className={style.container} onClick={_onClick}>
        <img
          src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
          alt={tvShow.name}
          className={style.img}
        />
        <div className={style.title}>
          {tvShow.name.length > MAX_TITLE_CHAR
            ? tvShow.name.slice(0, MAX_TITLE_CHAR)
            : tvShow.name}
        </div>
      </div>
    </div>
  );
}
