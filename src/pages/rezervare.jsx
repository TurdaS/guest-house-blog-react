import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Rezervare = () => {
  return (
    <div
      className="form-container w-100"
      style={{
        backgroundImage: "url(/images/lobby2.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "1rem 10rem",
      }}
    >
      <div className="form-text">Formular pt rezervare</div>
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label>
              Numele și prenumele
            </Form.Label>
            <Form.Control id="email" placeholder="Nume si Prenume" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Adresă</Form.Label>
            <Form.Control
              id="email"
              placeholder="introduceți adresa dumneavoastra"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Adresă de email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="example@email.com"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="">Număr de telefon</Form.Label>
            <Form.Control id="phone" placeholder="Nr de telefon" />
          </Form.Group>
          <Form.Label className="mb-3">
            Selectați tipul de cameră dorită
          </Form.Label>
          <Form.Select className="mb-3">
            Selectați tipul de cameră
            <option>tipul de cameră</option>
            <option value="1">Cameră dublă in regim single</option>
            <option value="2">Cameră dublă in regim normal</option>
            <option value="3">Apartament</option>
            <option value="4">Cameră pentru persoane cu dizabilități</option>
          </Form.Select>
          <br></br>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Sunt de acord cu prelucrarea datelor cu caracter personal"
            />
          </Form.Group>
          <br></br>
          <Button type="submit">Trimite</Button>
        </fieldset>
      </Form>
    </div>
  );
};

export default Rezervare;
