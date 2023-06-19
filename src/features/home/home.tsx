import { Col, Row } from "antd";
import data from "../../app/data.json";
import AnimeCard from "../allAnime/card";

function Home() {
  return (
    <div className="home">
      <Row gutter={30} align="middle">
        <Col xl={9} xxl={12}>
          <img src="Group 4.svg" width="100%" />
        </Col>
        <Col xl={15} xxl={12}>
          <div className="welcome">
            <h1>Animetopia</h1>
            <p>
              Welcome to our anime platform, where captivating stories Enjoy the
              journey with beloved characters and share the magic of anime.
            </p>
            <p> Welcome to our anime haven!</p>
          </div>
        </Col>
      </Row>


      <h1 >Explore the Top Watching Anime</h1>
      <Row style={{ gap: 60 }} align="middle" justify="center">
        {data.map((elm, index) => (
          index < 3 ?
            <AnimeCard key={elm.Id} fav={elm.fav} pic={elm.image} details={elm.desc} name={elm.Name} id={elm.Id} /> : <></>
        ))}
      </Row>
      <h1 style={{ marginTop: 40 }}>News</h1>
      <Row align="middle" justify="center">
        <img src="news.png" />
      </Row>
    </div>
  );
}
export default Home;
