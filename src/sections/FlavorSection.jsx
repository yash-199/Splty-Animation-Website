import React from 'react'
import FlavorTitle from '../components/FlavorTitle'
import FlavorSlider from '../components/FlavorSlider'

const FlavorSection = () => {
    return (
        <section className='flavor-section min-h-dvh bg-[#faeade]'>
            <div className='h-full flex lg:flex-row flex-col items-center relative'>
                {/* for title */}
                <div className='lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0'>
                    <FlavorTitle />
                </div>
                {/* slider section */}
                <div className='h-full'>
                    <FlavorSlider />
                </div>
            </div>
        </section>
    )
}

export default FlavorSection
