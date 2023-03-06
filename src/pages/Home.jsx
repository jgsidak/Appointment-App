import React from "react";
import AddModal from "../components/AddModal";
import { ApptList } from "../components/AppointmentList";
import { Doctors } from "../components/Doctors";
import { useState } from "react";
import { appointmentData } from "../helper/data";


export function Home () {

    const [show, setShow] = useState(false);

    const [doctorId, setDoctorId] = useState();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [appt, setAppt] = useState(appointmentData);

    const didClickOnDoctor = (doctorId) => {
        console.log(doctorId)
        setDoctorId(doctorId)
        setShow(true)
    };

    const deleteAppt = (apptId) => {
        let newApptList = appt.filter(appt => appt.id !== apptId)

        setAppt(newApptList)
    }

    const addAppt = (newAppt) => {
        let newApptList = appt
        newApptList.push(newAppt)
        console.log(newApptList)

        setAppt(newApptList)
    }

    const toggleConsulted = (appointment) => {
        appointment.consulted = true
        let newApptList = appt.filter(x =>
            x.id !== appointment.id)
        newApptList.push(appointment)

        setAppt(newApptList)
    }

    return (
        <div className="Home">
        <h1>CLARUS HOSPITAL</h1>
        <Doctors  didClickOnDoctor={didClickOnDoctor}/>
        <ApptList appointmentData={appt} deleteAppt={deleteAppt} toggleConsulted={toggleConsulted}/> 
        <AddModal show={show} handleClose={handleClose} addAppt={addAppt} doctorId={doctorId}/>
        </div>
    )};