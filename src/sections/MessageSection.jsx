import { useGSAP } from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'
import React from 'react'

const MessageSection = () => {
    useGSAP(() => {
        const firstMsgSplit = SplitText.create(".first-message", {
            type: " words",
        })
        const SecondMsgSplit = SplitText.create(".second-message", {
            type: " words",
        })
        const paragraphMsgSplit = SplitText.create(".message-content p", {
            type: " words,lines",
            linesClass: "paragraph-line"
        })

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            duration: 1,
            ease: "power2.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                scrub: true,
                // markers: true,
            }
        })
        gsap.to(SecondMsgSplit.words, {
            color: "#faeade",
            duration: 1,
            ease: "power2.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
                // markers: true,
            }
        });

        const revealtl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top 60%",
                // markers: true,
            }
        });

        revealtl.to(".msg-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.inOut"
        })

        const paragraphTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
                // markers: true,
            }
        });

        paragraphTl.from(paragraphMsgSplit.lines, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01,
        })

    })
    return (
        <section className='message-content bg-[#7f3b2b] text-[#faeade] min-h-dvh overflow-hidden flex justify-center items-center relative z-20'>
            <div className='container mx-auto flex justify-center items-center py-28 relative'>
                <div className='w-full h-full'>
                    <div className='msg-wrapper 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw]  tracking-[-.35vw] flex flex-col justify-center items-center md:gap-24 gap-14'>
                        <h1 className='first-message 2xl:max-w-4xl md:max-w-2xl max-w-xs text-center  text-[#faeade10]'>Stir up your fearless past and</h1>

                        <div
                            style={{
                                clipPath: "polygon(0 0,0 0,0 100%,0% 100%)",
                            }}
                            className='msg-text-scroll rotate-[3deg] 2xl:translate-y-5 -transalte-y-5 absolute z-10  border-[.5vw] border-[#7f3b2d]'>
                            <div className='bg-[#e3a458] md:pb-5 pb-3 px-5'>
                                <h2 className='text-[ #7f3b2d]'>Fuel Up</h2>
                            </div>
                        </div>
                        <h1 className='second-message 2xl:max-w-7xl md:max-w-4xl max-w-xs text-center  text-[#faeade10]'>
                            Your Future with every gul of Perfect Protein
                        </h1>
                    </div>
                    <div className='flex justify-center items-center md:mt-20 mt-10'>
                        <div className='max-w-md px-10 flex justify-center items-center overflow-hidden'>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae ex quos voluptatem culpa temporibus, dolorum eveniet rem exercitationem deserunt? Amet tenetur obcaecati fugit facilis nemo vero ab, modi asperiores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MessageSection