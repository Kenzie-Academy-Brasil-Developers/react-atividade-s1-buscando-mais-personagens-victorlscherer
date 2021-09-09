import CharCard from "../CharCard";
import "./style.css";

const Characters = ({ characterList }) => {
  return (
    <div>
      <div className="containerCharacters">
        {characterList.map((character) => {
          return <CharCard key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
};

export default Characters;
