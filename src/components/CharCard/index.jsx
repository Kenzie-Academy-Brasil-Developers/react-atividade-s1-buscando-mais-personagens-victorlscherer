import "./style.css";

const CharCard = ({ character: { name, image, status, species } }) => {
  const nameString = name.substring(0, 15);

  return (
    <div className="charCard">
      <div
        style={{
          backgroundColor:
            status === "Alive" ? "green" : status === "Dead" ? "red" : "gray",
        }}
      >
        <img src={image} alt={name} />
        <h2>{nameString}</h2>
        <h3>{species}</h3>
      </div>
    </div>
  );
};

export default CharCard;
