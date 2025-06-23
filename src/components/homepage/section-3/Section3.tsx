import { useState } from "react"
import { aboutUsComponent2Data, aboutUsImages, schoolOverviewInParagraphs } from "@/data.tsx"
import { Line } from "@/components/ui/icons/Line"
import { Icon1 } from "@/components/ui/icons/Icon1"


const Section3 = () => {
  return (
    <section id="about-us-section" className="mycontainer1 text-schoolcom">
        <div className="flex flex-col gap-7">
            <Content1 />
            <Content2 />
        </div>
    </section>
  )
}

export default Section3




function Content1() {
    return (
        <div className="md:hidden"><AboutUsComponent1 /></div>
    )
}




function Content2() {
    return(
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
            <div>
                <swiper-container 
                    loop="true" 
                    autoplay='{
                        "delay": 3000
                    }'
                    effect="fade"
                    fade-effect='{
                        "crossFade": true
                    }'
                    speed="3000"
                >
                    {
                        aboutUsImages.map((item, index) => (
                            <swiper-slide>
                                <figure key={index} className="">
                                    <img src={`/${item}`} alt="" className="w-full" />
                                </figure>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>
            <div>
                <div className="hidden md:block ">
                    <AboutUsComponent1 />
                </div>
                
                <Line className="hidden md:block my-6" />

                <AboutUsComponent2 />
            </div>
        </div>
    )
}



function AboutUsComponent1() {
    return (
        <div className="flex flex-col">
            <span className="flex gap-2.5 items-center montserrat sm:text-14-monteserrat-auto md:text-18-monteserrat-auto">
                <Icon1 className="w-6 md:w-8" />
                <span>About Us</span>
            </span>
            <span className="font-semibold montserrat text-24-auto md:text-3xl lg:text-35-montserrat-auto">Our School's Overview</span>
            <div className="open-sans text-xs md:text-sm lg:text-base leading-150% md:h-[144px] md:overflow-auto custom-scrollbar flex flex-col gap-2">
                {schoolOverviewInParagraphs}
            </div>
        </div>
    )
}


function AboutUsComponent2() {
    const [activeContent, setActiveContent] = useState("mission")
    const activeContentData = aboutUsComponent2Data.find(item => item.value === activeContent)
    return (
        <div className="w-full flex flex-col gap-3 md:gap-6 relative">
            <nav className="sticky top-0 bg-white raleway font-semibold text-12-raleway-auto lg:text-14-auto"><ul className="grid grid-cols-3 gap-3.5 md:gap-4 md2:gap-[18px]">
                {
                    aboutUsComponent2Data.map(
                        (item, index) => (
                            <AboutUsComponent2NavItem 
                                key={index}
                                value={item.value}
                                label={item.label}
                                activeContent={activeContent}
                                handleClick={() => setActiveContent(item.value)}
                            />
                        )
                    )
                }
            </ul></nav>
            <div className="flex flex-col gap-3 open-sans text-xs md:text-sm lg:text-base md:max-h-32 custom-scrollbar">
                {
                    activeContentData 
                    &&
                    activeContentData.content
                }
            </div>
        </div>
    )
}




type AboutUsComponent2NavItemProps = {
    value: string,
    label: string,
    activeContent: string,
    handleClick: () => void,
}

function AboutUsComponent2NavItem({value, label, activeContent, handleClick}: AboutUsComponent2NavItemProps) {
    return (
        <li 
            onClick={() => handleClick()}
            className={`
                rounded-sm py-4 text-center 
                ${activeContent===value ? "bg-shkula-primary text-white" : "bg-gray-1"}
            `}>
            {label}
        </li>
    )
}