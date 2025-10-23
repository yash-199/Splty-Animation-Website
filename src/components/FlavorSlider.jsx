import React, { useRef } from 'react'
import { flavorlists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { useMediaQuery } from "react-responsive"

const FlavorSlider = () => {
    const silderRef = useRef()

    const isTablet = useMediaQuery({
        query: "(max-width:1024px)",
    })

    useGSAP(() => {
        const scrollAmount = silderRef.current.scrollWidth - window.innerWidth;

        if (!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "2% top",
                    end: `+=${scrollAmount + 1500}px`,
                    scrub: true,
                    pin: true,
                },
            });
            tl.to(".flavor-section", {
                x: `-${scrollAmount + 1500}px`,
                ease: "power1.inOut"
            });

        }

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavour-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true,
            },
        });

        titleTl.to(".first-text-split", {
            xPercent: -30,
            ease: "power1.inOut",
        }).to(".flavor-text-scroll", {
            xPercent: -22,
        },
            "<").to(".second-text-split", {
                xPercent: -10,
                ease: "power1.inOut"
            }, "<")

    })
    return (
        <div ref={silderRef} className='slider-wrapper lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 xl:mt-0'>
            <div className='flavors h-full w-full flex md:flex-row flex-col items-center 2xl:gap-72 lg:gap-52 md:gap-24 gap-7 flex-nowrap'>
                {
                    flavorlists.map((flavour) => (
                        <div key={flavour.name} className='relative z-30 lg:w-[50vw] w-96 lg:h-[7-vh] md:w[90vw] md:h-[50vh] h-80 flex-none md:rotate-[-8deg] rotate-0'>
                            <img src={`/images/${flavour.color}-bg.svg`} alt="" className='absolute bottom-0' />
                            <img src={`/images/${flavour.color}-drink.webp`} alt="" className='absolute left-1/2 -translate-x-1/2 bottom-0 lg:h-[37vw] h-[80vw]' />
                            <img src={`/images/${flavour.color}-elements.webp`} alt="" className='absolute md:top-0 md:bottom-auto bottom-10 w-full' />
                            <h1 className='absolute md:bottom-10 md:left-10 bottom-5 left-5 text-[#faeade] md:text-6xl text-3xl font-semibold uppercase tracking-tighter'>{flavour.name}</h1>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default FlavorSlider
