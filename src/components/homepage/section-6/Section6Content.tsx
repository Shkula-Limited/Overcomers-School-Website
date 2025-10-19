import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { clubData } from "@/data";
import styles from "./Section6Content.module.css"
import SpacingContainer from "@/components/ui/SpacingContainer";



const Section6Content = () => {
  return (
    <>
        <SpacingContainer className="block lg:hidden">
          <MobileView />
        </SpacingContainer>
        <SpacingContainer className="pb-8 md:py-10 hidden xl:block">
            <DesktopView />
        </SpacingContainer>
    </>
  )
}

export default Section6Content
  

function MobileView() {
    return <div className="flex flex-row flex-wrap justify-center gap-6 mx-auto">
        {
            clubData.map(
                (item, index) => (
                    <CardUI key={index} title={item.title} desc={item.desc} image={item.image}  />
                )
            )
        }
    </div>
}


type CardUIProps = {
    title: string,
    desc: string,
    image: string,
}
function CardUI({title, desc, image}: CardUIProps) {
    return <div className={` ${styles['cardUiParent']} shadow-blur relative rounded-[10px] overflow-hidden w-[401px]`}>
        <figure className="w-full h-[372px] md:h-[450px] lg:h-[535px] overflow-hidden relative">
            <img src={`/${image}`} alt="" className="w-full h-full object-center object-cover" loading="lazy" />
            <div className={` ${styles['imageOverlay']} absolute inset-0 bg-black/25 transition-opacity duration-200`}></div>
        </figure>
        <div className={` ${styles['descContainer']} bg-white absolute bottom-0 w-full h-[167px] lg:h-[112px] rounded-[10px] px-2.5 flex items-center justify-center`}>
            <div className="flex flex-col gap-[5px] text-center">
                <h3 className=" poppins text-24-auto-2 text-shkula-primary font-semibold">{title}</h3>
                <span className={` ${styles['descText']} line-clamp-5 open-sans text-black font-regular text-12-auto-2 lg:opacity-0`}>{desc}</span>
            </div>
        </div>
    </div>
}

type SwiperWebComponent = HTMLElement & {
  swiper: {
    slidePrev: () => void;
    slideNext: () => void;
  };
};


function DesktopView() {
    const swiperContainerRef = useRef<SwiperWebComponent | null>(null)

    useEffect(() => {
      console.log(swiperContainerRef.current)
    }, [])

    function handleClick(buttonType: "left"|"right") {
      if (buttonType==="left" && swiperContainerRef.current) swiperContainerRef.current?.swiper.slidePrev();
      if (buttonType==="right" && swiperContainerRef.current) swiperContainerRef.current?.swiper.slideNext();
    }
    
    return (
        <div className="relative">
          <swiper-container 
              ref={swiperContainerRef}
              slides-per-view="2" 
              space-between="28"
              loop="true"
              breakpoints='{
                "700": {
                  "slidesPerView": 2
                },
                "1024": {
                  "slidesPerView": 3
                }
              }'
          >
              {
                  clubData.map(
                      (item, index) => (
                        <swiper-slide>
                            <div className="lg:py-4">
                              <CardUI key={index} title={item.title} desc={item.desc} image={item.image}  />
                            </div>
                        </swiper-slide>
                      )
                  )
              }
          </swiper-container>
          <button onClick={() => handleClick("left")} className="size-[60px] rounded-full bg-[#F77E23] flex-center-center  absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10">
            <ChevronLeft size={30} color="white" />
          </button>
          <button onClick={() => handleClick("right")} className="size-[60px] rounded-full bg-[#F77E23] flex-center-center absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-10">
            <ChevronRight size={30} color="white" />
          </button>
        </div>
    )
}