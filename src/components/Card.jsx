function Card(props) {
    const actor = props.Actor;
    console.log(actor);

    return (
        <>
            {actor.map(element =>
                <div key={element.id} className="card">
                    <h2>Nome: {element.name}</h2>
                    <h3>Anno di Nascita: {element.birth_year}</h3>
                    <h4>Nazionalità: {element.nationality}</h4>
                    <h4>Premi Vinti: {element.awards}</h4>
                    <p>Bio: {element.biography}</p>
                    <img className="card-image" src={element.image} alt="actor-image" />
                </div>
            )}
        </>
    )
}

export default Card;