
export default function Card({title,description,image}) {
    return (<div>
            <div>{image}</div>
            <h1 style={{"margin-top":"12px", "margin-bottom":"12px"}}>{title}</h1>
            <p>{description}</p>
            
    </div>)
    }