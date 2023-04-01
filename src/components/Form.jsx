import React, { useEffect, useState } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients }) => {
  const [namePet, setNamePet] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  FORM VALIDATION
    if ([namePet, owner, email, registrationDate, symptoms].includes("")) {
      console.log("There is an empty row");
      setError(true);
      return;
    }
    setError(false);

    //  Patient object
    const objectPatient = {
      namePet,
      owner,
      email,
      registrationDate,
      symptoms,
      id: generateId(),
    };
    //console.log(objectPatient);
    setPatients([...patients, objectPatient]);

    //  RESET FORM
    setNamePet("");
    setOwner("");
    setEmail("");
    setRegistrationDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patients monitoring</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patient & <span className="text-indigo-600 font-bold">manage</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pets name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Pets name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={namePet}
            onChange={(e) => setNamePet(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owners name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Owners name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contact owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="Register"
            className="block text-gray-700 uppercase font-bold"
          >
            Register
          </label>
          <input
            id="Register"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={registrationDate}
            onChange={(e) => setRegistrationDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            name=""
            id="symptoms"
            cols="30"
            rows="10"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Add patient"
        />
      </form>
    </div>
  );
};

export default Form;
