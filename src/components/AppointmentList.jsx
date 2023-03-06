import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { ImCancelCircle } from 'react-icons/im';
import Button from 'react-bootstrap/Button';

export function ApptList (props) {
  const {appointmentData, deleteAppt, toggleConsulted} = props;
    return (
       <ListGroup>
        <h1> Appointment List </h1>
          {appointmentData.map((appointment) => (
            <ListGroup.Item key={appointment.id}>
                <div className="patientName">{appointment.patient}</div>
                <div className="apptConsult">{appointment.consulted}</div>
                <div className="apptDoctor">{appointment.doctor}</div>

              {appointment.consulted&&<h3>CONSULTED!</h3>}

                <Button variant="danger" onClick={() => deleteAppt(appointment.id)}>
                  <ImCancelCircle/>
                </Button>

                <Button onClick={()=> toggleConsulted
                (appointment)}>
                <div className="apptDay">{appointment.day.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric'})}</div>
                </Button>

            </ListGroup.Item>))
          }
      </ListGroup>
    )};