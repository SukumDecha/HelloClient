import Footer from "../components/Footer";
import Mybooking from "../components/Mybooking";
import Navbar from "../components/Navbar"
import Tools from "../components/Tools";


const Heropage = () => {
  

  return (
    <>
    
      <div className="Herobg">
        <Navbar/>
        <h1>Welcome to SIT <br />
        room booking system.</h1>
        <Tools/>
      </div>
      
      <Mybooking />
      <Footer/>
    </>
  );
};

export default Heropage;