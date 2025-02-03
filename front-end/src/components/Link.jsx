import { Link } from "react-router-dom";
import '../App.css';

const LinkCom = ({Linkto,text}) => {
  return (
    <>
    <Link to={Linkto} className="Link">{text}</Link>
    </>
  )
}

export default LinkCom