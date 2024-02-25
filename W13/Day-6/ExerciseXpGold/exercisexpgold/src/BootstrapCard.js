import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapCard = (props) => {
  return (
    <div className="card m-5" style={{width: '30rem'}}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-primary">
          Go to {props.title}
        </a>
      </div>
    </div>
  );
};

export default BootstrapCard;
