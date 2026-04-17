export default function SubscribeSection() {
  return (
    <div className="subscribe-area style-five">
      <div className="container">
        <div className="row subscribe-bg">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="subscribe-content white">
              <div className="subscribe-title">
                <h1>Newsletter</h1>
                <p>Recevez nos actualités.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="contact-form-box">
              <form
                id="dreamit-form"
                action="https://formspree.io/f/xvzblpoa"
                method="POST"
              >
                <div className="from-box">
                  <input
                    type="text"
                    name="Email"
                    placeholder="Votre email"
                  />
                  <button type="submit">S&apos;inscrire</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
