import Card from "../Card/Card";
import CategoriesBtn from "../CategoriesBtn/CategoriesBtn";

const CardsContainer = ({ data }) => {

    return (
        <div className="flex w-11/12 mx-auto gap-5" >
            <CategoriesBtn></CategoriesBtn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    data.map(data => <Card key={data?.product_id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default CardsContainer;