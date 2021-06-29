import './Card.css';

const Card = ({ image, title, description }) => {
    return (
        <div className="card">
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card;
