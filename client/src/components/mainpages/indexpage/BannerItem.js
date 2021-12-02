import React from "react";

function BannerItem(props){
    return(
            <div className="banner_item" style={{backgroundImage: `url(${props.image})`}}>
                <div className="banner_category">
                    <a href="/products">{props.title}</a>
                </div>
            </div>
    )
}

export default BannerItem;