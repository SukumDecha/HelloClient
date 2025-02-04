import Navbar from "../components/navbar"
import Roomrecomend from "../components/Roomrecomend";
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
      
      <Roomrecomend/>
    </>
  );
};

export default Heropage;