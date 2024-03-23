import React, { useState, useEffect } from "react";
import "./FAQ.css";

const data = [
  {
    question: " What types of courses does Raja-Rani Coaching offer?",
    answer:
      "Raja-Rani Coaching offers a variety of sewing courses ranging from basic stitching to advanced garment making, including specialized workshops in katori blouse design, western wear, and kids' apparel",
  },
  {
    question: "Can beginners enroll in your courses?",
    answer:
      "Absolutely! We have courses tailored for all skill levels, from complete beginners to advanced designers. Our basic stitching courses are perfect for those just starting out.",
  },
  {
    question: "Are the classes online or offline?",
    answer:
      "We offer both online and offline classes. Our online classes can be accessed from anywhere, while our offline workshops provide hands-on experience in selected cities.",
  },
  {
    question: "How can I access the course material after enrollment?",
    answer:
      "Once enrolled, students will receive access to our exclusive app where all course materials, including live session recordings and additional resources, are available.",
  },
  {
    question: "Is there support available after course completion?",
    answer:
      "Yes, we offer post-course support. Students can reach out via WhatsApp for any queries or join our live doubt-clearing sessions.",
  },
  {
    question: "Do you provide certificates upon course completion?",
    answer:
      "Yes, we provide certificates to students who successfully complete our courses, recognizing their skills and dedication.",
  },
  {
    question: "What is the duration of your courses?",
    answer:
      "Course durations vary. Basic courses may last a few weeks, while advanced courses can span several months. Each course page details its specific duration.",
  },
  {
    question: "How can I register for a course?",
    answer:
      "Registration can be done through our website or by contacting us directly via phone or email. Details are provided on our course pages.",
  },
  {
    question: "Are there any prerequisites for enrolling in advanced courses?",
    answer:
      "Some advanced courses may require basic sewing skills. We recommend checking the specific course requirements before enrolling.",
  },
  {
    question: "Do you offer any discounts or scholarships?",
    answer:
      "We occasionally offer discounts and run special promotions. Follow us on social media or subscribe to our newsletter for updates.",
  },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowDimensions.width < 600) {
      console.log("mobile view");
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <div className="section-7 flex mt-32 flex-col justify-center items-center w-full sm:w-full md:w-full lg:w-screen xl:w-full h-screen relative ">
        {isMobile ? (
          <h1 className="flex justify-center items-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl m-5 p-5 text-white">
            FAQ{" "}
          </h1>
        ) : (
          <h1 className="flex justify-center items-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl m-5 p-5 ">
            Frequently Asked Questions
          </h1>
        )}

        <div className="flex flex-col w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-[70%] ">
          {data.map((item, i) => (
            <div
              className="p-3 cursor-pointer box-content border-spacing-5 shadow-lg rounded-lg transition-all duration-1000 ease-in-out "
              onClick={() => toggle(i)}
            >
              <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-20 ">
                <h2 className="flex text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl   w-[90%]">
                  {item.question}
                </h2>
                <span className="flex justify-end items-end text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl ">
                  {selected === i ? "-" : "+"}
                </span>
              </div>
              <div className="h-[1px] flex justify-center items-center"></div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
