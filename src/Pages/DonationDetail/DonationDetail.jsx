import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationCard } from "../../Utility/LocalStorage";


const DonationDetail = () => {


    const [card, setCard] = useState({});
    const { id } = useParams();
    const idInt = parseInt(id);

    const cards = useLoaderData();



    // Call saveDonationCard function to save the card ID
    useEffect(() => {
        saveDonationCard(idInt)
    }, [idInt]);

    useEffect(() => {
        const findCard = cards?.find(card => card.id === idInt);
        setCard(findCard);
    }, [id, cards]);

    const cardStyle = {
        backgroundColor: card.category_bg,
        color: card.title_text,



    };


    return (
        <div>
            {/* Render details of the card */}
            <div className="grid grid-cols-1 md:grid-cols-2   gap-5 py-10">
                <div className="card card-side bg-base-100 shadow-xl w-[648px] h-[200px]" style={cardStyle}>
                    <figure><img className="w-full" src={card.picture} alt="Shoes" /></figure>
                    <div className="card-body">


                        <p className="" >{card.category}</p>
                        <h2 className="card-title font-semibold">{card.title}</h2>
                        <div className="card-actions ">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>

            </div>





            {/* Other details... */}
        </div>
    );
};

export default DonationDetail;
