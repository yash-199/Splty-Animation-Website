import React from 'react'
import VideoPin from "../../public/Video/pin-video.mp4"
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from "react-responsive"
import gsap from 'gsap/all'
const VideoPinSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
    })
    useGSAP(() => {
        if (!isMobile) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".vd-pin-section",
                    start: "-55% top",
                    end: "100% top",
                    scrub: 1.5,
                    pin: true,
                }
            })
            tl.to(".video-box", {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut"
            })
        }
    })
    return (
        <section className="vd-pin-section h-screen overflow-hidden md:-translate-y-[15%]">
            <div style={{
                clipPath: isMobile ? "circle(100% at 50% 50%)" : "circle(6% at 50% 50%)",
            }} className='w-full h-full video-box'>
                <video
                    src={VideoPin}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-full h-full object-cover'
                />
                <div className='abs-center md:scale-100 scale-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <img src="/images/circle-text.svg" className='spin-circle' alt="" />
                    <div className='play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[6vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full'>
                        <img src="/images/play.svg" className='size-[3vw] ml-[.5vw]' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoPinSection
