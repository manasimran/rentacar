import cx from 'classnames';

// Replace these with the actual image URLs
const leftImageUrl = './left2.png';
const rightImageUrl = './carl.png';
// const darkleftimage='./darkleft.png';
// const darkrightimage='./darkright.png';
export default function Hero() {
    return (
        <section className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
            <div className="bg-white dark:bg-[#1b1b1b] py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a
                    href="#"
                    className={cx(
                        "inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full",
                        "text-gray-700 bg-gray-100 hover:bg-gray-200",
                        "dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-l-black dark:border-white"
                    )}
                    role="alert"
                >
                    <span className="text-xs bg-orange-600 rounded-full text-white dark:text-white px-4 py-1.5 mr-3">
                        Book Now
                    </span>
                    {/* <span className={cx("text-sm font-medium text-black ")}>
                         Book Now
                    </span> */}
                    <svg
                        className="ml-2 w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
                <h1 className={cx(
                    "mb-4 text-4xl font-extrabold tracking-tight leading-none",
                    "text-dark dark:text-white",
                    "md:text-5xl lg:text-6xl "
                )}>
                    Your Journey Begins Here

                </h1>
                <p className={cx(
                    "mb-8 text-lg font-normal",
                    "text-gray-500 dark:text-white",
                    "lg:text-xl sm:px-16 xl:px-48"
                )}>
                    With Brothers Rent A Car, discover the excitement of endless travel adventures.. We have the ideal car to make your trip memorable, whether you're planning a family vacation, a work trip, or a weekend break. Our large range guarantees that you'll discover the perfect vehicle to meet your needs, from stylish cars to roomy
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="\vehicals"
                        className={cx(
                            "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg",
                            "bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-primary-300",
                            "dark:focus:ring-primary-700"
                        )}
                    >
                        Book Now
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                   
                </div>
            </div>
            <img
                src={leftImageUrl}
                alt="car Left"
                className="absolute bottom-0 left-0 h-auto w-[30%] sm:w-[40%] md:w-[40%] lg:w-[37%] hidden sm:block md:block lg:block"
            />
            <img
                src={rightImageUrl}
                alt="car Right"
                className="absolute bottom-0 right-0 h-auto w-[30%] sm:w-[37%] md:w-[30%] lg:w-[35%] hidden sm:block md:block lg:block"
            />
        </section>
    );
}