import React from 'react'
import ClipathTitle from '../components/ClipathTitle'
import VideoPinSection from '../components/VideoPinSection'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const BeefitSection = () => {
    useGSAP(() => {
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub: 1.5,
            },
        });

        revealTl.to(".benefit-section .first-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        })
            .to(".benefit-section .second-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            })
            .to(".benefit-section .third-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
                ease: "circ.out",
            })
            .to(".benefit-section .fourth-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            })
    })
    return (
        <section className='benefit-section  bg-[#222123] overflow-hidden relative'>
            <div className='container mx-auto pt-16'>
                <div className='col-center flex flex-col justify-center items-center'>
                    <div className='mt-0 col-center flex flex-col justify-center items-center'>
                        <p className='text-[#faeade] font-paragraph text-center text-lg'> Unlock the Advantages: <br />
                            Explore the Key Benefits of Choosing SPYLT</p>
                        <ClipathTitle
                            title={"Shelf Satble"}
                            color={"#faeade"}
                            bg={"#c88e64"}
                            className={"first-title rotate-[3deg] relative z-10"}
                            borderColor={"#222123"}
                        />
                        <ClipathTitle
                            title={"Protein + Caffeine"}
                            color={"#222123"}
                            bg={"#faeade"}
                            className={"second-title rotate-[-1deg] md:-translate-y-5"}
                            borderColor={"#222123"}
                        />
                        <ClipathTitle
                            title={"Infinitely recyclable"}
                            color={"#faeade"}
                            bg={"#7F3B2D"}
                            className={"third-title rotate-[1deg] md:-translate-y-12 relative z-10"}
                        />
                        <ClipathTitle
                            title={"Lactose free"}
                            color={"#2E2D2F"}
                            bg={"#FED775"}
                            className={"fourth-title rotate-[-5deg] md:-translate-y-12"}
                        />
                    </div>
                    <div className='md:mt-0 mt-10'>
                        <p className='text-[#faeade] font-paragraph text-center text-lg'>And much more...</p>
                    </div>
                </div>
            </div>
            <div className='relative overflow-box'>
                <VideoPinSection />
            </div>
        </section>
    )
}

export default BeefitSection
