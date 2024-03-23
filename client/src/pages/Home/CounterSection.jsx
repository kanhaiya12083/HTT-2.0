import React from "react";
import "./text.css";
import Counter from "../../UI/Counter";

export default function CounterSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-3 mb-12 md:h-[11rem] w-full justify-center items-center">
        <div className="flex flex-col md:flex-row font-semibold my-5 box-border h-full p-4 md:w-[70%] border-solid border-2 rounded-3xl md:rounded-2xl z-10 shadow-2xl justify-evenly items-center">
          <div className="flex flex-col box-border h-[100%] w-full md:w-[20%] md:mx-2 justify-center items-center my-3">
            <p className="text-4xl md:text-6xl text-center md:ml-5">
              <span className=" font-tektur">
                {" "}
                <Counter start={0} end={5} duration={2} />
              </span>
            </p>
            <p className="text-xl md:text-3xl text-center  md:mt-4 font-tektur">
              Offline Stores
            </p>
          </div>
          <div className="flex flex-col box-border h-[100%] w-full md:w-[20%] md:mx-2 justify-center items-center my-3">
            <p className="text-4xl md:text-6xl text-center md:ml-7">
              <span className=" font-tektur">
                <Counter start={0} end={10000} duration={2} />
              </span>
            </p>
            <p className="text-xl md:text-3xl text-center   md:mt-4 font-tektur">
              Students Trained
            </p>
          </div>
          <div className="flex flex-col box-border h-[100%] w-full md:w-[20%] md:mx-2 justify-center items-center my-3">
            <p className="text-4xl md:text-6xl text-center md:ml-6">
              <span className="  font-tektur">
                <Counter start={0} end={50} duration={2} />
              </span>
            </p>
            <p className="text-xl md:text-3xl text-center   md:mt-4 font-tektur">
              Courses
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
