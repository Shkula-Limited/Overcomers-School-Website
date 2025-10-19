import { viewResultLink } from "@/data"
import { ArrowRight } from "lucide-react"

const Section2B = () => {
  return (
    <section className="mb-12 mt-3 sm:mt-0 md:-mt-6 mycontainer1 rounded-[10px] flex items-center justify-center relative overflow-hidden">
            <div className="my-14 flex flex-col items-center justify-center text-center gap-3">
                <h2 className="poppins text-2xl sm:text-3xl md:text-48-auto font-semibold text-white">Online Result Checker</h2>
                <a 
                  href={viewResultLink}
                  className="flex items-center gap-2 py-5 px-10 sm:px-14 bg-white rounded-32px shadow-[0px_2px_4px_rgba(40,41,61,0.04),_0px_8px_16px_rgba(96,97,112,0.16)] font-semibold">
                    <span className="text-shkula-primary text-xs md:text-sm">
                        View Your
                        Child’s {' '}
                        <span className="hidden sm:inline">/ Children’s</span> {' '}
                        Result
                    </span>
                    <ArrowRight size={14} color="#4044A7" />
                </a>
            </div>
            <figure className="absolute inset-0 -z-10  mx-4 md:mx-8 rounded-[10px] overflow-hidden">
                <img src="/section-2-b.webp" alt="" className="size-full object-center object-cover" />
            </figure>
    </section>
  )
}

export default Section2B
