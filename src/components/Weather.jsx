import './Weather.css'

function Weather({ day, img, imgAlt, conditions, time }) {
    return (
        <div className="weather-forecast">
            <h2>{day}</h2>
            <img src={img} alt={imgAlt} />
            <p><span className="bold-text">condition: </span> {conditions} </p>
            <p><span className="bold-text">Time: </span> {time}</p>
        </div>
    )
}

export default Weather