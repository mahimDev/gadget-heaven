import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Watch = () => {
    const data = useLoaderData()
    const Watch = data.filter(Watch => Watch.category === "Watch")

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                Watch?.map(item => <Card key={item?.product_id} item={item}></Card>)
            }
        </div>
    );
};

export default Watch;