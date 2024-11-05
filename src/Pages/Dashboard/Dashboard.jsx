import { useContext, useEffect, useState } from "react";
import Carts from "../../Components/Cart/Carts";
import Wishlist from "../../Components/WishList/Wishlist";
import { DataContext } from "../../Layout/Layout";

const Dashboard = () => {
    const [isActive, setIsActive] = useState(true)
    const [totalCost, setTotalCost] = useState(0)
    const { addToCard, setAddToCard, wishlist } = useContext(DataContext)

    useEffect(() => {
        const cost = [...addToCard].reduce((i, item) => i + item.price, 0)
        const toFixed = cost.toFixed(2)
        setTotalCost(toFixed)
    }, [addToCard])
    const handleSortedByPrice = () => {
        const sorted = [...addToCard].sort((a, b) => b.price - a.price)
        setAddToCard(sorted)
    }
    const handlePurchase = () => {

        setAddToCard([])
    }
    console.log(wishlist)
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center ">
                <div className="bg-purple-600 rounded-md pt-10">
                    <h1 className="font-bold text-5xl text-white">Dashboard</h1>
                    <p className="my-4 font-semibold text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="flex justify-center gap-7 pb-10 mt-10">
                        <button
                            onClick={() => setIsActive(true)}
                            className={`py-2 border-2 px-10 rounded-3xl text-xl font-bold  ${isActive ? "bg-white text-purple-600 border-white" : "text-white"}`}>Cart</button>
                        <button
                            onClick={() => setIsActive(false)}
                            className={`py-2 border-2 px-10 rounded-3xl text-xl font-bold  ${!isActive ? "bg-white text-purple-600 border-white" : "text-white"}`}>Wishlist</button>
                    </div>
                </div>

            </div>
            <div className="mt-20">
                {isActive ?
                    <div>
                        <div className="flex justify-between mt-10 w-9/12 mx-auto">
                            <h1 className="text-3xl font-bold">Cart</h1>

                            <div className="flex gap-4">
                                <h1 className="text-3xl font-bold">Total cost: {totalCost}</h1>
                                <button
                                    onClick={handleSortedByPrice}
                                    className="py-2 border-2 border-purple-600 px-10 rounded-3xl text-xl font-bold text-purple-600"
                                >Sort by Price</button>
                                <button
                                    onClick={handlePurchase}
                                    className="py-2 border-2 border-purple-600 px-10 rounded-3xl text-xl font-bold bg-purple-600 text-white"
                                >Purchase</button>
                            </div>
                        </div>
                        {
                            addToCard?.map((item, i) => <Carts key={i} item={item}></Carts>)
                        }
                    </div>
                    :
                    <div>
                        <div className="flex justify-between mt-10 w-9/12 mx-auto">
                            <h1 className="text-3xl font-bold">Wishlist</h1>
                            <div className="flex gap-4">
                                <button className="py-2 border-2 border-purple-600 px-10 rounded-3xl text-xl font-bold text-purple-600">Sort by Price</button>

                            </div>
                        </div>
                        {
                            wishlist?.map((item, i) => <Wishlist key={i} item={item}></Wishlist>)
                        }
                    </div>
                }

            </div>

        </div>
    );
};

export default Dashboard;