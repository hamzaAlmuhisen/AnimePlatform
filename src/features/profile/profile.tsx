import AnimeCard from "../allAnime/card";

function Profile() {
  return (
    <>
      <h2>Welcom hamza</h2>
      <h2>massegr for youth of futuer</h2>
      <h1> your favorte anime</h1>
      <div className="list-card g-20">
        <AnimeCard />
        <AnimeCard />
      </div>
      <h1> your favorte movie</h1>
      <div className="list-card g-20">
        <AnimeCard />
        <AnimeCard />
      </div>
    </>
  );
}
export default Profile;
