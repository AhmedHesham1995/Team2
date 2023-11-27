

const NotificationsProp = (props) => {
    return (
        <div className="center__trend">
          <div className=" p-2 borders border-secondary border-bottom"> 
              <div className="row text-start align-items-center  p-1 ">
               <div className="col-1 "><img src={props.img} className="w-50 h-100"/></div>
               <div className="col-11 mt-1  ">{props.notification}</div>
              </div>
          </div>
        </div>
        
    );
}

export default NotificationsProp;
