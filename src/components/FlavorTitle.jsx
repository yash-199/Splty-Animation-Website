import { useGSAP } from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'
import React from 'react'

const FlavorTitle = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create(".first-text-split h1", {
            type: "chars",
        });
        const SecondtitleSplit = SplitText.create(".second-text-split h1", {
            type: "chars",
        });

        gsap.from(titleSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 30%",
                // markers: true,
            }
        });

        gsap.to(".flavor-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 10%",
                // markers: true,
            }
        });
        gsap.from(SecondtitleSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top 1%",
            }
        });
    })
    return (
        <div className='general-title 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] flex flex-col justify-center items-center h-full 2xl:gap-32 xl:gap-24 gap-16'>
            <div className='overflow-hidden  md:text-center text-[#523122] 2xl:py-0 py-3 first-text-split'>
                <h1>We have 6</h1>
            </div>
            <div
                style={{ clipPath: "polygon(0 0,0 0, 0 100%, 0% 100%)" }}
                className='flavor-text-scroll rotate-[-3deg] md:translate-y-5 border-[.5vw] border-[#faeade] absolute z-10'>
                <div className='bg-[#a26833] pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3'>
                    <h2 className='text-[#faeade]'>Freaking</h2>
                </div>
            </div>
            <div className='md:text-center overflow-hidden 2xl:py-0 py-3 second-text-split'>
                <h1>Delicious Flavour</h1>
            </div>
        </div>
    )
}

export default FlavorTitle
