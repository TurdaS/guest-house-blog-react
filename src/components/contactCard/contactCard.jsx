import { IoLocationOutline } from "react-icons/io5";
import { BsClock, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./contactCard.css";

const ContactCard = () => {
  return (
    <div className="contact-card-container">
      <h2>Contact</h2>
      <div className="d-flex flex-wrap justify-content-around gap-4 mt-5">
        <div className="contact-card-item">
          <IoLocationOutline size='2rem' className="mb-4" color="blue"/>
          <p>Str. Baneasa 35A, Targu-Mures</p>
        </div>
        <div className="contact-card-item">
          <BsClock size='2rem' className="mb-4" color="darkgreen"/>
          <p>Check in: 14:00</p>
          <p>Check out: 11:00</p>
        </div>
        <div className="contact-card-item" >
          <BsTelephone size='2rem' className="mb-4" color="red"/>
          <p>+40 799.672.212</p>
        </div>
        <div className="contact-card-item">
          <AiOutlineMail size='2rem' className="mb-4" color="yellow"/>
          <p>cazare@elphin.ro</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
