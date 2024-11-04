import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Laptop = () => {
    const data = useLoaderData()
    const laptop = data.filter(laptop => laptop.category === "Laptop")
    console.log(laptop)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                laptop.map(item => <Card key={item?.product_id} item={item}></Card>)
            }
        </div>
    );
};

export default Laptop;