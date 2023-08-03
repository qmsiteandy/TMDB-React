import style from "./style.module.css";

export function Logo(props) {
  return (
    <div>
      <div className={style.container}>
        <img src={props.image} alt="Logo" className={style.img} />
        <span className={style.title}>{props.title}</span>
      </div>
      <span className={style.subtitle}>{props.subtitle}</span>
    </div>
  );
}
