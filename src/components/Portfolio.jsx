import React from "react"

const Portfolio = () => {
    return (
        <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here's what I have done with the past
            </h3>
            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                <a href="https://reservation-4ea14.web.app/" className="mx-auto transform transition-all hover:scale-105 md:mx-0 text-center font-header text-xl font-medium text-black" target="_blank" rel="noopener noreferrer">
                    <img src="/images/reservation.png" className="w-full shadow" alt="reservation portfolio" />
                    <p>Landing page for reservation</p>
                </a>
                <a href="http://windsorpl.com.au/" className="mx-auto transform transition-all hover:scale-105 md:mx-0 text-center font-header text-xl font-medium text-black" target="_blank" rel="noopener noreferrer">
                    <img src="/images/appointment.png" className="w-full shadow" alt="appointment portfolio" />
                    <p>Appointment booking for property inspection</p>
                </a>
                {/* <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0" >
                    <img src="/images/portfolio-fedex.jpeg" className="w-full shadow" alt="portfolio" />
                </a>
                <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0" >
                    <img src="/images/portfolio-microsoft.jpeg" className="w-full shadow" alt="portfolio" />
                </a> */}
            </div>
        </div>
    )
}

export default Portfolio;