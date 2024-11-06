
const Login = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/nzkDY3Z/banner.jpg')]  bg-cover ">
            <div className="backdrop-blur-md h-[92vh] flex justify-center">
                <div className="mt-40 border h-fit p-10 rounded-md shadow-2xl ">
                    <h1 className="font-bold text-6xl text-white  text-center mb-9">Login</h1>
                    <form className="flex flex-col">
                        <input
                            type=""
                            name=""
                            className="py-3 pl-4 pr-7  font-medium text-lg rounded-full mt-5 bg-transparent border-2 text-white"
                            placeholder="Username" />
                        <input
                            type=""
                            name=""
                            className="py-3 pl-4 pr-7  font-medium text-lg rounded-full mt-5 bg-transparent border-2 text-white"
                            placeholder="Email" />

                        <p className="text-white border-b w-fit mt-4">forget password</p>
                    </form>
                    <div className="flex justify-center">
                        <button
                            className="py-2 px-10  font-medium text-lg rounded-full mt-9 text-white bg-purple-600"
                        >
                            Login
                        </button>

                    </div>
                    <p className="text-white  w-fit mt-4">You have don t no account Go To <span className="border-b"> Resister</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;