import Card from "../Card/Card";
import './CardGrid.css'

export default function CardGrid({cats, onCardClick}) {
    return(
        <div className="card-grid">
            {cats.map((cat) => (
                <Card key={cat.id} id={cat.id} imageURL = {`https://cataas.com/cat/${cat.id}`} onClick = {onCardClick}/>
            ))}
        </div>
    )
}