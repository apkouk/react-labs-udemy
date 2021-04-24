import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <h3>{'Hello from props -> ' + props.hola}</h3>
        </div>
    );
}

export default Card;