import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Headphone = () => {
    const data = useLoaderData()
    const Headphone = data.filter(Headphone => Headphone.category === "Headphone")

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                Headphone.map(item => <Card key={item?.product_id} item={item}></Card>)
            }
        </div>
    );
};

export default Headphone;