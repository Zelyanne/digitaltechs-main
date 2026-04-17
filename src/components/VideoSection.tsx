export default function VideoSection() {
  return (
    <div className="video-area style-two pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title style-five text-center">
              <h5>Video</h5>
              <h1>EXPERIENCE US <span className="color2">LIVE</span></h1>
            </div>
          </div>
        </div>
        <div className="row video-bg">
          <div className="col-lg-8">
            <div className="rs-video style-three">
              <div className="animate-border">
                <a
                  className="video-vemo-icon2 venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="video-content">
              <div className="video-title">
                <h4>AGENCY THAT GETS EXCITED ABOUT</h4>
              </div>
              <div className="video-button text-right">
                <a href="#">
                  Learn More <span><i className="fas fa-check-square" /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
