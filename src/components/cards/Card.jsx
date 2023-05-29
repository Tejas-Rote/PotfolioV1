
import "./cards.css";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-logo">
          <img src={props.imgsrc} alt="logo" />
        </div>
        <div className=" card__content-name  ">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
