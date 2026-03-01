import c1Image from '../assets/pp11.jpg';
import c2Image from '../assets/pp22.png';
import c3Image from '../assets/pp33.png';
import c4Image from '../assets/pp44.png';
import '../components/card1.css';

const cards = [{
    title: "Confused About Your Career Path?",
    text: "",
    imge: c1Image
},
{
    title: "Not Sure Which Job Fits You?",
    text: "",
    imge: c2Image
},
{
    title: "Don't Know Where to Start?",
    text: "",
    imge: c3Image
},
{
    title: "Then you came to Right Place ",
    text: "Upload your resume and discover opportunities tailored for you.",
    imge: c4Image
}]

const Card1 = () => {
    return (
        <div className="cc">
            {cards.map((card, index) => (
                <div className="card" key={index}>
                    <img src={card.imge} alt="card" />
                    <h1 className="ih1">{card.title}</h1>
                    <p className="ip">{card.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Card1;