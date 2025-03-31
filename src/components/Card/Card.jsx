export default function Card({ id, imageURL, onClick }) {
    return(
        <div className="card" onClick={() => onClick(id)}>
            <img src={imageURL} alt=""/>
            <h3>{id}</h3>
        </div>
    );
}