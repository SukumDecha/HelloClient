import LinkCom from "./Link";
import '../App.css';

const navbar = () => {
  return (
    <>
    <div className='Navbar'>
        <div className='flex gap-10 bg-green-600'>
          <div>
            <h2>Feb 2,Sun</h2>
            <h2>Open : 10.00 - 20.00</h2>
          </div>
            <LinkCom Linkto="" text=""/>
            <LinkCom Linkto="/Roombooking" text="RoomBooking"/>
            <LinkCom Linkto="/Help" text="Help"/>
            <LinkCom Linkto="/Report" text="Report"/>
            <LinkCom Linkto="/Calendar" text="Calendar"/>
        </div>
        <div className='flex gap-10 bg-green-600'>
            <button>EN</button>
            <LinkCom Linkto="/Contactus" text="Contact us"/>
        </div>
    </div>
    </>
  )
}

export default navbar