import Card from './Card';
import cards from '../data/cards';
import './CardsContainer.css';

const CardsContainer = () => {
    return (
        <div className="card-container">
            { cards.map((card) => {
                return <Card {...card} />
            }) }
        </div>
    )
}

export default CardsContainer;
