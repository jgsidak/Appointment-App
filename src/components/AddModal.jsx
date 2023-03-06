import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { doctorData } from "../helper/data";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function AddModal (props) {
    const {show, handleClose, doctorId, addAppt} = props;


const [patientName, setPatientName] = useState();

const [apptDate, setApptDate] = useState();

// const doctorName = "test"/

const handleSubmit = () => {
    const doctorName = doctorData.filter(doctor => doctor.id === doctorId)[0].name;
    // console.log(doctorId, doctorData.filter(doctor => doctor.id === doctorId));
    const newAppt = {
        id: Math.random(),
        patient: patientName,
        day: apptDate,
        consulted: false,
        doctor: doctorName
      }
    addAppt(newAppt);
    handleClose();
    console.log(newAppt);
};

const handleCancel = () => {
    handleClose();
}

    return (<div className="AddModal">
        <Modal show={show}>
            <Form style={{padding: "10px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control onChange={(e) => setPatientName(e.target.value)} type="text" placeholder="Enter your name" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control onChange={(e) => setApptDate(new Date(e.target.value))} type="date" placeholder="Date" />
            </Form.Group>
            <Button variant="success" onClick={()=>handleSubmit()}>
                Submit
            </Button>
            <Button variant="warning" onClick={()=>handleClose()}>
                Cancel
            </Button>
            </Form>
        </Modal>
    </div>)
};