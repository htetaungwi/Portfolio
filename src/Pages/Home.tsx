import { TypeAnimation } from 'react-type-animation'
import img1 from "../assets/images/img1.jpg"
import { Link } from 'react-router';
import CV from "../assets/images/p2.pdf"

function Home() {
    return (
      <section className="h-full bg-neutral-900  w-full fixed text-white ">
        <div className="flex flex-col  items-center pt-10">
          <img
            src={img1}
            alt="Profile"
            className="w-60 h-60  border-2 border-green-600 rounded-2xl p-2 "
          />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Welcome to my Portfolio",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "My name is Htet Aung Win",
              2000,
              "I am a Frontend Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.5em",
              display: "inline-block",
              marginTop: "10px",
              
            }}
            repeat={Infinity}
          />
        </div>
        <div className="flex items-center justify-center mt-16">
         <Link to="/about" className="bg-green-700 border-2 border-green-700 hover:bg-green-800 text-gray-300 font-bold py-2 px-4 rounded mr-4">
            About Me
          </Link>
        <a href={CV} download="Htet Aung Win - CV" className="border-2 border-green-700 ml-4 text-white font-bold py-2 px-4 rounded  hover:text-gray-600">
            Download CV
          </a>
        </div>
      </section>
    );
}

export default Home