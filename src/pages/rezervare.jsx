import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from '@emailjs/browser';

const Rezervare = () => {
  const [agree, setAgree] = React.useState(true);
  const formRef = React.useRef()

  const handleSubmit = (e) => {
    console.dir(e.target)
    emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
       alert('Email-ul a fost trimis cu succes.')

      },
      (error) => {
        alert('!!! Erroare la transmiterea emailului, incercati din nou mai tarziu!!!')

      }
    );
  }

  return (
    <div
      className="form-container w-100"
      style={{
        backgroundImage: "url(/images/lobby2.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "1rem 12rem",
      }}
    >
      <div className="form-text">Formular pt rezervare</div>
      <Form className="booking-form" onSubmit={(e) => {e.preventDefault(); handleSubmit(e);}} ref={formRef}>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label>
              Numele și prenumele
            </Form.Label>
            <Form.Control id="nume" placeholder="nume si prenume" name="name"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Adresă</Form.Label>
            <Form.Control
              id="address"
              name="address"
              placeholder="introduceți adresa dumneavoastra"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Adresă de email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="">Număr de telefon</Form.Label>
            <Form.Control id="phone" placeholder="numar de telefon" name="phone"/>
          </Form.Group>
          <Form.Label className="mb-3">
            Selectați tipul de cameră dorită
          </Form.Label>
          <Form.Select className="mb-3" name="room">
            Selectați tipul de cameră
            <option>tipul de cameră</option>
            <option value="Cameră dublă in regim single">Cameră dublă in regim single</option>
            <option value="Cameră dublă in regim norma">Cameră dublă in regim normal</option>
            <option value="Apartament">Apartament</option>
            <option value="Cameră pentru persoane cu dizabilități">Cameră pentru persoane cu dizabilități</option>
          </Form.Select>
          <br></br>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Sunt de acord cu prelucrarea datelor cu caracter personal"
              onChange={() => setAgree(state => !state)}
            />
          </Form.Group>
          <br></br>
          <Button type="submit" disabled={agree}>Trimite</Button>
        </fieldset>
      </Form>
    </div>
  );
};

export default Rezervare;
