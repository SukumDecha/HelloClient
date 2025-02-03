import LinkCom from "./Link";
import '../App.css';
import App from "./opdate";

const navbar = () => {
  return (
    <>
    <div className='Navbar'>
        <div className='navcontent'>
          <div className="date">
            <App />
            <h2>Open Hour : 08.00 - 22.00</h2>
          </div>
            <LinkCom Linkto="" text=""/>
            <LinkCom Linkto="/Roombooking" text="My Booking"/>
            <LinkCom Linkto="/Help" text="Help"/>
            <LinkCom Linkto="/Report" text="Report"/>
        </div>
        <div className='navcontent'>
            <button>EN</button>
            <button><LinkCom Linkto="/Contactus" text="Contact us"/></button>
        </div>
    </div>
    </>
  )
}

export default navbar