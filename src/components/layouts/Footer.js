import React from "react";
import "./css/footer.css";

const Footer = props => {
  return (
    <footer id="footer" class="clearfix">
      <div id="footer-widgets">
        <div class="container">
          <div id="footer-wrapper">
            <div class="row">
              <div class="col-sm-6 col-md-2">
                <div id="meta-3" class="widget widgetFooter widget_meta">
                  <h4 class="widgettitle">Importent Page :</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-home fa-fw" /> Home
                      </a>
                    </li>
                    <li>
                      <a href="privacypolicy.php">
                        <i class="fa fa-link" />
                           Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-envelope fa-fw" /> Contact Us
                      </a>
                    </li>
                  </ul>
                </div>{" "}
              </div>
              {/* <!-- end widget1 --> */}

              <div class="col-sm-6 col-md-2">
                <div
                  id="recent-posts-3"
                  class="widget widgetFooter widget_recent_entries"
                >
                  <h4 class="widgettitle">Our social media :</h4>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/mr.dauod"
                        target="_blank"
                      >
                        <i class="fa fa-facebook" /> Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/ayatquranCom"
                        target="_blank"
                      >
                        <i class="fa fa-twitter" /> Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.youtube.com/user/sonsofye"
                        target="_blank"
                      >
                        <i class="fa fa-youtube" /> Youtube
                      </a>
                    </li>
                  </ul>
                </div>{" "}
              </div>
              {/* <!-- end widget1 --> */}

              <div class="col-sm-6 col-md-4">
                <div id="meta-4" class="widget widgetFooter widget_meta">
                  <h4 class="widgettitle">Subscribe :</h4>

                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon">E-mail :</span>
                      <input
                        class="form-control"
                        placeholder="Write your email .."
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon">Phone :</span>
                      <input
                        class="form-control"
                        placeholder="+96777000000"
                        type="text"
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-primary" type="button">
                          Subscribe !
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end widget1 --> */}

              <div class="col-sm-6 col-md-4">
                <div id="search-3" class="widget widgetFooter widget_search">
                  <h4 class="widgettitle">Search in Faploo :</h4>

                  <div class="form-group">
                    <label class="control-label">
                      Write what you want to search for it :
                    </label>
                    <div class="input-group">
                      <span class="input-group-addon">Keyword :</span>
                      <input
                        class="form-control"
                        placeholder="Keyword for search ..."
                        type="text"
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-primary" type="button">
                          Search !
                        </button>
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* <!-- end widget1 --> */}
            </div>
            {/* <!-- end .row --> */}
          </div>
          {/* <!-- end #footer-wrapper --> */}
        </div>
        {/* <!-- end .container --> */}
      </div>
      {/* <!-- end #footer-widgets --> */}

      <div id="sub-floor">
        <div class="container">
          <div class="row">
            <div class="col-md-4 copyright">
              Copy right for Ihedioha Chinonso © 2019
            </div>
            <div class="col-md-4 col-md-offset-4 attribution">
              Developed with
              <i
                className="material-icons"
                style={{
                  color: "rgb(247, 21, 21)",
                  cursor: "pointer",
                  fontSize: "20px"
                }}
              >
                favorite
              </i>{" "}
              by{" "}
              <a target="_blank" href="https://github.com/nonsodaniel">
                github.com/nonsodaniel
              </a>{" "}
              .
            </div>
          </div>
          {/* <!-- end .row --> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
