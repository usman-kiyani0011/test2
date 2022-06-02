import "./Card.css";

const Card = (props) => {
    
  const classess = "custom-card " + props.className;

  return (
    <div className={classess}>{props.children}</div>
  );
}

export default Card;
