import React from "react";

const About= () =>  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-inline">
            <div className="card about-pp-card shadow">
              <div className="card-body p-0">
                <div className="row justify-content-center">
                  <img
                    src="/siteimg/ppimg.jpg"
                    className="img-thumbnail shadow-sm d-inline about-ppimg"
                  />
                </div>
                <div className="list-group">
                  <span class="list-group-item text-center border-0">
                    <strong>Ali DURAK</strong>
                  </span>
                  <div className="list-group float-left mt-3">
                    <span className="list-group-item border-top rounded-0">
                      <strong className="text-muted">University: </strong>
                      <small>
                        Akdeniz University, Mehmet Akif Ersoy University
                      </small>
                    </span>
                    <span class="list-group-item border-top">
                      <strong class="text-muted">Job: </strong>
                      <small>
                        Computer Science, Graphic Design, Fullstack Web
                      </small>
                    </span>
                    <span class="list-group-item border-top">
                      <strong class="text-muted">Technology: </strong>
                      <small>Java-C#-Angular-Flutter&Dart</small>
                    </span>

                    <span class="list-group-item border-top">
                      <strong class="text-muted">Location: </strong>
                      <small>TURKEY/Antalya</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 mt-5 pp-content-text">
            <div class="d-flex flex-column align-items-center">
              <h2>
                I'm <span class="text-primary">Ali DURAK</span> a Turkish
                Blogger & Developer
              </h2>
              <p>
                Hello guys, I have been dealing with software for more than 4
                years and have been following technology and trends closely for
                as long as I can remember. I am happy to share with you the
                information I have acquired and which I think is valuable. Thank
                you for reading, I wish you a pleasant trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default About