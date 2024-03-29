import Head from "next/head";
import Image from "next/image";
import AllProduct from "../../Components/Frontend/Theme1Component/AllProduct";
import Banner from "../../Components/Frontend/Theme1Component/Banner";
import Brand from "../../Components/Frontend/Theme1Component/Brand";
import Footer from "../../Components/Frontend/Theme1Component/Footer";
import Header from "../../Components/Frontend/Theme1Component/Header";
import PopulationProduct from "../../Components/Frontend/Theme1Component/PopulationProduct";
import Slider from "../../Components/Frontend/Theme1Component/Slider";


const Theme = () => {
  return (
    <>
      <Head>
        <title>Sales Solution Theme</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="frontend_asset/images/Logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/b2aec34f70.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <main>
        <Header></Header>
        {/* <NavBar></NavBar> */}
        {/* section gaps */}
        <div className="section_gaps" />
        <Slider></Slider>
        {/* section gaps */}
        <div className="section_gaps" />
        <Banner></Banner>
        <PopulationProduct></PopulationProduct>
        {/* section gaps */}
        <div className="section_gaps" />
        {/* <Categories></Categories> */}
      </main>
       {/* section gaps */}
       <div className="section_gaps" />

       <AllProduct></AllProduct>
         {/* section gaps */}
         <div className="section_gaps" />
         <Brand></Brand>
         {/* section gaps */}
         <div className="section_gaps" />
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Theme;
