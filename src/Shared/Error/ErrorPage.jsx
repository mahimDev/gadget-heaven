import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
            <img className="w-full h-[80vh] object-contain" src="https://i.ibb.co.com/5kthv0s/9a7c58b1532f43d69be0dcaec9130495.jpg" alt="" />
            <div className="flex justify-center">
                <Link to='/'><button className="py-2 px-10 border-2 border-white rounded-3xl text-2xl font-bold bg-purple-600 text-white hover:bg-white hover:text-purple-600 hover:border-purple-600">Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;