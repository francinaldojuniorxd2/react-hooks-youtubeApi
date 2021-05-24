import React from 'react';

const VideoDetail = ({ video }) => {

    const srcVideo = `https://www.youtube.com/embed/${video?.id?.videoId}`;

    return (
        <>
            { video &&
                <div>
                    <div className="ui embed">
                        <iframe src={srcVideo} title={video?.snippet?.title}/>
                    </div>

                    <div className='ui segment'>
                        <h4 className='ui header'>{video?.snippet?.title}</h4>
                        <p>{video?.snippet?.description}</p>
                    </div>
                </div>
            }
            {
                !video &&
                <div>
                    loading...
                </div>
            }
        </>
    );
};

export default VideoDetail;