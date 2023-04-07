import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patientEdit, setPatientEdit] = useState({});

  //BEFORE DOING IT DIRECTLY IN STATE
  /*   useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients"));
      patientsLS?.length > 0 && setPatients(patientsLS);

      console.log("PatientLS: ", patientsLS);
    };
    getLS();
  }, []); */

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patientEdit={patientEdit}
          setPatientEdit={setPatientEdit}
        />
        <PatientsList
          patients={patients}
          setPatientEdit={setPatientEdit}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
