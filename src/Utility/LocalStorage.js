const getStoredDonationCard = () => {
    const storedDonationCard = localStorage.getItem('donation-cards');
    if (storedDonationCard) {
        return JSON.parse(storedDonationCard);
    }
    return [];
}

const saveDonationCard = id => {
    const storedDonationCards = getStoredDonationCard();
    const exists = storedDonationCards.find(cardId => cardId === id);
    if (!exists) {
        storedDonationCards.push(id);
        localStorage.setItem('donation-cards', JSON.stringify(storedDonationCards))
    }

}
export { getStoredDonationCard, saveDonationCard }