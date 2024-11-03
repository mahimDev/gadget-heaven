import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";

const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <h1 className="mt-[500px] font-bold text-5xl text-center my-10">Explore Cutting-Edge Gadgets</h1>
            <CardsContainer data={data}></CardsContainer>


        </div>
    );
};

export default Home;