import React from 'react'
import Loader from './ajax-loader.gif'
import './loading.css'

function Loading() {
    return (
        <div className="load-page">
            <img src={Loader} alt="Loading..."/>
        </div>
    )
}

export default Loading
