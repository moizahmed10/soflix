import React from "react"
import { Link } from "gatsby"
import * as footerStyles from "./footer.module.css"
import Logo from "./Logo"

export default () => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.contentholder}>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={footerStyles.linkholder}>
          <div>
            <h1 className={footerStyles.heading}>Visit us</h1>
            <p>
              Bahria Town Civic Center,
              <br /> Phase 4 Plaza 75, Pakistan
            </p>
          </div>
          <div className={footerStyles.contentdiv}>
            <h1 className={footerStyles.heading}>Get In Touch</h1>
            <a href="mailto:hr@Soflix.com">hr@Soflix.co</a>
            <br />
            <a href="tel:+92515411278">+92 51 541 1278</a>
          </div>
          <div>
            <h1 className={footerStyles.heading}>Company</h1>
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </div>
          <div>
            <h1 className={footerStyles.heading}>Follow Us</h1>
            <a
              className={footerStyles.link}
              href="https://www.facebook.com/Soflix.co/"
              target="_blank"
            >
              FaceBook
            </a>
            <br />
            <a
              className={footerStyles.link}
              href="https://www.instagram.com/Soflixlife/"
              target="_blank"
            >
              Instagram
            </a>
            <br />
            <a href="https://pk.linkedin.com/company/Soflixco" target="_blank">
              LinkdIn
            </a>
          </div>
        </div>
      </div>
      <p className={footerStyles.copyright}>
        {" "}
        Copyright © 2021 Soflix . All rights reserved
      </p>
    </div>
  )
}
