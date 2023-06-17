import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AnimeCard() {
    const navigate = useNavigate();
  return (
    <div className="card">
      <img style={{ width: 280 }} src="anime-1.png" />
      <div className="info">
        <h1>Naruto</h1>
        <p>In a village where he was rejected for unknown reasons, Naruto Uzumaki, a young ninja who seeks to become the Hokage, the leader of his village</p>
        <a href="/details" className="btn">
          Show Details
        </a>
        <button onClick={()=>{ navigate('details');}} className="btn-favorite">
          <i className="fa-regular fa-heart">
            <HeartFilled />
          </i>
        </button>
      </div>
    </div>
  );
}
export default AnimeCard;
