import React from "react"

const Footer = () => {
    return (
        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              {/* © Copyright 2022. All right reserved, ATOM. <br /> */}
              Powered by React
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              {/* <a href="https://www.facebook.com/dion.m.tj" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow" />
              </a>                                 */}
              <a href="https://www.linkedin.com/in/dionmitch/" className="pl-4" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow" />
              </a>
              {/* <a href="https://www.instagram.com/dionmitch_/" className="pl-4" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-instagram text-2xl text-white hover:text-yellow" />
              </a> */}
              <a href="https://github.com/Dishell" className="pl-4" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-github text-2xl text-white hover:text-yellow" />
              </a>
            </div>
          </div>
        </div>
    )
}

export default Footer;