import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { MdFreeBreakfast } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { FaParking } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { FaChessKnight } from "react-icons/fa";


const Desprenoi = () => {
  return (
    <div className="container-despre">
      <img className="img-despre" src="./images/about3.jfif" />

      <h4 className="despre">
        Situată în Târgu-Mureș, la 4,4 km de Complexul sportiv și de agrement
        „Mureșul”, Pensiunea Elphin oferă cazare cu lounge comun, parcare
        privată gratuită și grădină. Pensiunea are camere de familie,cu paturi
        matrimoniale.<br></br>
        La pensiune, camerele sunt dotate cu birou, TV cu ecran plat, baie
        privată, lenjerie de pat și prosoape. Toate camerele au dulap.<br></br>{" "}
        Pentru confortul dumneavoastră, aveți la dispoziție papuci, articole de
        toaletă gratuite și uscător de păr. <br></br>Recepţia proprietăţii are
        acces non-stop, intrarea fiind pe baza de cod. Cel mai apropiat aeroport
        este Aeroportul Târgu Mureș, situat la 14 km de Pensiunea Elphin.
        Cuplurile apreciază în mod deosebit această locaţie, de aceea, pensounea
        a primit scorul 9.7 pentru un sejur pentru 2 persoane.Această
        proprietate este de asemenea cotată pentru cel mai bun raport
        calitate/preţ în Târgu Mureş! Clienții primesc mai mult pentru banii lor
        comparativ cu alte proprietăți din acest oraș.<br></br>
        <br></br>
        Vorbim pe limba dumneavoastră!
      </h4>
      <div>
        <div className="despre-text"> Ce oferim noi </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column p-2">
            <div className="pb-4">
              <AiOutlineWifi size="2rem" className="me-2"  color="blue" />
              <span>Wi-fi gratuit pentru toate camerele</span>
            </div>
            <div className="pb-4" >
              <MdFreeBreakfast size="2rem" className="me-2 " color="#333" />
              <span>Mic-dejun intre orle 08:00-10:00 </span>
            </div>
            <div className="pb-4">
              <MdOutlineBusinessCenter size="2rem" className="mb-1" color="brown"/>
              <span>Sala de sedinte </span>
            </div>
            <div className="pb-4">
              <FaParking size="2rem" className="mb-1" color="blue" />
              <span>Parcare gratuita </span>
            </div>
          </div>
          <div className="d-flex flex-column p-2">
          <div className="pb-4">
              <FiMonitor size="2rem" className="mb-1" color="black" />
              <span>Televiziune prin cablu si satelit </span>
            </div>
            <div className="pb-4">
              <FaConciergeBell size="2rem" className="me-2" color="grey" />
              <span>Self check-in cu intrare pe baza de cod </span>
            </div>
            <div className="pb-4">
              <FaChessKnight size="2rem" className="mb-1" color="darkgoldenrod" />
              <span>Sala de jocuri </span>
            </div>
            <div className="pb-4">
              <GiCctvCamera size="2rem" className="mb-1" color="blue" />
              <span>Supraveghere video 24 de ore </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desprenoi;
