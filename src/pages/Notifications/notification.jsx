import { Col, Row } from "react-bootstrap";
import Premium from "../../components/small/premium";
import FollowParent from "../../components/medium/followParent";
import Navbar from "../../components/big/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear} from "@fortawesome/free-solid-svg-icons";
import { Outlet , NavLink } from "react-router-dom";

const Notification = () => {
  // const navigate = useNavigate();
  return (
    <>
      <section className="home">
        <Row>
          <Col sm={12} md={2}>
            <Navbar />
          </Col>

          <Col sm={11} md={6} className="test">
            <section className="center">
              <div className="center__header">
                <div className="row mt-2 ms-2 ">
                  <div className="col text-start h4">Notification</div>
                  {/* <div className="col text-end">
                  <FontAwesomeIcon icon={faGear} className="right-search-icon me-5" />
                  </div>  */}
                </div>
                
                <div className="center__header__divs text-light ">
                <div><NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
                style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                to = "/notifications/"><span> All</span> </NavLink></div>
                <div><NavLink className = {({isActive}) =>{return (isActive) ? "left": "" }}
                style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                 to = "/notifications/verified/"><span> Verified</span> </NavLink></div>
                <div><NavLink className = {({isActive}) =>{return (isActive) ? "left": "" }} 
                style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                 to = "/notifications/mentions/"><span> Mentions</span> </NavLink></div>
                <hr />
                </div>
              </div>
              <Outlet/>  
            </section>
          </Col>
          
          <Col md={4}>
            <section className="right">
              <Premium />

              <div className="right__container">
                <FollowParent />
              </div>
            </section>
          </Col>
        </Row>
      </section>
      
    </>
  );
};
export default Notification;
