import { useState } from "react";
import Modal from "../components/modal/modal";

const Galerie = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [showModal, setShowModal] = useState(false);

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

  const handleZoom = (index) => {
    setSelectedIndex(index);
    setShowModal(true)
  };

  const handleZoomNavigation = (direction) => {
    if(direction === 'inc' && selectedIndex < poze.length-1)setSelectedIndex(state => state + 1);
    else if(direction === 'dec' && selectedIndex > 0)setSelectedIndex(state => state - 1);
  }

  return (
    <div className="m-2">
      <h1 className="text-center">Galerie Foto</h1>
      <div className="galery-container">
        {poze.map((image, index) => (
          <img
            src={`images/${image}`}
            alt="..."
            className="galery-image"
            onClick={() => handleZoom(index)}
          />
        ))}
      </div>
      <Modal 
      showModal={showModal} 
      onClose={() => setShowModal(false)} 
      onClickNavBtnLeft={() => handleZoomNavigation('dec')}
      onClickNavBtnRight={() => handleZoomNavigation('inc')} 
      navigationTotal={poze.length} 
      navigationCurrent={selectedIndex+1}>
      <img
            src={`images/${poze[selectedIndex]}`}
            alt="..."
            style={{maxWidth: '80vw', maxHeight: '90vh', objectFit: 'cover'}}
          />
      </Modal>
    </div>
  );
};

export default Galerie;
