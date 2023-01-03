import React from "react";
import FooterSponsors from "./img-components/FooterSponsors";

function Footer() {
  return (
    <div className="footer">
      <form>
        <div className="form-group">
          <label htmlFor="form-newsletter">Newsletter</label>
          <div>
            <input type="text" name="form-newsletter" id="form-email" placeholder="e-mail" />
            <button>Subscribe</button>
          </div>
        </div>
      </form>
      <div className="sponsorsAndContact">
        <div className="sponsors">
          <p>Sponsored by</p>
          <FooterSponsors></FooterSponsors>
        </div>
        <div className="contact">
          <p>Contact:</p>
          <p>(+45)42066669</p>
          <p>info@lcf.dk</p>
        </div>
      </div>
      <p className="lcfCopyRight">Loudcrowdfest 2023 ©</p>
    </div>
  );
}

export default Footer;
