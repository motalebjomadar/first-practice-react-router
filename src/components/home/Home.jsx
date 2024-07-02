import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";


const Home = () => {
    return (
        <div>
            <span>I am from home components</span>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;