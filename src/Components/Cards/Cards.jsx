import { useEffect } from "react";
import Card from "../Card/Card";



const Cards = ({ cards }) => {


    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                {cards?.map(card => <Card key={card.id} card={card} />)}
            </div>

        </div>
    );
};

export default Cards;
