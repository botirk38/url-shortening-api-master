import brandRecognitionIcon from '../assets/images/icon-brand-recognition.svg';
import detailedRecords from '../assets/images/icon-detailed-records.svg';
import fullyCustomizable from '../assets/images/icon-fully-customizable.svg';

function Features(){
    return(
        <section className=" relative grid grid-cols-1 z-50 gap-[8rem]  sm:mb-20 lg:mb-40 grid-rows-auto place-items-center text-center w-full h-auto bg-[#F2F2F2]  sm:p-5 sm:gap-10 ">
            <div className="flex flex-col justify-center items-center p-5">
                <h2 className="text-4xl font-bold text-primary-dark-violet mb-6">Advanced Statistics</h2>
                <p className="text-base font-normal text-neutral-gray p-3 ">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            
            <div className='relative grid grid-cols-1 z-50 gap-[8rem] lg:gap-0 grid-rows-auto place-items-center text-center w-full sm:gap-10 h-auto bg-[#F2F2F2]  sm:grid-cols-3 sm:grid-rows-1'>
                
                <div className=" rounded-md relative flex flex-col sm:h-auto justify-center w-full items-center max-w-xs sm:max-w-sm p-3 sm:p-0 sm:px-3 lg:items-start lg:justify-start lg:text-start lg:after:left-full bg-white after:absolute after:h-60 after:w-2 after:top-60 after:-z-50 after:left-40 after:bg-primary-cyan sm:after:rotate-90 sm:after:top-10   ">
                    <picture className=" bg-primary-dark-violet p-6 absolute bottom-60 rounded-full sm:bottom-80 lg:right-70 lg:bottom-[13rem]">
                        <img src={brandRecognitionIcon} alt="Icon for Brand Recognition Feature" className="object-scale-down w-full "/>
                    </picture>
                    <h2 className="text-2xl font-bold text-primary-dark-violet mb-6 mt-20  p-3 lg:mt-10">Brand Recognition</h2>
                    <p className="text-base font-normal text-neutral-gray p-3 ">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>



                <div className=" rounded-md relative flex flex-col sm:h-auto justify-center w-full items-center max-w-xs sm:max-w-sm p-3 lg:items-start lg:justify-start lg:text-start  bg-white after:absolute lg:after:left-full lg:after:top-70 after:h-60 after:w-2 after:top-60 after:-z-50 after:left-40 after:bg-primary-cyan  sm:after:rotate-90 sm:after:top-10 lg:after:top-20 lg:mt-20   ">
                    <picture className=" bg-primary-dark-violet p-6 absolute bottom-60 sm:bottom-80   lg:right-70 rounded-full lg:bottom-[14rem]">
                        <img src={detailedRecords} alt="Icon for Brand Recognition Feature" className="object-scale-down w-full"/>
                    </picture>
                    <h2 className="text-2xl font-bold text-primary-dark-violet mb-6 p-3 mt-20 lg:mt-10">Detailed Records</h2>
                    <p className="text-base font-normal text-neutral-gray p-3 ">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>

                <div className=" rounded-md relative flex flex-col sm:h-auto justify-center w-full items-center  lg:items-start lg:justify-start lg:text-start sm:mb-0 max-w-xs sm:max-w-sm p-3  bg-white mb-20 lg:mt-40">
                    <picture className=" bg-primary-dark-violet p-6 absolute bottom-[12rem] sm:bottom-80  lg:right-70 lg:bottom-[12rem] rounded-full">
                        <img src={fullyCustomizable} alt="Icon for Brand Recognition Feature" className="object-scale-down w-full"/>
                    </picture>
                    <h2 className="text-2xl font-bold text-primary-dark-violet p-3 mb-6 mt-20 lg:mt-10">Fully Customizable</h2>
                    <p className="text-base font-normal text-neutral-gray p-1 ">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </section>
    )
}

export default Features;