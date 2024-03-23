import React from 'react';
import founder from "./founder.png"
import cofounder from "./cofounder.png"
import instructor from "./instructor.png"
import manager from "./manager.png"

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            About Us
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Learn more about our company and what drives us forward.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-800 leading-relaxed">
              Embark on a journey with Raja-Rani Coaching, a beacon of innovation in the sewing and fashion design landscape. Located in the vibrant state of Gujarat, India, our institute is a testament to the pioneering spirit of its founders, Mr. Mohit and Mrs. Priya. 
              </p>
            </div>
          </div>
        
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Our Values
              </h3>
              <p className="text-gray-800 leading-relaxed">
              Whether you're a novice or an experienced stitcher, our welcoming community is here to inspire and support you. Join us in the world of stitching, where creativity knows no bounds, and where your unique style takes center stage. Embrace the art of stitching, and let's craft something extraordinary together."
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Our Approach
              </h3>
              <p className="text-gray-800 leading-relaxed">
              Sharpen your precision for flawless stitches and seamless finishes, enhancing the quality of your sewing projects.
              Learn efficient methods to speed up your sewing process without compromising on quality, saving time for more creativity
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet Our Instructors
          </h3>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-1/3 md:w-1/4 px-4 mb-8">
            <img
              className="rounded-full h-32 w-32 mx-auto mb-4"
              src={founder}
              alt="Instructor"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              John Doe
            </h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-1/3 md:w-1/4 px-4 mb-8">
            <img
              className="rounded-full h-32 w-32 mx-auto mb-4"
              src={cofounder}
              alt="Instructor"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Jane Smith
            </h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-1/3 md:w-1/4 px-4 mb-8">
            <img
              className="rounded-full h-32 w-32 mx-auto mb-4"
              src={instructor}
              alt="Instructor"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Alice Johnson
            </h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-1/3 md:w-1/4 px-4 mb-8">
            <img
              className="rounded-full h-32 w-32 mx-auto mb-4"
              src={manager}
              alt="Instructor"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Bob Anderson
            </h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="text-center mb-8">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
    Our Courses
  </h3>
</div>
<div className="flex flex-wrap justify-center">
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-8">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">
        Course 1
      </h4>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-8">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">
        Course 2
      </h4>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-8">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">
        Course 3
      </h4>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-8">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">
        Course 4
      </h4>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
</div>

           
            </div>
            
            </div>
            
          );
          }
          

          export default AboutUs
            
