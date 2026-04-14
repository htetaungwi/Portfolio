interface CardProps{
    id: number;
    name: string;
    icon: string;
    link: string;
    content: string;
}
const Card = ({ name, icon, link, content }: CardProps) => { 
    return (
      <div className="m-3 w-60 md:h-26 md:w-80  shadow-green-800 shadow-md rounded-3xl">
        <a
          href={link}
          className=" border-2 w-full h-full  border-green-900 rounded-3xl flex  text-white bg-gray-900"
        >
          <img src={icon} alt={name} className="h-24 w-24 rounded-full p-2" />
          <div className="p-4 text-center text-sm md:text-lg  ">
            <h3>{name}</h3>
            <p>{content}</p>
          </div>
        </a>
      </div>
    );
}

export default Card