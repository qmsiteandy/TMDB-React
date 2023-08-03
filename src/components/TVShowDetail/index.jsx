import style from "./style.module.css";
import { FiveStarRating } from "../FiveStarRating";

export function TVShowDetail({ show }) {
  return (
    <div>
      <div className={style.name}>{show.name}</div>
      <div className={style.vote_average}>
        <FiveStarRating vote_average={show.vote_average} />
        <span>{show.vote_average.toFixed(1)}/10</span>
      </div>
      <div className={style.overview}>{show.overview}</div>
    </div>
  );
}
