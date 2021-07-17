import './Card.css';


function Card(props) {
  return (
    <div className="card">
      <h2>{props.item}</h2>
          <p>You have cosumed {props.calorie} cals today.</p>
          <button onClick={() => {
              props.deleteState(props.index);
          }}>Delete</button>
    </div>
  );
}

export default Card;