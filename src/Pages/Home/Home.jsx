import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";
import Donation from "../Donation/Donation";
import Card from "../../Components/Card/Card";



const Home = () => {

    const cards = useLoaderData()


    return (
        <div>

            <Banner></Banner>
            <Cards cards={cards}> </Cards>

            <Donation cardsdonation={cards}></Donation>


        </div>
    );
};

export default Home;