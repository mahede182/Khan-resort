import React from "react"
import loadingGif from "../assets/images/gif/loading-gear.gif"

export default function Loading() {
    return (
        <div className="loading">
            <h4>rooms daata loading ...</h4>
            <img src={loadingGif} alt="loading"/>
        </div>
    )
}
