import { useGSAP } from '@gsap/react'
import HeroImg from '../../public/images/static-img.png'
import gsap, { SplitText } from 'gsap/all'
const HeroSections = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create(".hero-title", {
            type: "chars",
        })

        const tl = gsap.timeline({
            delay: 1,
        })

        tl.to(".hero-content", {
            opacity: 1,
            y: 0,
            ease: "power1.inOut",
        }).to(".hero-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
            ease: "circ.out"
        }, "-=0.5")
            .from(titleSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power2.out"
            }, "-=0.5");

        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",
                start: "1% top",
                end: "bottom top",
                scrub: true,
            }
        });
        heroTl.to(".hero-container", {
            rotate: 7,
            scale: 0.9,
            yPercent: 30,
            ease: "power1.inOut"
        })
    })
    return (
        <section className='bg-[#232224]'>
            <div className='hero-container  relative w-screen h-dvh overflow-hidden'>
                <img src={HeroImg} alt="HeroImg" className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150' />
                <div className='hero-content opacity-0 relative z-10 w-full h-full flex flex-col 2xl:justify-center items-center translate-y-10 2xl:pt-0 md:pt-32 pt-24'>
                    <div className='overflow-hidden'>
                        <h1 className='hero-title text-[#523122] 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.5rem] font-bold uppercase leading-[9vw] tracking-[-.35rem] 2xl:mb-0 mb-5'>Freaking Delicious</h1>
                    </div>
                    <div
                        style={{
                            clipPath: "polygon(50% 0, 50% 0,50% 100%, 50% 100%)"
                        }}
                        className='hero-text-scroll rotate-[-3deg] mb-8 border-[.5vw] border-[#faeade]'>
                        <div className='bg-[#a26833]'>
                            <h1 className='uppercase 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold text-[#fce1cd] leading-[9vw] tracking-[-.35vw] 2xl:px-[1.2vw] px-3 2xl:pb-[1vw] pb-5 2xl:py-0 py-3'>Protein + Caffine</h1>
                        </div>
                    </div>
                    <h2 className='text-center text-[#000] 2xl:text-xl md:text-2xl text-lg font-medium 2xl:px-0 px-5'>
                        Live life to the fullest with SPYLT: Shatter boredom and embrace
                        <br /> your inner kid with every deliciously smooth chug
                    </h2>
                    <div className='md:mt-16 mt-10 text-[#523122] bg-[#e3a458] uppercase font-bold text-lg rounded-full md:p-5 p-3 md:px-16 px-10'>
                        <p>Chug a SPYLY</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSections
