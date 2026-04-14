import Email from "../assets/images/Email.jpg"
import Phone from "../assets/images/phone.jpg"
import Mail from "../assets/images/github.png"
import Wp from "../assets/images/whatsapp.jpg"
import Card from "./Card";
const contactCards = [
  {
    id: 1,
    name: "Email",
    icon: Email,
    link: "mailto:htetaung18399@gmail.com",
    content: "htetaung18399@",
  },
  {
    id: 2,
    name: "Phone",
    icon: Phone,
    link: "tel:+971505931821",
    content: "+971505931821",
  },
  {
    id: 3,
    name: "GitHub",
    icon: Mail,
    link: "https://github.com/htetaungwi",
    content: "Htet Aung Win",
  },
  {
    id: 4,
    name: "WhatsApp",
    icon: Wp,
    link: "https://wa.me/+971505931821",
    content: "+971505931821",
  },
];
function Contact() {
  return (
    <section className="w-full h-full bg-neutral-900 fixed flex  justify-center  ">
      <div className="  md:mt-25">
        <div className="grid grid-cols-1  md:grid-cols-2">
          {contactCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact