import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from  "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ButtonBack(){
    return(
        <div>
            <Link to="/home">
                <FontAwesomeIcon icon={faArrowLeft} className='arrowleft faicon'/>
            </Link>
        </div>
    )
}
export default ButtonBack;