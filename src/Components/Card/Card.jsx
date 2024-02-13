import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, picture, title, category, category_bg, title_text, } = card;



    const cardStyle = {
        backgroundColor: category_bg,
        color: title_text,



    };

    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div className="card card-compact bg-base-100 shadow-xl" style={cardStyle}>
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">


                        <p className="" >{category}</p>
                        <h2 className="card-title font-semibold">{title}</h2>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Card;
