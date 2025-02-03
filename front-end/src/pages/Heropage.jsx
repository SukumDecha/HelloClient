import Navbar from "../components/navbar"
import Roomrecomend from "../components/Roomrecomend";
import BookingSearch from "../components/tools";

const Heropage = () => {
  return (
    <>
      <div className="Herobg">
        <Navbar/>
        <h1>Welcome to SIT <br />
        room booking system.</h1>
        <BookingSearch />
      </div>
      
      <Roomrecomend/>
    </>
  );
};

export default Heropage;