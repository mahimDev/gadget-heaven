

const Card = ({ data }) => {
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
    } = data

    return (
        <div className=" rounded-md  p-4 shadow-xl">
            <div className="w-96 h-72 ">
                <img className="w-full h-full object-cover rounded-md " src={product_image} alt="" />
            </div>
            <h1 className="font-semibold text-xl mt-3">{product_title}</h1>
            <p className="text-gray-400 my-2">{price}</p>
            <div className="flex justify-end">
                <button className="py-1 px-7 rounded-3xl border-2 border-white text-lg font-semibold bg-purple-600 text-white hover:bg-white hover:text-purple-600 hover:border-purple-600 ">Details</button>
            </div>
        </div>
    );
};

export default Card;