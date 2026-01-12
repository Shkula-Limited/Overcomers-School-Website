import { Button } from "@/components/ui/button"
import { certifiedTeachers, latestNewsSectionImage, numberOfSchools, schoolName, yearsOld } from "@/data.tsx"

const Section2Content = () => {
  return (
    <div className="md:min-h-64 relative">
        {/* section-2-image/latest-news-flag for mobile */}
        <div className="md:hidden absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 flex-align-center flex-col">
            <span className="raleway text-xs leading-[9.4px] md:text-base md:leading-4 p-[7px] md:p-3 underline bg-shkula-secondary text-schoolcom">Latest News</span>
            <figure className="w-60 h-[215px] bg-gray-400 border-4 border-white">
                <img src={"/" + latestNewsSectionImage} className="w-full h-full object-cover object-center" />
            </figure>
        </div>

        {/* latest-news-flag for desktop */}
        <span className="hidden md:block raleway text-base leading-4 p-3 underline bg-shkula-secondary text-schoolcom absolute top-0 -translate-y-full">Latest News</span>

        {/* content */}
        <Content />

        {/* facts UI */}
        <div className="w-[83%] md:w-[70%] py-1.5 px-2.5 grid grid-cols-2 gap-2 absolute bottom-0 translate-y-3/4 left-1/2 -translate-x-1/2 bg-white rounded-[10px] md:py-6 md:px-4 xl:px-12 md:grid-cols-[1.5fr_1fr_1fr_1.8fr] shadow-blur">
            <div className="flex gap-1.5 2xl:gap-3 items-center">
                <svg className="w-[14%] md:w-[35%] min-w-[17px] max-w-8 xl:max-w-10" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5986 1.35333V16.6466H2.08594V1.35333H14.5986ZM9.03744 2.74363V7.26211L6.95199 5.69802L4.86654 7.26211V2.74363H3.47624V15.2563H13.2083V2.74363H9.03744ZM6.25684 2.74363V4.48151L6.95199 3.96015L7.64714 4.48151V2.74363H6.25684ZM4.86654 8.99998H11.818V10.3903H4.86654V8.99998ZM4.86654 11.7806H10.4277V13.1709H4.86654V11.7806Z" fill="#4044A7"/>
                </svg>
                <div className="flex flex-col">
                    <span className="montserrat font-bold text-16-auto lg:text-20px xl:text-32-auto text-schoolcom">{certifiedTeachers}</span>
                    <span className="open-sans font-normal text-10-auto md2:text-12px lg:text-14px xl:text-16-opensans-auto">Certified Teachers</span>
                </div>
            </div>
            <div className="flex gap-1.5 2xl:gap-3 items-center">
                <svg  className="w-[14%] md:w-[35%] min-w-[17px] max-w-8 xl:max-w-10"  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_22483_18822)">
                    <path d="M24 14.4L36.8 20.8V46.4H11.2V20.8L24 14.4ZM24 14.4V0M0 46.4H48M4.8 46.4V27.2H11.2M43.2 46.4V27.2H36.8M20.8 46.4V36.8H27.2V46.4M24 1.6H33.6V8H24M24 30.4C23.1513 30.4 22.3374 30.0629 21.7373 29.4627C21.1371 28.8626 20.8 28.0487 20.8 27.2C20.8 26.3513 21.1371 25.5374 21.7373 24.9373C22.3374 24.3371 23.1513 24 24 24C24.8487 24 25.6626 24.3371 26.2627 24.9373C26.8629 25.5374 27.2 26.3513 27.2 27.2C27.2 28.0487 26.8629 28.8626 26.2627 29.4627C25.6626 30.0629 24.8487 30.4 24 30.4Z" stroke="#4044A7" strokeWidth="3"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_22483_18822">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <div className="flex flex-col">
                    <span className="montserrat font-bold text-16-auto lg:text-20px xl:text-32-auto text-schoolcom">{yearsOld}</span>
                    <span className="open-sans font-normal text-10-auto md2:text-12px lg:text-14px xl:text-16-opensans-auto">Years Old</span>
                </div>
            </div>
            <div className="flex gap-1.5 2xl:gap-3 items-center">
                <svg className="w-[14%] md:w-[35%] min-w-[17px] max-w-8 xl:max-w-10"   viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39 12H45V48H6V12H12V9H15V12H36V9H39V12ZM42 15H39V18H42V15ZM36 15H15V18H36V15ZM12 15H9V18H12V15ZM9 45H42V21H9V45ZM6 9V6H3V39H0V3H6V0H9V3H30V0H33V3H39V6H33V9H30V6H9V9H6ZM15 33V30H18V33H15ZM21 33V30H24V33H21ZM27 33V30H30V33H27ZM33 33V30H36V33H33ZM15 39V36H18V39H15ZM21 39V36H24V39H21ZM27 39V36H30V39H27ZM21 27V24H24V27H21ZM27 27V24H30V27H27ZM33 27V24H36V27H33Z" fill="#4044A7"/>
                </svg>

                <div className="flex flex-col">
                    <span className="montserrat font-bold text-16-auto lg:text-20px xl:text-32-auto text-schoolcom">{numberOfSchools}</span>
                    <span className="open-sans font-normal text-10-auto md2:text-12px lg:text-14px xl:text-16-opensans-auto">School</span>
                </div>
            </div>
            <div className="flex gap-1.5 2xl:gap-3 items-center">
                <svg  className="w-[14%] md:w-[35%] min-w-[17px] max-w-8 xl:max-w-10"  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_22483_18822)">
                    <path d="M24 14.4L36.8 20.8V46.4H11.2V20.8L24 14.4ZM24 14.4V0M0 46.4H48M4.8 46.4V27.2H11.2M43.2 46.4V27.2H36.8M20.8 46.4V36.8H27.2V46.4M24 1.6H33.6V8H24M24 30.4C23.1513 30.4 22.3374 30.0629 21.7373 29.4627C21.1371 28.8626 20.8 28.0487 20.8 27.2C20.8 26.3513 21.1371 25.5374 21.7373 24.9373C22.3374 24.3371 23.1513 24 24 24C24.8487 24 25.6626 24.3371 26.2627 24.9373C26.8629 25.5374 27.2 26.3513 27.2 27.2C27.2 28.0487 26.8629 28.8626 26.2627 29.4627C25.6626 30.0629 24.8487 30.4 24 30.4Z" stroke="#4044A7" strokeWidth="3"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_22483_18822">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <div className="flex flex-col">
                    <span className="montserrat font-bold text-16-auto lg:text-20px xl:text-32-auto text-schoolcom">100%</span>
                    <span className="open-sans font-normal text-10-auto md2:text-12px lg:text-14px xl:text-16-opensans-auto">Passing to High School</span>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Section2Content


function Content() {
    const currentYear = new Date().getFullYear()
    const admissionSession = `${currentYear}/${currentYear + 1}`

    return (
        <div className=" pt-32 pb-10 px-3 md:pt-0 md:pb-0 md:px-0 flex gap-6 bg-shkula-primary border-4 border-t-white border-x-0 border-b-0">
            {/* section-2-image for desktop */}
            <figure className="hidden md:block w-[292px] aspect-[292/251] bg-gray-400 self-stretch shrink-0">
                <img src={"/" + latestNewsSectionImage} className="w-full h-full object-cover object-center" />
            </figure>

            {/* section-2-content information */}
            <div className="text-center md:text-start md:self-center md:pt-6 md:pb-[51px] mx-auto">
                <h2 className="text-white font-bold text-24px lg:text-40px">Apply for <span className="text-shkula-secondary">Admission</span></h2>
                <p className="montserrat font-normal text-12px md:text-20px md:mt-2 mb-3.5 md:mb-8 lg:mb-11 text-white">Admission into {schoolName} for {admissionSession} session is in progress</p>
                <div className="max-w-max mx-auto md:mx-0 flex flex-col md:flex-row items-center gap-3 md:gap-4 md2:gap-6 open-sans font-semibold text-xs md2:text-sm leading-[8px] md:leading-4 transition-all duration-500">
                    {/* button-1 */}
                    <a href="#contact-section"><Button className="w-48 h-[30px] md:w-[212px] md2:w-[256px] md:h-14 lg:w-[312px] flex-center-center rounded-2xl md:rounded-32px bg-shkula-secondary md:bg-shkula-primary md:border md:border-white text-schoolcom md:text-white transition-all duration-500 hover:bg-white hover:text-shkula-secondary">Download Application Form</Button></a>
                    {/* button-2 */}
                    <a href="#contact-section"><Button className="w-[93px] h-[30px] md:w-[120px] md2:w-[140px] md:h-14 lg:w-[210px] flex-center-center rounded-2xl md:rounded-32px bg-shkula-primary border-[0.51px] md:border border-shkula-secondary md:border-white text-white transition-all duration-500 hover:bg-white hover:text-shkula-secondary">Get in Touch</Button></a>
                </div>
            </div>
        </div>
    )
}
