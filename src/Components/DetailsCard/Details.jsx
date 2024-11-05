import { useLoaderData, useParams } from "react-router-dom";
import { setItemAddToCard, setItemWishlist } from "../../Utils/utils";
import { useContext } from "react";
import { DataContext } from "../../Layout/Layout";

const Details = () => {
    const { id } = useParams()
    const {
        data,
        setAddToCard,
        addToCard,
        setWishlist,
        wishlist
    } = useContext(DataContext)

    // const data = useLoaderData()
    const item = data.find(item => item.product_id == id)

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
    const handleAddToCard = () => {
        setAddToCard([...addToCard, item])
    }
    const handleWishlist = () => {
        setWishlist([...wishlist, item])
    }

    return (
        <div className="w-11/12 relative mx-auto mb-[600px]">
            <div className="text-center  bg-purple-600  text-white pt-10 pb-48 rounded-b-lg">
                <h1 className="font-bold text-5xl w-2/4 mx-auto mt-4">Product Details</h1>
                <p className=" w-1/3 mx-auto mt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div className="border left-[16%] absolute top-[60%]  p-5 rounded-md w-2/3 mx-auto  h-[600px] bg-white bg-opacity-25 backdrop-blur-lg border-white">
                <div className="flex justify-around bg-white rounded-md ">
                    <div className="flex-1 flex justify-center  py-20 px-5">
                        <img className="  rounded-md" src={product_image} alt="" />
                    </div>
                    <div className="flex-1  py-10 px-40 ">
                        <h1 className="text-4xl font-bold">{product_title}</h1>
                        <p className="text-lg my-3 font-medium">Price : ${price}</p>

                        <p className="my-3 ">{description}</p>
                        <hr />

                        <p className=" my-3"><strong className="font-semibold">Specification : </strong>
                            {Specification.map((specification, i) => <p key={i} >{i + 1}. {specification}</p>)}
                        </p>


                        <p className="my-1"><strong className="font-semibold">Rating ⭐</strong></p>
                        <div className="flex gap-3 items-center ">
                            <p>⭐⭐⭐⭐⭐</p>
                            <p className="rounded-3xl border py-1 px-2">{rating}</p>
                        </div>
                        <div className="mt-5 flex items-center">

                            <div>
                                <button onClick={handleAddToCard}>
                                    <div className="bg-purple-600 border-2 border-purple-600 py-2 px-8 rounded-3xl font-bold text-xl text-white flex items-center">
                                        <p
                                        >Add To Card
                                        </p>
                                        <img className="w-6 ml-2" src="https://img.icons8.com/?size=100&id=23175&format=png&color=FFFFFF" alt="" />
                                    </div>
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={handleWishlist}
                                    className="border-2 border-purple-600 p-[11px] rounded-full font-bold text-purple-600 ml-5"
                                ><img className="w-6" src="https://img.icons8.com/?size=100&id=37975&format=png&color=7950F2" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;