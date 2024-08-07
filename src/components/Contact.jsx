import React from "react"

const Contact = () => {
    return (
        <div>
            <div className="container py-16 md:py-20" id="contact">
                <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                    You may contact me here
                </h2>
                <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                    Have Any Questions?
                </h4>
                <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
                    <p className="font-body text-grey-10">
                        Please contact me through email at dionmitch93@gmail.com
                    </p>
                </div>
                {/* <form className="mx-auto w-full pt-10 sm:w-3/4">
                    <div className="flex flex-col md:flex-row">
                        <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5" placeholder="Name" type="text" id="name" />
                        <input className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5" placeholder="Email" type="text" id="email" />
                    </div>
                    <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8" placeholder="Message" id="message" cols={30} rows={10} defaultValue={""} />
                    <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
                        Send
                        <i className="bx bx-chevron-right relative -right-2 text-3xl" />
                    </button>
                </form> */}
                {/* <div className="flex flex-col pt-16 lg:flex-row">
                    <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
                        <div className="flex items-center">
                            <i className="bx bx-phone text-2xl text-grey-40" />
                            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                My Phone
                            </p>
                        </div>
                        <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                            (+61) xxx xxx xxx
                        </p>
                    </div>
                    <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                        <div className="flex items-center">
                            <i className="bx bx-envelope text-2xl text-grey-40" />
                            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                My Email
                            </p>
                        </div>
                        <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                            dionmitch93@gmail.com
                        </p>
                    </div>
                    <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                        <div className="flex items-center">
                            <i className="bx bx-map text-2xl text-grey-40" />
                            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                My Address
                            </p>
                        </div>
                        <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                            xxxx
                        </p>
                    </div>
                </div> */}
            </div>
            {/* extra */}
            {/* <div className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96" style={{ backgroundImage: "url(/images/map.png)" }} />
            <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24" style={{ backgroundImage: "url(/images/bg-cta.jpg)" }}>
                <div className="container relative z-30">
                    <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
                        Keep <span className="font-bold">up-to-date</span> <br />
                        with what I'm up to
                    </h3>
                    <form className="mt-6 flex flex-col justify-center sm:flex-row">
                        <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="text" id="email" placeholder="Give me your Email" />
                        <button className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
                            Join the club
                        </button>
                    </form>
                </div>
            </div> */}
        </div>
    )
}

export default Contact;