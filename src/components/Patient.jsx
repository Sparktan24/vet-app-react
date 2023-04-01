import React from "react";

const Patient = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: <span className="font-normal normal-case">Neto</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">mail@mail.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Registration date:{" "}
        <span className="font-normal normal-case">Dic 10 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          tempora tempore. Voluptatum, fuga? Quam ea rem facere assumenda saepe
          tenetur ducimus distinctio alias dolore animi, ipsam molestiae
          blanditiis esse cupiditate?
        </span>
      </p>
    </div>
  );
};

export default Patient;
