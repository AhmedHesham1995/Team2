import h from '../../assets/h.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Posts from '../../components/small/posts';
const Followings = () => {
    return (
        <section>
            <div className="center__happen">
                <div className="center__happen__top">
                    <img src={h} alt="" />
                    <input type="text" placeholder="what's happening?!" />
                </div>
                <div className="center__happen__bottom">
                    <div className="center__happen__bottom-icons">
                        <span>
                            <FontAwesomeIcon icon={faImage} className="happenIcon" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faSquare} className="happenIcon" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faSmile} className="happenIcon" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
                        </span>
                    </div>
                    <button className="center__happen__bottom-btn">Post</button>
                </div>
            </div>

            <Posts name="H" username="@ahmedH" date="Jun 27" content="My time is now!" img={h}/>
            <Posts name="H" username="@ahmedH" date="Jun 27" content="My time is now!" img={h}/>
            <Posts name="H" username="@ahmedH" date="Jun 27" content="My time is now!" img={h}/>
            <Posts name="H" username="@ahmedH" date="Jun 27" content="My time is now!" img={h}/>                   
        </section>
    );
}

export default Followings;
