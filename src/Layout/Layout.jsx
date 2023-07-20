import Header from "../components/header/Header";
import React from 'react';
import Footer from "../components/footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
    return ( 
        <>
        <Header />
        <div>
            <Routers/>
        </div>
        <Footer/>
        </>
     );
}
 
export default Layout;
