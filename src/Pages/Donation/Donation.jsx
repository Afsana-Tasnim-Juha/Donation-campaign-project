import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationCard } from "../../Utility/LocalStorage";
import Cards from "../../Components/Cards/Cards";

const Donation = () => {
    const cardsdonation = useLoaderData();
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        const storedCardIds = getStoredDonationCard();
        if (cardsdonation.length > 0) {
            const donationCards = cardsdonation.filter((card) => storedCardIds.includes(card.id));
            setSelectedCards(donationCards);
        }
    }, [cardsdonation]);

    return (
        <div>
            { /* <h2>Selected Donations: {selectedCards.length}</h2>*/}
            <Cards cards={selectedCards} />
        </div>
    );
};

export default Donation;
