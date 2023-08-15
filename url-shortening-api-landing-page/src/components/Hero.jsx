import heroImg from '../assets/images/illustration-working.svg'
import { useForm } from "react-hook-form"
import PropTypes from 'prop-types';

function Hero({setLinkData}) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        setLinkData(data.longLink);

    };

    return (
        <section className="relative flex-col justify-center items-center w-full bg-white p-2">
            
            <div className='flex flex-col justify-center items-center text-center mb-20 p-3 sm:flex-row-reverse'>
                <picture className="w-full">
                    <img src={heroImg} alt="Illustration of a person working on a computer" className="ml-20 object-cover w-full"/>
                </picture>

                <div className="flex flex-col justify-center items-center text-center mb-10 p-3 sm:items-start sm:text-start">

                <h1 className="text-4xl font-bold text-primary-dark-violet mb-4">More than just shorter links</h1>
                <p className='text-base font-normal text-neutral-gray'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="bg-primary-cyan rounded-3xl p-2 mt-6 w-40 text-white">Get Started</button>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center text-center '>
                <div className="shorten absolute -bottom-[10rem] w-screen max-w-sm bg-primary-dark-violet rounded-lg flex flex-col justify-start mb-20 items-center p-6 text-center z-50 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl sm:-bottom-[9rem] sm:flex-row sm:space-x-8">
                    <div className=" rounded-lg p-4 sm:p-6 flex-grow flex flex-col justify-center items-center sm:items-start">
                    <input
                        type="text"
                        {...register("longLink", { required: true })}
                        placeholder="Shorten a link here..."
                        className={`w-full h-12 rounded-lg p-6 sm:p-4 border-2 ${errors.longLink ? "focus:border-secondary-red  placeholder-red" : " placeholder-gray"} focus:outline-none focus:border-primary-cyan`}
                    />
                    {errors.longLink && <span className="text-sm text-secondary-red text-start italic w-full">Please add a link</span>}
                    </div>
                    <button type='submit' className="bg-primary-cyan rounded-lg p-4 mt-6 w-full text-white sm:mt-0 sm:w-40">Shorten It!</button>
                </div>
            </form>
        </section>
    )
}

Hero.propTypes = {
    setLinkData: PropTypes.func.isRequired
}

export default Hero;
