import style from "./style.module.css";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ vote_average }) {
  let starList = [];
  const rating5 = vote_average / 2;

  const starFillCount = parseInt(rating5);
  const starHalfCount = rating5 - starFillCount >= 0.5 ? 1 : 0;
  const starEmptyCount = 5 - starFillCount - starHalfCount;

  for (let i = 0; i < starFillCount; i++)
    starList.push(<StarFill key={"star-fill-" + i} />);
  if (starHalfCount) starList.push(<StarHalf key={"star-half"} />);
  for (let i = 0; i < starEmptyCount; i++)
    starList.push(<StarEmpty key={"star-empty-" + i} />);

  return <div>{starList}</div>;
}
