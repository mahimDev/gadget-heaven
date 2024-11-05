import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Mobile = () => {
    const data = useLoaderData()
    const mobile = data.filter(mobile => mobile.category === "Mobile")

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                mobile?.map(item => <Card key={item?.product_id} item={item}></Card>)
            }
        </div>
    );
};

export default Mobile;