import ss from "../assets/images/ss.png"
function Skills() {
   const skills = [
     { name: "HTML", level: 80 },
     { name: "CSS", level: 80 },
     { name: "Tailwind", level: 60 },
     { name: "JavaScript", level: 60 },
     { name: "React", level: 50 },
   ];

   return (
     <section className="w-full h-full bg-neutral-900  text-gray-400">
       <div className=" max-w-xl  mx-auto p-4">
         <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>

         {skills.map((skill, index) => (
           <div key={index} className="mb-4">
             <div className="flex justify-between mb-1">
               <span className="font-medium">{skill.name}</span>
               <span>{skill.level}%</span>
             </div>

             <div className="w-full bg-gray-400 h-3 rounded-full">
               <div
                 className="bg-green-500 h-3 rounded-full transition-all duration-500"
                 style={{ width: `${skill.level}%` }}
               ></div>
             </div>
           </div>
         ))}
       </div>
       <div className="w-full flex justify-center items-center">
         
         <div className=" w-3/4 p-4 border-2 mb-6 border-green-500 rounded-2xl">
           <img src={ss} className="w-full h-2/3" />
           <div className=" text-justify">
             <h3 className="font-bold  ">Simple Light Shop Project</h3>
             <p className="mb-4">
               This is simple and clean project built by using HTML, Tailwind
               CSS,JS and react.
             </p>
             <a
               className="border-2  border-green-400 rounded-full px-1 hover:bg-green-400 hover:text-white"
               href="https://htetaungwi.github.io/lightshop/"
             >
               view project
             </a>
           </div>
         </div>
       </div>
     </section>
   );
 }

export default Skills