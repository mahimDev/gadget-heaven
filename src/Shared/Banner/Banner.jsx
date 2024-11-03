
const Banner = () => {
    return (
        <div className="w-11/12 relative mx-auto">
            <div className="text-center  bg-purple-600  text-white pt-10 pb-48 rounded-b-lg">
                <h1 className="font-bold text-5xl w-2/4 mx-auto mt-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className=" w-1/3 mx-auto mt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mt-10"> <button className="bg-white text-purple-600 font-bold text-xl py-2 px-8 rounded-3xl">Shop</button></div>
            </div>
            <div className="border left-[16%] top-[70%] absolute p-5 rounded-md w-2/3 mx-auto  h-[600px] bg-white bg-opacity-40">
                <img className="w-full h-full   rounded-md " src="https://i.ibb.co.com/nzkDY3Z/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;