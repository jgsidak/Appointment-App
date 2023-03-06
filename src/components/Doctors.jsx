import React from "react";
import Card from "react-bootstrap/Card";
import { doctorData } from "../helper/data";

export function Doctors (props) {
  const {didClickOnDoctor} = props;

    return (
        <div className="Doctors">
           <h2>Our Doctors</h2>
           <div className="DoctorCards">
          {doctorData.map((doctor) => (
            <Card key={doctor.id} style={{ width: '18rem' }} onClick={
              () => didClickOnDoctor(doctor.id)}>
              <Card.Img variant="top" src={doctor.img} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>
                  {doctor.dep}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          </div>
        </div>
      );
    };