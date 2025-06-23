import { shkulaOverview } from "@/data"

const Section10 = () => {
  return (
    <section className="bg-shkula-primary">
        <div className="mycontainer1 py-3 flex flex-col gap-3 md:gap-6 md:flex-row md:justify-between">

            {/* logo & description */}
            <div className="md:w-[60%]">
                <a href="https://shkula.com">
                    <figure className="w-max mx-auto mb-3 md:mx-0">
                        <img src="/ShkulaLogoWhite.png" alt="" className="w-24 sm:w-32" />
                    </figure>
                </a>
                <p className="open-sans text-xs sm:text-sm md:text-base text-white">
                    {shkulaOverview}
                </p>
            </div>

            {/* download store buttons */}
            <div className="w-max mx-auto flex gap-7 items-center">
                <a href="https://apps.apple.com/app/shkula-admin/id6692608157">
                    <img src="/google-play-btn.png" alt="" className="w-20 sm:w-28 lg:w-36" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=org.foresightridge.shkula_admin&pli=1">
                    <img src="/apple-store-btn.png" alt="" className="w-24 sm:w-32 lg:w-44" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Section10