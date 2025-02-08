import Footer from "../components/Footer";
import Accordion from "../components/Formhelp";
import Navbar from "../components/Navbar"

const Help = () => {
  return (
    <>
    <div className="bg-[#455E86] w-full h-[125px] ">
      <Navbar />
    </div>
    <div className="grid mx-50 my-10 gap-8 ">
      <Accordion 
      topic="How to book a classroom ?" 
      text="Select the desired date and time =>
      Choose an available classroom =>
      Confirm the booking."/>
      <Accordion 
      topic="How far in advance can I book a classroom ?" 
      text="You can book in advance without limits, but you can only view up to 7 days from today."/>
      <Accordion 
      topic="Can I cancel or modify my booking ?" 
      text="Yes, you can cancel or modify your booking at any time."/>
      <Accordion 
      topic="Who should I contact if I have issues with booking ?" 
      text="Please contact the Staff team."/>
    </div>
    <Footer/>
    </>
  )
}

export default Help