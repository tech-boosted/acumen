import React from "react";
import "./footer.css";

export const Footer: React.FC<any> = () => {
  return (
    <div className="footer">
      <div className="footer-section-1 ">
        <div className="footer-section-email">
          <span className="footer-heading app-text-dm-regular">Let's talk</span>
          <a
            href="mailto:hello@acumenbrands.co"
            className="footer-subheading footer-subheading-animate app-text-regular"
          >
            hello@acumenbrands.co
          </a>
        </div>
        <div className="footer-section-social">
          <span className="footer-heading app-text-dm-regular">Follow us</span>
          <span
            className="footer-subheading footer-subheading-animate app-text-regular"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61557711785172&mibextid=ZbWKwL",
                "_blank"
              )
            }
          >
            Facebook
          </span>
          <span
            className="footer-subheading footer-subheading-animate app-text-regular"
            onClick={() =>
              window.open("https://www.instagram.com/acumen_brands", "_blank")
            }
          >
            Instagram
          </span>
          <span
            className="footer-subheading footer-subheading-animate app-text-regular"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/acumen-brands/",
                "_blank"
              )
            }
          >
            Linkedin
          </span>
        </div>
      </div>
      <div className="footer-section-2 "></div>
      <div className="footer-section-3 ">
        <div className="footer-brand">
          <span className="footer-brand-text app-text-dm-regular">
            © Acumen Brands 2024
          </span>
          {/* <span className="footer-brand-text app-text-dm-regular">
            Privacy policy
          </span> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};
