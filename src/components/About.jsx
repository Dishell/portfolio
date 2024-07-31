import React from "react"

const About = () => {
    return (
        <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
                <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                    <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Who am I?
                    </h2>
                    <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        I'm Dionisius Mitchelle Tjahjono, a Full-Stack Developer &amp; Barista
                    </h4>
                    <p className="pt-6 font-body leading-relaxed text-grey-20 text-justify">
                        Dion's background showcases his versatility and dedication, with three years of experience across digital marketing, software development, and manufacturing companies. Supported by dual qualifications in Information Technology and Information Systems, he possesses a solid foundation in both technical and theoretical aspects of his field. Dion's strong understanding of the Software Development Life Cycle (SDLC), including waterfall and agile methodologies, enables him to tailor project approaches effectively. His adaptability is evident in his ability to work in various environments, whether remotely or in-office, under supervision or independently. Additionally, Dion's educational background in Leadership and Management has equipped him with advanced teamwork skills, allowing him to collaborate effectively within a team or excel in individual roles. This combination of practical experience, technical expertise, and leadership capabilities positions Dion as a valuable asset capable of tackling diverse challenges, managing projects, and driving success across industries.
                    </p>
                    {/* <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                        <div className="flex items-center justify-center sm:justify-start">
                            <p className="font-body text-lg font-semibold uppercase text-grey-20">
                                Connect with me
                            </p>
                            <div className="hidden sm:block">
                                <i className="bx bx-chevron-right text-2xl text-primary" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                            <a href="https://www.facebook.com/dion.m.tj" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow" />
                            </a>                                
                            <a href="https://www.linkedin.com/in/dionmitch/" className="pl-4" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow" />
                            </a>
                            <a href="https://www.instagram.com/dionmitch_/" className="pl-4" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow" />
                            </a>
                            <a href="https://github.com/Dishell" className="pl-4" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-github text-2xl text-primary hover:text-yellow" />
                            </a>
                        </div>
                    </div> */}
                </div>
                <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                    <div>
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                HTML5 &amp; CSS3 / Tailwind
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">
                                75%
                            </h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "75%" }} />
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                Javascript/jQuery/React
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">
                                80%
                            </h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "80%" }} />
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                PHP/Laravel
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">
                                95%
                            </h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "95%" }} />
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                Python
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">
                                80%
                            </h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "80%" }} />
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                Database (MySQL/PostgreSQL)
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">
                                90%
                            </h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "90%" }} />
                        </div>
                    </div>                    
                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                Testing (REST API/Postman)
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">
                                88%
                            </h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "88%" }} />
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                Project Management (Slack/Trello/Github)
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">
                                79%
                            </h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "79%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;