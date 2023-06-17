import AnimeCard from "./card";

function AllAnime(props: { type: string}){

  return (
    <>
      <h1 className="head-text">{props.type}</h1>
      <div className="list-card g-20">
      <AnimeCard/>
      <AnimeCard/>
      <AnimeCard/>
      <AnimeCard/>
      <AnimeCard/>
      <AnimeCard/>
      <AnimeCard/>
      <AnimeCard/>
      <AnimeCard/>
      </div>
  
    </>
  );
}
export default AllAnime;
