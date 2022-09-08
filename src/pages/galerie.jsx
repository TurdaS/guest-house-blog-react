const Galerie = () => {
  const poze = [
    "lobby.jpeg",
    "lobby2.jpeg",
    "room1.jpeg",
    "room2.jpeg",
    "room3.jpeg",
    "apartment.jpeg",
    "apartment2.jpeg",
    "apartment1.jpeg",
    "pension2.jpeg",
    "pension3.jpeg",
    "pension4.jpeg",
    "pension5.jpeg",
    "salasedinte.jpeg",
    "hol.jpeg",
    "outside.jpeg",
    "bath.jpeg",
  ];

    // const handleZoom{selectedImg} => {
    //   setSelectedImage{selectedImg}
    //   setShowZoom{true};
    // }


  return (
    <div className="m-2">
      <h1>Galerie Foto</h1>
      <div className="galery-container">
        {poze.map((image) => (
          <img src={`images/${image}`} alt="..." className="galery-image" />
        ))}
      </div>
    </div>
  );
};

export default Galerie;
