import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Section5.module.css'
import { useRef } from 'react';
import { testimonies } from '@/data';

const Section5 = () => {
  return (
    <section id='testimonials-section' className="py-5 md:pt-8 md:pb-0 container w-full max-w-xl md:max-w-7xl mx-auto relative max-h-[470px] aspect-[20/17] md:max-h-[700px] md:aspect-[885/478] mb-6 xxxs:mb-0">
        {/* background */}
        <Section5Background />

        {/* content */}
        <Section5Content />
    </section>
  )
}

export default Section5;


const Section5Background = () => {
    return (

        <div className={`absolute top-5 w-full xl:px-8 ${styles.spacing1}`}>
            <figure className="w-full overflow-hidden">
                <img src="/section-5-mobile-background.png" alt="" className="md:hidden w-full h-full object-cover object-center" />
                <img src="/section-5-desktop-background-1.png" alt="" className="hidden md:block w-full h-full object-cover object-center" />
            </figure>
        </div>
    
    )
}

type SwiperWebComponent = HTMLElement & {
    swiper: {
      slidePrev: () => void;
      slideNext: () => void;
    };
  };

const Section5Content = () => {
    const swiperContainerRef = useRef<SwiperWebComponent | null>(null)

    function handleClick(buttonType: "left"|"right") {
      if (buttonType==="left" && swiperContainerRef.current) swiperContainerRef.current?.swiper.slidePrev();
      if (buttonType==="right" && swiperContainerRef.current) swiperContainerRef.current?.swiper.slideNext();
    }

    return (
        <swiper-container
            ref={swiperContainerRef}
            loop="true"
            // autoplay='{
            //     "delay": 3000,
            //     "pauseOnMouseEnter": true
            // }'
        >
            {
                testimonies.map(
                    (item, index) => (
                        <swiper-slide key={index}>
                            <div className="w-full px-4 md:px-8 py-2 relative">
                                <TestimonyCard handleClick={handleClick} testimony={item.testimony} testifierName={item.testifierName} testifierRole={item.testifierRole} testifierImage={item.testifierImage} />
                            </div>
                        </swiper-slide>
                    )
                )
            }
        </swiper-container>
    )
}

type TestimonyCardProps = {
    handleClick: (buttonType:"left"|"right") => void,
    testimony: string,
    testifierName: string,
    testifierRole: string,
    testifierImage: string,
}
const TestimonyCard = ({handleClick, testimony, testifierName, testifierRole, testifierImage}: TestimonyCardProps) => {
    return (
        <div className="w-full mx-auto space-y-2 max-w-[311px] md:w-4/5 md:max-w-[946px] pb-20">
                <Title testifierRole={testifierRole} />
                <Content handleClick={handleClick} testimony={testimony} testifierName={testifierName} testifierRole={testifierRole} testifierImage={testifierImage} />
        </div>
    )
}

const Title = ({testifierRole}: {testifierRole: string}) => {
    const isTeacher = testifierRole === 'Principal' || testifierRole === 'Proprietress'
    const isParent = testifierRole === 'Parent'
    return (
        <div className="w-max pr-1 md:pr-9 flex flex-col">
            <span className="montserrat text-[10px] md:text-[18px] leading-[190%] tracking-normal text-[#B0B0C0]">TOP STUDYING</span>
            <span className="montserrat font-semibold text-sm md:text-[32px] md3:text-[40px] leading-[130%] tracking-normal text-[#181B32]">
                Our {` `}
                {
                    isParent
                    ? "parent"
                    : isTeacher
                        ? "teacher"
                        : "student"

                }
                {` `} says
            </span>
        </div>
    )
}


type ContentProps = {
    handleClick: (buttonType:"left"|"right") => void,
    testimony: string,
    testifierName: string,
    testifierRole: string,
    testifierImage: string,
}
const Content = ({handleClick, testimony, testifierName, testifierRole, testifierImage}: ContentProps) => {
    return (
        <article className="w-[calc(100%-16px)] bg-[#FAFAFA] rounded-lg shadow-[0px_28px_59px_0px_rgba(21,21,21,0.15)] p-3 pb-8 flex flex-col xxxs:flex-row gap-5 md:gap-14 relative md:pr-9 md:pt-8 md3:pt-11 md:pl-12 md3:pl-16 md:pb-16 md3:pb-10">
            <div className="md:w-[calc(50%-28px)]">
                <span className="block open-sans text-[10px] md:text-[18px] lg:text-[22px] leading-[166.6%] text-black">
                    {testimony}
                </span>
                <ApostropheSVG />
                <span className='hidden md:flex flex-col gap-1 mb-5 md3:mb-0'>
                    <span className='open-sans md:text-[24px] lg:text-[29px] leading-[137%] text-black'>{testifierName}</span>
                    <span className='open-sans text-12-raleway-auto text-[#808080]'>{testifierRole}</span>
                </span>
            </div>

            <div className="flex md:opacity-0 flex-col flex-shrink-0 items-center text-center relative -top-8">
                <figure className="rounded-lg overflow-hidden relative w-full max-w-36 aspect-[125/187] bg-black/50">
                    {testifierImage && <img src={`/${testifierImage}`} alt="" className="w-full h-full object-cover object-center" loading='lazy' />}   
                    <div className="absolute inset-0 bg-[rgba(62,102,223,0.2)]"></div>
                </figure>
                <span className="w-full line-clamp-1 open-sans font-semibold text-xs md:text-lg text-black">{testifierName}</span>
                <span className="w-full line-clamp-1 open-sans text-10-auto text-[#808080] ">{testifierRole}</span>
            </div>

            <figure className='hidden md:block absolute md:-top-[60px] md3:-top-[100px] right-9 w-[calc(45%-28px)] aspect-[127/190] rounded-3xl overflow-hidden bg-black/50'>
                {testifierImage && <img src={`/${testifierImage}`} alt="" className="w-full h-full object-cover object-center" loading='lazy' />}
                <div className="absolute inset-0 bg-[rgba(62,102,223,0.2)]"></div>
            </figure>

            <button onClick={() => handleClick("right")} className="absolute bottom-3 md:bottom-5 md3:bottom-16 -right-3 md:-right-5 md3:-right-10 w-[78px] md:w-[121px] h-9 md:h-[53px] bg-black text-white flex gap-1 md:gap-7 items-center justify-center rounded-lg">
                <span className='open-sans font-semibold text-xs leading-[8px] md:text-sm md:leading-6'>Next</span>
                <ChevronRight size={16} color='#ffffff' />
            </button>

            <button onClick={() => handleClick("left")} className="absolute bottom-3 md:bottom-5 md3:bottom-16 -left-3 md:-left-5 md3:-left-20 w-[100px] md:w-[121px] h-9 md:h-[53px] bg-black text-white flex gap-1 items-center justify-center rounded-lg">
                <ChevronLeft size={16} color='#ffffff' />
                <span className='open-sans font-semibold text-xs leading-[8px]'>Previous</span>
            </button>
        </article>
    )
}

const ApostropheSVG = () => {
    return (
        <svg className="ml-auto size-[31px] md:size-[50px] md3:size-[64px] lg:size-[94px] md3:ml-[50%]" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.12">
            <path d="M23.5616 15.724C26.4581 15.724 28.4099 17.7752 28.4099 20.8144C28.4099 23.5493 26.1666 25.8278 23.1281 25.8278C19.8 25.8278 17.3408 23.0929 17.3408 18.9154C17.3408 9.42008 24.1409 5.62198 28.4099 5.16553V9.34307C25.5153 9.87465 22.261 12.8369 22.1153 16.1053C22.261 16.0301 22.8385 15.724 23.5616 15.724ZM8.80471 15.724C11.6974 15.724 13.6511 17.7752 13.6511 20.8144C13.6511 23.5493 11.4078 25.8278 8.36932 25.8278C5.04121 25.8278 2.58203 23.0929 2.58203 18.9154C2.58203 9.42008 9.38214 5.62198 13.6511 5.16553V9.34307C10.7566 9.87465 7.50224 12.8369 7.3565 16.1053C7.50224 16.0301 8.07968 15.724 8.80471 15.724Z" fill="#050505"/>
            </g>
        </svg>
    )
}