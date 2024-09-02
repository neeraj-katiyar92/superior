"use client"
import React, { useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";

const VideoPlayer = ({setIsPlaying,isPlaying}) => {
    const videoRef = useRef(null);


    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <div className={isPlaying ? "video-col-active" : "video-col"}>
                <div className="top-layer">CUSTOMER STORIES</div>
                <video ref={videoRef} width="100%" >
                    <source src="http://localhost:3000/videos/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="bottom-layer">
                    <p>

                        I use Superior Realty to help me succeed.
                    </p>
                    <button onClick={handlePlayPause} >
                        {isPlaying ? <IoMdPause /> : <FaPlay />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer