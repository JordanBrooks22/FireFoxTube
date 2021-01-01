import React from "react";
import ChannelRow from '/ChannelRow';
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
    return <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
            image="" 
            Channel=""
            verified
            subs=""
            noOfVideos=""
            description=""

            />

            <hr />
            <VideoRow 
            views=""
            subs=""
            description=""
            timestamp=""
            channel=""
            title=""
            image=""
            />
    </div>
    );
}

export default SearchPage;