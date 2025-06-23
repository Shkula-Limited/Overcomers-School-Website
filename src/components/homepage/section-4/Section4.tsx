import { ArrowRight } from "lucide-react"
import { d1, data1, data2 } from "@/data"
import { Button } from "@/components/ui/button"
import SpacingContainer from "@/components/ui/SpacingContainer"



const Section4 = () => {
  return (
    <section id="programs-section" className="w-full max-w-[1600px] mx-auto bg-white-1">
        <SpacingContainer className="mycontainer1 py-3 md:py-8 md2:py-12 space-y-6 md:space-y-10">
            <ProgramCards name="Our Academic Programs" showCTA={true} data={data1} />
            <ProgramCards name="Our special Programs" showCTA={false} data={data2} />
        </SpacingContainer>
    </section>
  )
}

export default Section4


type ProgramCardsProps = {
    name: string,
    showCTA: boolean,
    data: d1[]
}
function ProgramCards({name, showCTA, data}: ProgramCardsProps) {
    return (
        <div className="flex flex-col gap-4 md:gap-6 text-center">
            <h2 className="montserrat font-semibold text-24-auto md:poppins md:text-5xl md:text-48-auto">{name}</h2>
            <div className="grid grid-cols-[minmax(0,391px)] sm:grid-cols-[repeat(2,minmax(0,391px))] gap-5 md:gap-8 justify-center items-center">
                {
                    data.map(
                        (item, index) => (
                            <ProgramCard key={index} title={item.title} description={item.description} image={item.image} showCTA={showCTA} className={index === 2 ? "sm:relative sm:left-[calc(50%+20px)] md:left-[calc(50%+32px)] lg:static" : ''} />
                        )
                    )
                }
            </div>
        </div>
    )
}



type ProgramCard = {
    showCTA: boolean,
    title: string,
    image: string,
    description: string,
    className: string,
}
function ProgramCard({title, description, image, showCTA, className}: ProgramCard) {
    return (
        <div className={`rounded-[10px] overflow-hidden ${className} bg-white`}>
            <figure className="w-full h-[200px] md:h-[215px] bg-slate-500">
                <img src={image} alt="" className="object-cover object-center w-full h-full" />
            </figure>
            <div className="bg-white py-3 px-5 md:p-6 flex flex-col gap-3 md:gap-7">

                {/* text-content */}
                <div className="flex flex-col gap-2 text-gray-2 text-start">
                    <span className="montserrat font-bold text-16-auto md:font-medium md:text-24-auto ">{title}</span>
                    <span className="open-sans text-xs md:text-sm">{description}</span>
                </div>

                {/* cta-button */}
                {
                    showCTA
                    &&
                    <a href="#contact-section">
                        <Button className="py-2.5 px-5 flex gap-1 items-center rounded-32px bg-[#2E4289] text-white open-sans font-semibold text-xs md:py-5 md:px-[52px] md:text-14-auto w-max">
                            <span>Apply Now</span>
                            <ArrowRight size={14} />
                        </Button>
                    </a>
                } 
            </div>
        </div>
    )
}