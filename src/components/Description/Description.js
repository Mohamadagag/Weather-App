import "./Description.css";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Description = ({
  min,
  max,
  feelsLike,
  pressure,
  humidity,
  windSpeed,
}) => {
  return (
    <div className="section sm-section section__description">
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>Min</small>
        </div>
        <h2>{min} &#8451;</h2>
      </div>

      <div className="card">
        <div className="description__card-icon">
          <FaArrowUp />
          <small>Max</small>
        </div>
        <h2>{max} &#8451;</h2>
      </div>

      <div className="card">
        <div className="description__card-icon">
          <BiHappy />
          <small>Feels Like</small>
        </div>
        <h2>{feelsLike} &#8451;</h2>
      </div>

      <div className="card">
        <div className="description__card-icon">
          <MdCompress />
          <small>Pressure</small>
        </div>
        <h2>{pressure} &#8451;</h2>
      </div>

      <div className="card">
        <div className="description__card-icon">
          <MdOutlineWaterDrop />
          <small>Humidity</small>
        </div>
        <h2>{humidity} &#8451;</h2>
      </div>

      <div className="card">
        <div className="description__card-icon">
          <FaWind />
          <small>Wind Speed</small>
        </div>
        <h2>{windSpeed} &#8451;</h2>
      </div>
    </div>
  );
};

export default Description;
