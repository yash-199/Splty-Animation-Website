import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'
import { cards } from '../constants'

const TestimonialSection = () => {
    const vdRef = useRef([])
    useGSAP(() => {
        gsap.set(".testimonials-sections", {
            marginTop: "-140vh"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,
            }
        })

        tl.to(".testimonials-section .first-title", {
            xPercent: 70,
        })
            .to(".testimonials-section .sec-title", {
                xPercent: 25,
            }, "<"
            )
            .to(".testimonials-section .third-title", {
                xPercent: -50,
            }, "<")

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "200% top",
                pin: true,
                scrub: 1.5,
            }
        })
        pinTl.from(".vd-card", {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut",
        })
    })

    const handlePlay = (index) => {
        const video = vdRef.current[index];
        video.play();
    }

    const handlePause = (index) => {
        const video = vdRef.current[index];
        video.pause();
    }
    return (
        <section className='testimonials-section bg-milk relative w-full h-[120dvh]'>
            <div className='absolute size-full flex flex-col items-center pt-[5vw]'>
                <h1 className='uppercase text-[14rem] leading-tight font-semibold text-black first-title'>What's</h1>
                <h1 className='uppercase text-[14rem] leading-tight font-semibold text-[#e3a458] sec-title'>Everyone</h1>
                <h1 className='uppercase text-[14rem] leading-tight font-semibold text-black third'>Talking</h1>
            </div>
            <div className='pin-box flex items-center justify-center w-full ps-32 absolute 2xl:bottom-32 bottom-[50vh]'>
                {cards.map((card, index) => (
                    <div key={index}
                        className={`vd-card w-1/4 h-1/6  flex-none md:rounded-[2vw] rounded-3xl -ms-44 overflow-hidden 2xl:relative absolute border-[.5vw] border-milk ${card.translation} ${card.rotation}`}
                        onMouseEnter={() => handlePlay(index)}
                        onMouseLeave={() => handlePause(index)}
                    >
                        <video
                            ref={(el) => (vdRef.current[index] = el)}
                            src={card.src}
                            playsInline
                            muted
                            loop
                            className="size-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TestimonialSection
