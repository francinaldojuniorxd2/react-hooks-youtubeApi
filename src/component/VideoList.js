import React from 'react';

import VideoItem from './VideoItem';


const VideoList = ({ videoList }) => {
    console.log(videoList)
    console.log('Refress')

    const renderVideoItem = () => {
        videoList.map((video) => {
            return <VideoItem/>;
        })
    }

    return (
        <>
            {renderVideoItem}
        </>
    );

}

export default VideoList;