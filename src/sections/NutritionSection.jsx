import React, { useEffect, useState } from 'react'
import { nutrientLists } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap, { SplitText } from 'gsap/all';
import { useMediaQuery } from "react-responsive";

const NutritionSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
    })
    const [lists, setList] = useState(nutrientLists);
    useEffect(() => {
        if (isMobile) {
            setList(nutrientLists.slice(0, 3))
        } else {
            setList(nutrientLists)
        }
    })
    useGSAP(() => {
        const titleSplit = SplitText.create(".nutrition-title", {
            type: "chars"
        })

        const paraSplit = SplitText.create(".nutrition-section p", {
            type: "words, lines",
            linesClass: "paragraph-line"
        })

        const contentTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top center",
            },
        });
        contentTl.from(titleSplit.chars, {
            yPercent: 100,
            stagger: 0.02,
            ease: "power2.inOut",
        })
            .from(paraSplit.words, {
                yPercent: 300,
                rotate: 3,
                ease: "power1.inOut",
                duration: 1,
                stagger: 0.01,
            })

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top 80%",
            }
        })
        titleTl.to(".nutrition-text-scroll", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
            ease: "power1.inOut",
        });
    });
    return (
        <section className='nutrition-section min-h-dvh 2xl:h-[120dvh] overflow-hidden relative'>
            <img src="/images/slider-dip.png" className='w-full object-cover' alt="" />
            <img src="/images/big-img.png" className='big-img w-full absolute 2xl:h-full md:h-2/3 h-1/2 left-0 bottom-0 object-bottom 2xl:object-contain object-cover' alt="" />

            <div className='flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0'>
                <div className='relative inline-block md:translate-y-20'>
                    <div className='general-title relative flex flex-col justify-center items-center gap-24 '>
                        <div className='overflow-hidden place-self-start'>
                            <h1 className='nutrition-title 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw]'>It still does</h1>
                        </div>
                        <div
                            style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            }}
                            className='nutrition-text-scroll place-self-start rotate-[-3deg] border-[.5vw] border-[#e3d3bc] text-nowrap opacity-50 md:-mt-32 -mt-24'>
                            <div className='bg-[#a26833] pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block'>
                                <h2 className='text-[#e3d3bc] 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw]'>Body Good</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex md:justify-center items-center translate-y-5'>
                    <div className='md:max-w-xs max-w-md'>
                        <p className='text-lg md:text-right text-balance'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium unde a placeat quos, aliquam ipsa exercitationem fugiat natus corrupti quis architecto nam odit dolor voluptate modi totam sequi necessitatibus consectetur?</p>
                    </div>
                </div>
                <div className='nutrition-box absolute md:bottom-16 bottom-5 w-full md:px-0 px-5;'>
                    <div className='list-wrapper bg-[#fdebd2] rounded-full border-[.5vw] border-[#e8ddca] mx-auto max-w-7xl md:py-8 py-5 md:px-0 px-5 flex justify-between items-center'>
                        {lists.map((nutrient, index) => {
                            return (
                                <div key={index} className='relative flex-1 col-center px-20'>
                                    <div className='flex-row'>
                                        <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                                        <p className="font-paragraph text-sm mt-2">up to</p>
                                        <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                                            {nutrient.amount}
                                        </p>
                                    </div>
                                    {index !== lists.length - 1 && (
                                        <div className="spacer-border" />
                                    )}
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default NutritionSection
