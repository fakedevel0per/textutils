import React from 'react'

export default function Footer(props) {
    return (
        <footer className={`bg-${props.mode==='dark'?'dark':'secondary'} text-center text-light`}>
          {/* <!-- Grid container -->/ */}
          <div className="container p-4">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">
              {/* <!-- Facebook -->/ */}
              <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
                <i className="fa fa-facebook-f"></i></a>
        
              {/* <!-- Twitter --> */}
              <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
                <i className="fa fa-twitter"></i></a>
        
              {/* <!-- Google -->/ */}
              <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
                <i className="fa fa-google"></i></a>
        
              {/* <!-- Instagram --> */}
              <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
                <i className="fa fa-instagram"></i></a>
        
              {/* <!-- Linkedin -->/ */}
              <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
                <i className="fa fa-linkedin"></i></a>
        
              {/* <!-- Github --> */}
              <a className="btn btn-outline-light btn-floating m-1" href="/" role="button">
                <i className="fa fa-github"></i></a>
            </section>
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form5Example21" className="form-control" />
                      <label className="form-label" htmlFor="form5Example21">Email address</label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                eum harum corrupti dicta, aliquam sequi voluptate quas.
              </p>
            </section>
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/" className="text-white">About Us</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="/" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          {/* <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);"> */}
          <div className="text-center p-3 bg-secondary.bg-gradient  text-white">
            © 2020 Copyright:
            <a className="text-white" href="/">{" "+props.webLink}</a>
          </div>
        </footer>
    )
}