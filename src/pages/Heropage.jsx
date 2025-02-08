import Footer from "../components/footer";
import Mybooking from "../components/Mybooking";
import Navbar from "../components/navbar"
import Tools from "../components/tools";


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