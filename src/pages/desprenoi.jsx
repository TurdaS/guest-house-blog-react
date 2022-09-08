import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { MdFreeBreakfast } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { FaParking } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";

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
        Cuplurile apreciază în mod deosebit această locaţie, de aceea, pensounea a primit scorul 9.7
        pentru un sejur pentru 2 persoane.Această proprietate este de asemenea
        cotată pentru cel mai bun raport calitate/preţ în Târgu Mureş! Clienții
        primesc mai mult pentru banii lor comparativ cu alte proprietăți din
        acest oraș.<br></br>
        <br></br>
        Vorbim pe limba dumneavoastră!
      </h4>
      <div>
        <div className="despre-text"> Ce oferim noi </div>
        <div className="despre-icons">
          <div>
            <AiOutlineWifi size="1.5rem" className="mb-1" color="blue" />
            Wi-fi gratuit pentru toate camerele si spatiile comune
            <MdFreeBreakfast size="1.5rem" className="mb-1" color="#333" />
            Mic-dejun intre orle 08:00-10:00
            <FaConciergeBell size="1.5rem" className="mb-1" color="grey" />
            Self check-in cu intrare pe baza de cod
          </div>
          <div>
            <MdOutlineBusinessCenter
              size="1.5rem"
              className="mb-1"
              color="brown"
            />
            Sala de sedinte
            <FiMonitor size="1.5rem" className="mb-1" color="black" />
            Televiziune prin cablu si satelit
            <FaParking size="1.5rem" className="mb-1" color="blue" />
            Parcare gratuita
            <GiCctvCamera size="1.5rem" className="mb-1" color="blue" />
            Supraveghere video 24 de ore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desprenoi;
