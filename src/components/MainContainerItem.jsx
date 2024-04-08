import React from "react";

const MainContainerItem = (props) => {

    return(
        <div className="item">
            <img src={props.image} alt="" />
            <div className="item-info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href="#">Learn More →</a>
            </div>
        </div>
    )
}

export default MainContainerItem;