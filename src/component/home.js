import React from 'react';
import {Link} from 'react-router-dom';
function home() {
  return (
    // <div>
    <div className="boxed_wrapper ltr">
      {/* preloader */}
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">close</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner" />
              <div className="txt-loading">
                <span data-text-preloader="m" className="letters-loading">
                  m
                </span>
                <span data-text-preloader="e" className="letters-loading">
                  e
                </span>
                <span data-text-preloader="t" className="letters-loading">
                  t
                </span>
                <span data-text-preloader="r" className="letters-loading">
                  r
                </span>
                <span data-text-preloader="o" className="letters-loading">
                  o
                </span>
                <span data-text-preloader="b" className="letters-loading">
                  b
                </span>
                <span data-text-preloader="a" className="letters-loading">
                  a
                </span>
                <span data-text-preloader="n" className="letters-loading">
                  n
                </span>
                <span data-text-preloader="k" className="letters-loading">
                  k
                </span>
              </div>
            </div>  
          </div>
        </div>
      </div>
      {/* preloader end */}
      {/* page-direction */}
      <div className="page_direction">
        <div className="demo-rtl direction_switch"><button className="rtl">RTL</button></div>
        <div className="demo-ltr direction_switch"><button className="ltr">LTR</button></div>
      </div>
      {/* page-direction end */}
      {/* switcher menu */}
      <div className="switcher">
        <div className="switch_btn">
          <button><i className="fas fa-palette" /></button>
        </div>
        <div className="switch_menu">
          {/* color changer */}
          <div className="switcher_container">
            <ul id="styleOptions" title="switch styling">
              <li>
                <Link to="javascript: void(0)" data-theme="theme-color" className="theme-color" />
              </li>
              <li>
                <Link to="javascript: void(0)" data-theme="pink" className="pink-color" />
              </li>
              <li>
                <Link to="javascript: void(0)" data-theme="violet" className="violet-color" />
              </li>
              <li>
                <Link to="javascript: void(0)" data-theme="crimson" className="crimson-color" />
              </li>
              <li>
                <Link to="javascript: void(0)" data-theme="orange" className="orange-color" />
              </li>
            </ul>
          </div> 
        </div>
      </div>
      {/* end switcher menu */}
      {/* main header */}
      <header className="main-header">
        {/* header-top */}
        <div className="header-top">
          <div className="large-container">
            <div className="top-inner">
              <ul className="links-list clearfix">
                <li><Link to="index-2.html">Career</Link></li>
                <li><Link to="index-2.html">Faq</Link></li>
                <li><Link to="index-2.html">Rewards</Link></li>
                <li><Link to="index-2.html">Media</Link></li>
              </ul>
              <ul className="info-list clearfix"> 
                <li>
                  <i className="icon-1" />
                  <Link to="mailto:info@example.com">info@example.com</Link>
                </li>
                <li>
                  <i className="icon-2" />
                  Find Nearest Branch
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* header-lower */}
        <div className="header-lower">
          <div className="large-container">
            <div className="outer-box">
              <div className="logo-box">
                <div className="shape" />
                <figure className="logo"><Link to="index-2.html"><img src="assets/images/logo.png" alt="" /></Link></figure>
              </div>
              <div className="menu-area">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      <li className="current dropdown"><Link to="index-2.html">Home</Link>
                        <ul>
                          <li><Link to="index-2.html">Home Page One</Link></li>
                          <li><Link to="index-3.html">Home Page Two</Link></li>
                          <li><Link to="index-4.html">Home Page Three</Link></li>
                          <li><Link to="index-onepage.html">OnePage Home</Link></li>
                        </ul>
                      </li> 
                      <li><Link to="about.html">About</Link></li>
                      <li className="dropdown"><Link to="index-2.html">Services</Link>
                        <ul>
                          <li><Link to="service.html">Our Services</Link></li>
                          <li><Link to="service-2.html">Our Services 2</Link></li>
                          <li><Link to="service-details.html">Digital Banking</Link></li>
                          <li><Link to="service-details-2.html">Mobile &amp; Web Banking</Link></li>
                          <li><Link to="service-details-3.html">Insurance Policies</Link></li>
                          <li><Link to="service-details-4.html">Home &amp; Property Loan</Link></li>
                          <li><Link to="service-details-5.html">All Bank Account</Link></li>
                          <li><Link to="service-details-6.html">Borrowing Accounts</Link></li>
                          <li><Link to="service-details-7.html">Private Banking</Link></li>
                          <li><Link to="service-details-8.html">Fixed Term Account</Link></li>
                        </ul>
                      </li> 
                      <li className="dropdown"><Link to="index-2.html">Pages</Link>
                        <ul>
                          <li className="dropdown"><Link to="index-2.html">Directors</Link>
                            <ul>
                              <li><Link to="team.html">Board of Directors</Link></li>
                              <li><Link to="team-details.html">Director Details</Link></li>
                            </ul>
                          </li>
                          <li className="dropdown"><Link to="index-2.html">Career</Link>
                            <ul>
                              <li><Link to="career.html">Career Page</Link></li>
                              <li><Link to="career-details.html">Career Details</Link></li>
                            </ul>
                          </li>
                          <li className="dropdown"><Link to="index-2.html">Blog</Link>
                            <ul>
                              <li><Link to="blog.html">Blog Grid</Link></li>
                              <li><Link to="blog-2.html">Blog Image</Link></li>
                              <li><Link to="blog-3.html">Blog Standard</Link></li>
                              <li><Link to="blog-details.html">Blog Details</Link></li>
                            </ul>
                          </li>
                          <li><Link to="currency.html">Currency Exchange</Link></li>
                          <li><Link to="credit-cards.html">Credit Cards</Link></li>
                          <li><Link to="faq.html">General FAQ’s</Link></li>
                          <li><Link to="error.html">404 Error</Link></li>
                        </ul>
                      </li> 
                      <li><Link to="contact.html">Contact</Link></li> 
                    </ul>
                  </div>
                </nav>
                <div className="menu-right-content ml_70">
                  <Link to="index-2.html" className="theme-btn btn-two mr_20">Login</Link>
                  <Link to="index-2.html" className="theme-btn btn-one">Open Account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="large-container">
            <div className="outer-box">
              <div className="logo-box">
                <div className="shape" />
                <figure className="logo"><Link to="index-2.html"><img src="assets/images/logo.png" alt="" /></Link></figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
                <div className="menu-right-content ml_70">
                  <Link to="index-2.html" className="theme-btn btn-two mr_20">Login</Link>
                  <Link to="index-2.html" className="theme-btn btn-one">Open Account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn"><i className="fas fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo"><Link to="index-2.html"><img src="assets/images/logo.png" alt ="title" /></Link></div>
          <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li><Link to="tel:+8801682648101">+88 01682648101</Link></li>
              <li><Link to="mailto:info@example.com">info@example.com</Link></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><Link to="index-2.html"><span className="fab fa-twitter" /></Link></li>
              <li><Link to="index-2.html"><span className="fab fa-facebook-square" /></Link></li>
              <li><Link to="index-2.html"><span className="fab fa-pinterest-p" /></Link></li>
              <li><Link to="index-2.html"><span className="fab fa-instagram" /></Link></li>
              <li><Link to="index-2.html"><span className="fab fa-youtube" /></Link></li>
            </ul>
          </div>
        </nav>
      </div>{/* End Mobile Menu */}
      {/* banner-section */}
      <section className="banner-section p_relative">
        <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
          <div className="slide-item p_relative">
            <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-1.jpg)'}} />
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-2.png)'}} />
            </div>
            <div className="auto-container">
              <div className="content-box">
                <h2>Open our <span>Current</span> Account Online</h2>
                <p>This statistic is based on our average personal current account online opening time from the last 12 months.</p>
                <div className="btn-box">
                  <Link to="index-2.html" className="theme-btn btn-one">Make an Appointment</Link>
                </div>
              </div> 
            </div>
          </div>
          <div className="slide-item p_relative">
            <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-2.jpg)'}} />
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-2.png)'}} />
            </div>
            <div className="auto-container">
              <div className="content-box">
                <h2>Open our <span>Current</span> Account Online</h2>
                <p>This statistic is based on our average personal current account online opening time from the last 12 months.</p>
                <div className="btn-box">
                  <Link to="index-2.html" className="theme-btn btn-one">Make an Appointment</Link>
                </div>
              </div> 
            </div>
          </div>
          <div className="slide-item p_relative">
            <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-3.jpg)'}} />
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-2.png)'}} />
            </div>
            <div className="auto-container">
              <div className="content-box">
                <h2>Open our <span>Current</span> Account Online</h2>
                <p>This statistic is based on our average personal current account online opening time from the last 12 months.</p>
                <div className="btn-box">
                  <Link to="index-2.html" className="theme-btn btn-one">Make an Appointment</Link>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
      {/* banner-section end */}
      {/* feature-section */}
      <section className="feature-section">
        <div className="auto-container">
          <div className="inner-container clearfix wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-5" /></div>
                <h4><Link to="index-2.html">Secure International Transaction</Link></h4>
                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
              </div>
            </div>
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-6" /></div>
                <h4><Link to="index-2.html">24/7 Support from the Expert Team</Link></h4>
                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
              </div>
            </div>
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-7" /></div>
                <h4><Link to="index-2.html">Lowest Processing Fee than Other Banks</Link></h4>
                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
              </div>
            </div>
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-8" /></div>
                <h4><Link to="index-2.html">Less Time in any Loans Approval</Link></h4>
                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature-section end */}
      {/* about-section */}
      <section className="about-section pt_120 pb_120">
        <div className="pattern-layer rotate-me" />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box pr_90 mr_40">
                  <div className="image-shape" style={{backgroundImage: 'url(assets/images/shape/shape-3.png)'}} />
                  <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                  <div className="rating-box">
                    <ul className="rating mb_5 clearfix">
                      <li><i className="icon-9" /></li>
                      <li><i className="icon-9" /></li>
                      <li><i className="icon-9" /></li>
                      <li><i className="icon-9" /></li>
                      <li><i className="icon-9" /></li>
                    </ul>
                    <h6>5 Star Rating Bank</h6>
                  </div>
                  <div className="experience-box">
                    <div className="inner">
                      <h2>40</h2>
                      <h6>Years of Experiense</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box ml_40">
                  <div className="sec-title mb_20">
                    <h6>About US</h6>
                    <h2>Financial Guidance for Every Stage of Life.</h2>
                  </div>
                  <div className="text-box mb_40">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                  </div>
                  <div className="inner-box mb_45">
                    <div className="single-item">
                      <div className="icon-box"><i className="icon-10" /></div>
                      <h3>Solution Focused</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat</p>
                    </div>
                    <div className="single-item">
                      <div className="icon-box"><i className="icon-11" /></div>
                      <h3>99.99% Success</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat</p>
                    </div>
                  </div>
                  <div className="btn-box">
                    <Link to="index-2.html" className="theme-btn btn-one">Discover More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}
      {/* service-section */}
      <section className="service-section pt_120 pb_90">
        <div className="bg-layer" style={{backgroundImage: 'url(assets/images/background/service-bg.jpg)'}} />
        <div className="auto-container">
          <div className="sec-title centred mb_60">
            <h6>Our Services</h6>
            <h2>Online Banking at Your <br />Fingertips</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="shape" />
                  <div className="icon-box"><i className="icon-12" /></div>
                  <h4><Link to="service-details.html">Digital Banking</Link></h4>
                  <ul className="list-item clearfix">
                    <li>Bank &amp; savings accounts</li>
                    <li>Credit cards</li>
                    <li>Personal loans</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="shape" />
                  <div className="icon-box"><i className="icon-13" /></div>
                  <h4><Link to="service-details-2.html">Mobile &amp; Web Banking</Link></h4>
                  <ul className="list-item clearfix">
                    <li>Instant Access</li>
                    <li>Savings Fixed Term</li>
                    <li>Savings Instant</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="shape" />
                  <div className="icon-box"><i className="icon-14" /></div>
                  <h4><Link to="service-details-3.html">Insurance Policies</Link></h4>
                  <ul className="list-item clearfix">
                    <li>Pet insurance</li>
                    <li>Transport Insurance</li>
                    <li>Accident insurance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="shape" />
                  <div className="icon-box"><i className="icon-15" /></div>
                  <h4><Link to="service-details-4.html">Home &amp; Property Loan</Link></h4>
                  <ul className="list-item clearfix">
                    <li>Residential Mortgages</li>
                    <li>Buy-to-let Mortgages</li>
                    <li>Building Mortgages</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="shape" />
                  <div className="icon-box"><i className="icon-16" /></div>
                  <h4><Link to="service-details-5.html">All Bank Account</Link></h4>
                  <ul className="list-item clearfix">
                    <li>nstant Access Savings</li>
                    <li>Instant Access Cash</li>
                    <li>Young Savers Account</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="shape" />
                  <div className="icon-box"><i className="icon-17" /></div>
                  <h4><Link to="service-details-6.html">borrowing accounts</Link></h4>
                  <ul className="list-item clearfix">
                    <li>Bank Credit Card</li>
                    <li>Setter personal loan</li>
                    <li>Overdraft</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="shape" />
                  <div className="icon-box"><i className="icon-18" /></div>
                  <h4><Link to="service-details-7.html">Private Banking</Link></h4>
                  <ul className="list-item clearfix">
                    <li>Dedicated personal service</li>
                    <li>Specialist teams</li>
                    <li>Tailored products</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="shape" />
                  <div className="icon-box"><i className="icon-19" /></div>
                  <h4><Link to="service-details-8.html">Fixed term accounts</Link></h4>
                  <ul className="list-item clearfix">
                    <li>Fixed Term Saving</li>
                    <li>Fixed Rate Cash</li>
                    <li>Resume your Current</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-section end */}
      {/* calculator-section */}
      <section className="calculator-section pt_120 pb_120">
        <div className="light-icon float-bob-y" style={{backgroundImage: 'url(assets/images/icons/icon-1.png)'}} />
        <div className="auto-container">
          <div className="inner-container">
            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-3.png)'}} />
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_two">
                  <div className="content-box">
                    <div className="sec-title mb_50">
                      <h6>Calculate Loan</h6>
                      <h2>Online EMI Calculator</h2>
                    </div>
                    <div className="calculator-inner">
                      <form id="loan-form">
                        <div className="form-group">
                          <div className="input-group">
                            <input type="number" id="amount" placeholder="Loan amount" />
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="number" id="years" placeholder="Number of months" />
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <input type="number" id="interest" placeholder="Interest rate" />
                          </div>
                        </div>
                        <div className="form-group d-flex">
                          <input type="submit" defaultValue="Calculate" className="theme-btn btn-one mr_20" />
                          <input type="button" defaultValue="Reset Data" className="reset-btn" />
                        </div> 
                      </form>
                      <div id="results">
                        <div className="form-group">
                          <div className="input-group">
                            <input type="number" placeholder="Monthly Installment is" id="monthly-payment" disabled />
                          </div>
                        </div>
                        <div className="form-group none">
                          <div className="input-group">
                            <input type="number" id="total-payment" disabled />
                          </div>
                        </div>
                        <div className="form-group none">
                          <div className="input-group">
                            <input type="number" id="total-interest" disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <figure className="image-box"><img src="assets/images/resource/calculator-1.jpg" alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* calculator-section end */}
      {/* video-section */}
      <section className="video-section centred">
        <div className="bg-layer parallax-bg" data-parallax="{&quot;y&quot;: 100}" style={{backgroundImage: 'url(assets/images/background/video-bg.jpg)'}} />
        <div className="auto-container">
          <div className="inner-box">
            <h2>The 3rd Generation Private Commercial Bank</h2>
            <div className="video-btn">
              <Link to="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption>
                <i className="icon-20" />
                <span className="border-animation border-1" />
                <span className="border-animation border-2" />
                <span className="border-animation border-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* video-section end */}
      {/* funfact-section */}
      <section className="funfact-section">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-21" /></div>
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={50}>0</span><span>k+</span>
                </div>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-22" /></div>
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={90}>0</span><span>Bn</span>
                </div>
                <p>Total Transection</p>
              </div>
            </div>
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="icon-23" /></div>
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={1500} data-stop={40}>0</span><span>+</span>
                </div>
                <p>Branchs in USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* funfact-section end */}
      {/* apps-section */}
      <section className="apps-section pt_120 pb_120">
        <div className="light-icon" style={{backgroundImage: 'url(assets/images/icons/icon-4.png)'}} />
        <div className="auto-container">
          <div className="inner-container">
            <div className="shape">
              <div className="shape-1" style={{backgroundImage: 'url(assets/images/shape/shape-4.png)'}} />
              <div className="shape-2" style={{backgroundImage: 'url(assets/images/shape/shape-3.png)'}} />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image image-1"><img src="assets/images/resource/mockup-1.png" alt="" /></figure>
                  <figure className="image image-2"><img src="assets/images/resource/mockup-2.png" alt="" /></figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="sec-title mb_20">
                    <h6>Mobile App</h6>
                    <h2>Get the Fastest and Most Secure Banking</h2>
                  </div>
                  <div className="text-box mb_50">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                  </div>
                  <div className="btn-box">
                    <Link to="index-2.html" className="play-store mr_20">
                      <img src="assets/images/icons/icon-2.png" alt="" />
                      <span>get it on</span>
                      Google Play
                    </Link>
                    <Link to="index-2.html" className="play-store">
                      <img src="assets/images/icons/icon-3.png" alt="" />
                      <span>Download on the</span>
                      App Store
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* apps-section end */}
      {/* testimonial-section */}
      <section className="testimonial-section centred pt_120 pb_120">
        <div className="bg-layer" style={{backgroundImage: 'url(assets/images/background/testimonial-bg.jpg)'}} />
        <div className="auto-container">
          <div className="sec-title mb_70">
            <h6>Testimonials</h6>
            <h2>Love from Our Clients</h2>
          </div>
          <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                <h4>Sandra Bullock</h4>
                <span className="designation">Manager</span>
                <ul className="rating mb_6 clearfix">
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                </ul>
                <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
              </div>
            </div>
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                <h4>Julien Anthor</h4>
                <span className="designation">Manager</span>
                <ul className="rating mb_6 clearfix">
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                </ul>
                <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
              </div>
            </div>
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                <h4>Rolier Demonil</h4>
                <span className="designation">Manager</span>
                <ul className="rating mb_6 clearfix">
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                  <li><i className="icon-26" /></li>
                </ul>
                <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial-section end */}
      {/* news-section */}
      <section className="news-section pt_120 pb_90">
        <div className="pattern-layer">
          <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-6.png)'}} />
          <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-7.png)'}} />
        </div>
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <h6>Latest News</h6>
            <h2>Our Latest Media Update</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="inner-box" style={{backgroundImage: 'url(assets/images/news/news-1.jpg)'}}>
                  <div className="content-box">
                    <span className="post-date"><i className="icon-27" />Apr 17, 2022</span>
                    <h3><Link to="blog-details.html">Self-Guided Driving &amp; Tours Walk Of Greater City</Link></h3>
                    <ul className="post-info mb_25">
                      <li><i className="icon-28" /><Link to="blog-details.html">Admin</Link></li>
                      <li><i className="icon-29" />0 Comment</li>
                    </ul>
                    <div className="btn-box"><Link to="blog-details.html" className="theme-btn btn-three">Read More</Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box" style={{backgroundImage: 'url(assets/images/news/news-2.jpg)'}}>
                  <div className="content-box">
                    <span className="post-date"><i className="icon-27" />Apr 16, 2022</span>
                    <h3><Link to="blog-details.html">Assistance For Homes &amp; Properties Real Estate</Link></h3>
                    <ul className="post-info mb_25">
                      <li><i className="icon-28" /><Link to="blog-details.html">Admin</Link></li>
                      <li><i className="icon-29" />4 Comment</li>
                    </ul>
                    <div className="btn-box"><Link to="blog-details.html" className="theme-btn btn-three">Read More</Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="inner-box" style={{backgroundImage: 'url(assets/images/news/news-3.jpg)'}}>
                  <div className="content-box">
                    <span className="post-date"><i className="icon-27" />Apr 15, 2022</span>
                    <h3><Link to="blog-details.html">Long-Term Vision Of Health &amp; Attractive Facility</Link></h3>
                    <ul className="post-info mb_25">
                      <li><i className="icon-28" /><Link to="blog-details.html">Admin</Link></li>
                      <li><i className="icon-29" />1 Comment</li>
                    </ul>
                    <div className="btn-box"><Link to="blog-details.html" className="theme-btn btn-three">Read More</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news-section end */}
      {/* subscribe-section */}
      <section className="subscribe-section">
        <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-5.png)'}} />
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text-box">
                <h2>Subscribe us to Recieve Latest Updates</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner ml_40">
                <form method="post" action="https://azim.hostlin.com/Metrobank/contact.html">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your email" required />
                    <button type="submit" className="theme-btn btn-two">Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe-section end */}
      {/* main-footer */}
      <footer className="main-footer">
        <div className="widget-section">
          <div className="pattern-layer">
            <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-8.png)'}} />
            <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}} />
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo"><Link to="index-2.html"><img src="assets/images/logo-2.png" alt="" /></Link></figure>
                  <p>Tincidunt neque pretium lectus donec risus. Mauris mi tempor nunc orc leo consequat vitae erat gravida lobortis nec et sagittis.</p>
                  <ul className="social-links">
                    <li><Link to="index-2.html"><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to="index-2.html"><i className="fab fa-twitter" /></Link></li>
                    <li><Link to="index-2.html"><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_40">
                  <div className="widget-title">
                    <h4>Explore</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><Link to="about.html">About Us</Link></li>
                      <li><Link to="index-2.html">Testimonials</Link></li>
                      <li><Link to="career.html">Careers</Link></li>
                      <li><Link to="career-details.html">Career Detail</Link></li>
                      <li><Link to="faq.html">Faq’s</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>Usefull Links</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><Link to="index-2.html">Credit Card</Link></li>
                      <li><Link to="index-2.html">Saving Account</Link></li>
                      <li><Link to="index-2.html">Digital Gift Cards</Link></li>
                      <li><Link to="index-2.html">Apply for Loans</Link></li>
                      <li><Link to="index-2.html">Mobile Application</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h4>Find Our Branch &amp; ATM</h4>
                  </div>
                  <div className="form-inner">
                    <form method="post" action="https://azim.hostlin.com/Metrobank/index.html">
                      <div className="form-group">
                        <div className="select-box">
                          <select className="wide">
                            <option data-display="Branch">Branch</option>
                            <option value={1}>California</option>
                            <option value={2}>Man City</option>
                            <option value={3}>New York</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" name="location" placeholder="Location" />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="theme-btn btn-one">Find on Map</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright"><p>Copyright 2023 by <Link to="index-2.html">MertoBank</Link>. All Right Reserved.</p></div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}
      {/*Scroll to top*/}
      <div className="scroll-to-top">
        <div>
          <div className="scroll-top-inner">
            <div className="scroll-bar">
              <div className="bar-inner" />
            </div>
            <div className="scroll-bar-text">Go To Top</div>
          </div>
        </div>
      </div>
      {/* Scroll to top end */}
    </div>
  // </div>
  );
}

export default home;

