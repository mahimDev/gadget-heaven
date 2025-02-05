import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate()
    const { createUserEmailAndPassword, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const handleRegisterBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)
        createUserEmailAndPassword(email, password)
            .then(res => {
                console.log(res.user)
                e.target.reset()
                Swal.fire({
                    title: "Register success",
                    confirmButtonText: "Go To Home",
                    text: `Thanks for registering`,
                    icon: "success"
                }).then(() => navigate('/'))
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleGoogleBtn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleGithubBtn = () => {
        signInWithGithub()
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co.com/nzkDY3Z/banner.jpg')]  bg-cover ">
                <div className="backdrop-blur-md h-[92vh] flex justify-center">
                    <div className="mt-40 border h-fit p-10 rounded-md shadow-2xl ">
                        <h1 className="font-bold text-6xl text-white  text-center mb-9">Register</h1>
                        <form
                            onSubmit={handleRegisterBtn}
                            className="flex flex-col">
                            <input
                                type=""
                                name="name"
                                className="py-3 pl-4 pr-7  font-medium text-lg rounded-full mt-5 bg-transparent border-2 text-white"
                                placeholder="Username" />
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
                            <button className="py-2 px-10  font-medium text-lg rounded-full mt-9 text-white bg-purple-600">register</button>
                        </form>
                        <hr className="mt-5" />
                        <div className="flex justify-center gap-5 mt-5">
                            <button
                                onClick={handleGoogleBtn}
                            ><img className="w-12" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /></button>
                            <button
                                onClick={handleGithubBtn}
                            ><img className="w-12" src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" /></button>
                            <button><img className="w-12" src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" /></button>

                        </div>
                        <p className="text-white  w-fit mt-4">You have an account Go To <span className="border-b"> Login</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;