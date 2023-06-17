import { Button, Rate } from "antd";
import DetailsCard from "./detailsCard";
import { MdPlayArrow } from "react-icons/md";

function AnimeDetails() {
  return (
    <div style={{ marginTop: -100 }}>
      <img style={{ width: "100%" }} src="anime-1b.png" />
      <div className="details-container">
        <h1>Naruto</h1>
        <div>
          <h2>Action Drama Shonen</h2>
          <Rate defaultValue={5} />
        </div>
        <p>
          In a village where he was rejected for unknown reasons, Naruto
          Uzumaki, a young ninja who seeks to become the Hokage, the leader of
          his village
        </p>
        <Button style={{ fontSize: 30 }}>
          <MdPlayArrow style={{ fontSize: 40 }} />
          Play
        </Button>
      </div>
      <h1 style={{ textAlign: "start", marginTop:80,marginLeft:80,fontSize:50 }}>More Like This</h1>
      <div className="list-card">
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
      </div>
    </div>
  );
}
export default AnimeDetails;
