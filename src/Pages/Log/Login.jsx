import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
    const navigate = useNavigate()
    const { signInUser } = useContext(AuthContext)
    const handleLoginBtn = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                e.target.reset()
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div className="bg-[url('https://i.ibb.co.com/nzkDY3Z/banner.jpg')]  bg-cover ">
            <div className="backdrop-blur-md h-[92vh] flex justify-center">
                <div className="mt-40 border h-fit p-10 rounded-md shadow-2xl ">
                    <h1 className="font-bold text-6xl text-white  text-center mb-9">Login</h1>
                    <form
                        onSubmit={handleLoginBtn}
                        className="flex flex-col">
                        <input
                            type=""
                            name="email"
                            className="py-3 pl-4 pr-7  font-medium text-lg rounded-full mt-5 bg-transparent border-2 text-white"
                            placeholder="Email" />
                        <input
                            type=""
                            name="password"
                            className="py-3 pl-4 pr-7  font-medium text-lg rounded-full mt-5 bg-transparent border-2 text-white"
                            placeholder="Password" />

                        <p className="text-white border-b w-fit mt-4">forget password</p>
                        <div className="flex justify-center">
                            <button
                                className="py-2 px-10  font-medium text-lg rounded-full mt-9 text-white bg-purple-600"

                            >Login</button>

                        </div>
                    </form>
                    <p className="text-white  w-fit mt-4">You have don t no account Go To <Link to='/register'><span className="border-b"> Resister</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;