import { Link, Outlet, useLocation } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import CategoriesBtn from "../../Components/CategoriesBtn/CategoriesBtn";
import Card from "../../Components/Card/Card";
import { useContext } from "react";
import { DataContext } from "../../Layout/Layout";
import { Helmet } from "react-helmet";

const Home = () => {
    const { data } = useContext(DataContext)
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home {pathname} | Gadget Heaven</title>
                <Link to='/'></Link>
            </Helmet>
            <Banner></Banner>
            <h1 className="mt-[500px] font-bold text-5xl text-center my-10">Explore Cutting-Edge Gadgets</h1>


            <div className="flex w-11/12 mx-auto gap-5">
                <CategoriesBtn ></CategoriesBtn>
                {pathname == '/' ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                        {
                            data?.map(item => <Card key={item?.product_id} item={item}></Card>)
                        }
                    </div>
                    :
                    <Outlet></Outlet>
                }
            </div>



        </div>
    );
};

export default Home;