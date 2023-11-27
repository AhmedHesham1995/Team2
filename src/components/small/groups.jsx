import React from 'react';

const Groups = (props) => {
    return (
        <div>
              <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={props.imagee}
              style={{ width: "180px", height: "150px", borderRadius: "20px" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <h4 style={{ color: "white" }}>{props.title}</h4>
              <div>{props.nummember}</div>
            </div>
          </div>
        </div>
    );
}

export default Groups;
