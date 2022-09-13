import ImgCarousel from "../components/carousel/carousel";
import ContactCard from "../components/contactCard/contactCard";

const poze = ["discount1.jfif"];

const Home = () => {
  return (
    <div>
      <ImgCarousel />
      <div className="home-gallery">
        <div className="text-gallery">
          Dacă sunteți in concediu, aveți o întlânire de afaceri sau sunteți doar în
          trecere prin Târgu Mureș, camerele si apartamentele Pensiunii Elphin
          credem că sunt cea mai bună alegere.  Aici veți reuși sa petreceti
          o seara relaxantă sau o noapte romantică, după caz. Camerele de baie
          sunt dotate cu vană sau cabină de duș.La noi veți avea la dispoziție,
          pe intreaga durată, lucruri de inaltă calitate, camere curate, televizoare cu
          ecrane plate, wifi gratuit, parcare supravegheată video 24 de ore.
        </div>
        <div className="d-flex justify-content-between align-items-center" >
          <h2>
            Luna aceasta beneficiati de 10% pentru rezervarile facute pe Booking
          </h2>
          {poze.map((image) => (
            <img src={`images/${image}`} alt="..." className="home-image" />
          ))}
        </div>
        <ContactCard />
      </div>
    </div>
  );
};

export default Home;
