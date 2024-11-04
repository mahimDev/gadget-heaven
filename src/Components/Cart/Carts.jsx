
const Carts = ({ item }) => {

    const {
        Specification,
        availability,
        category,
        description,
        price,
        product_id,
        product_image,
        product_title,
        rating,
    } = item

    return (
        <div>


            <div className="flex justify-between p-4 w-9/12 mx-auto rounded-md mt-5 shadow-lg">
                <div className="flex gap-5">
                    <div className="w-52 h-28 border overflow-hidden rounded-md ">
                        <img className="w-full   " src={product_image} alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-xl font-bold">{product_title}</h1>
                        <p className="my-2">{description}</p>
                        <p>Price : ${price}</p>
                    </div>
                </div>
                <button><img className="w-9 backdrop-blur-2xl" src="https://img.icons8.com/?size=100&id=OZuepOQd0omj&format=png&color=000000" alt="" /></button>
            </div>
        </div>
    );
};

export default Carts;