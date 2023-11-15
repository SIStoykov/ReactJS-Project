import './App.css'


function App() {

  return (
    <div className ="main-layout">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      {/* <!-- style css --> */}
      <link rel="stylesheet" href="css/style.css" />
      {/* <!-- Responsive--> */}
      <link rel="stylesheet" href="css/responsive.css" />
      {/* <!-- fevicon --> */}
      <link rel="icon" href="images/fevicon.png" type="image/gif" />
      {/* <!-- Scrollbar Custom CSS --> */}
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css"></link>
    {/* <!-- loader  --> */}
    <div className ="loader_bg">
       <div className ="loader"><img src="images/loading.gif" alt="#" /></div>
    </div>
    {/* <!-- end loader -->
    <!-- header --> */}
    <header>
       {/* <!-- header inner --> */}
       <div className ="header">
          <div className ="container">
             <div className ="row">
                <div className ="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                   <div className ="full">
                      <div className ="center-desk">
                         <div className ="logo">
                            <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className ="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                   <nav className ="navigation navbar navbar-expand-md navbar-dark ">
                      <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                      <span className ="navbar-toggler-icon"></span>
                      </button>
                      <div className ="collapse navbar-collapse" id="navbarsExample04">
                         <ul className ="navbar-nav mr-auto">
                            <li className ="nav-item">
                               <a className ="nav-link" href="index.html"> Home  </a>
                            </li>
                            <li className ="nav-item">
                               <a className ="nav-link" href="#">About</a>
                            </li>
                            <li className ="nav-item">
                               <a className ="nav-link" href="#">Contact us</a>
                            </li>
                         </ul>
                         <div className ="sign_btn"><a href="#">Sign in</a></div>
                      </div>
                   </nav>
                </div>
             </div>
          </div>
       </div>
    </header>
    {/* <!-- end header inner -->
    <!-- end header -->
    <!-- banner --> */}
    <section className ="banner_main">
       <div className ="container">
          <div className ="row d_flex">
             <div className ="col-md-12">
                <div className ="text-bg">
                   <h1>Find best car Here For rent</h1>
                   <strong>Free Multipurpose Responsive</strong>
                   <span>Landing Page 2019</span>
                   <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum is simply dummy text of the printing 
                      <head></head>
                   </p>
                   <a href="#">Read More</a>
                </div>
             </div>
          </div>
       </div>
    </section>
    
    {/* <!-- end banner -->
  <!-- car --> */}
    <div  className ="car">
       <div className ="container">
          <div className ="row">
             <div className ="col-md-12">
                <div className ="titlepage">
                   <h2>VARIETY OF CARS </h2>
                   <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</span>
                </div>
             </div>
          </div>
          <div className ="row">
             <div className ="col-md-4 padding_leri">
                <div className ="car_box">
                   <figure><img src="images/car_img1.png" alt="#"/></figure>
                   <h3>Hundai</h3>
                </div>
             </div>
             <div className ="col-md-4 padding_leri">
                <div className ="car_box">
                   <figure><img src="images/car_img2.png" alt="#"/></figure>
                   <h3>Audi</h3>
                </div>
             </div>
             <div className ="col-md-4 padding_leri">
                <div className ="car_box">
                   <figure><img src="images/car_img3.png" alt="#"/></figure>
                   <h3>Bmw x5</h3>
                </div>
             </div>
          </div>
       </div>
    </div>
    {/* <!-- end car -->
  <!-- bestCar --> */}
    <div id="contact" className ="bestCar">
       <div className ="container">
          <div className ="row">
             <div className ="col-md-12">
             </div>
          </div>
          <div className ="row">
             <div className ="col-sm-12">
                <div className ="row">
                   <div className ="col-md-6 offset-md-6">
                      <form className ="main_form">
                         <div className ="titlepage">
                            <h2>Find A  Best Car For Rent</h2>
                         </div>
                         <div className ="row">
                            <div className ="col-md-12 ">
                               <select>
                                  <option value="0">Choose car Make</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                               </select>
                            </div>
                            <div className ="col-md-12">
                               <select>
                                  <option value="0">Choose Car Type </option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                               </select>
                            </div>
                            <div className ="col-md-12">
                               <input className ="contactus" placeholder="Search" type="Search" name="Search" />                          
                            </div>
                            <div className ="col-md-12">
                               <select>
                                  <option value="0">Price of Rent</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                               </select>
                            </div>
                            <div className ="col-sm-12">
                               <button className ="find_btn">Find Now</button>
                            </div>
                         </div>
                      </form>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    {/* <!-- end bestCar -->
    <!-- choose  section --> */}
    <div className ="choose ">
       <div className ="container">
          <div className ="row">
             <div className ="col-md-12">
                <div className ="titlepage">
                   <h2>Why Choose Us</h2>
                   <span>It is a long established fact that a reader will be distracted by the readable content of a page when<br /> looking at its layout. The point of using </span>
                </div>
             </div>
          </div>
          <div className ="row">
             <div className ="col-md-12">
                <div className ="choose_box">
                   <span>01</span>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making </p>
                </div>
             </div>
             <div className ="col-md-12">
                <div className ="choose_box">
                   <span>02</span>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making </p>
                </div>
             </div>
             <div className ="col-md-12">
                <div className ="choose_box">
                   <span>03</span>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making </p>
                </div>
             </div>
          </div>
       </div>
    </div>
    {/* <!-- end choose  section -->
    <!-- cutomer --> */}
    <div className ="cutomer">
       <div className ="container">
          <div className ="row">
             <div className ="col-md-12">
                <div className ="titlepage">
                   <h2>What is says our cutomer</h2>
                </div>
             </div>
          </div>
          <div className ="row">
             <div className ="col-md-12">
                <div id="myCarousel" className ="carousel slide cutomer_Carousel " data-ride="carousel">
                   <ol className ="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" className ="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                   </ol>
                   <div className ="carousel-inner">
                      <div className ="carousel-item active">
                         <div className ="container">
                            <div className ="carousel-caption ">
                               <div className ="cross_img">
                                  <figure><img src="images/cross_img.png" alt="#"/></figure>
                               </div>
                               <div className ="our cross_layout">
                                  <div className ="test_box">
                                     <h4>Due markes</h4>
                                     <span>Rental</span>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                     <i><img src="images/te1.png" alt="#"/></i>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className ="carousel-item">
                         <div className ="container">
                            <div className ="carousel-caption">
                               <div className ="cross_img">
                                  <figure><img src="images/cross_img.png" alt="#"/></figure>
                               </div>
                               <div className ="our cross_layout">
                                  <div className ="test_box">
                                     <h4>Due markes</h4>
                                     <span>Rental</span>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                     <i><img src="images/te1.png" alt="#"/></i>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className ="carousel-item">
                         <div className ="container">
                            <div className ="carousel-caption">
                               <div className ="cross_img">
                                  <figure><img src="images/cross_img.png" alt="#"/></figure>
                               </div>
                               <div className ="our cross_layout">
                                  <div className ="test_box">
                                     <h4>Due markes</h4>
                                     <span>Rental</span>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                     <i><img src="images/te1.png" alt="#"/></i>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <a className ="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                   <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span className ="sr-only">Previous</span>
                   </a>
                   <a className ="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                   <span className ="carousel-control-next-icon" aria-hidden="true"></span>
                   <span className ="sr-only">Next</span>
                   </a>
                </div>
             </div>
          </div>
       </div>
    </div>
    {/* <!-- end cutomer -->
    <!--  footer --> */}
    <footer>
       <div className ="footer">
          <div className ="container">
             <div className ="row">
                <div className ="col-md-12">
                   <div className ="cont_call">
                      <h3> <strong className ="multi color_chang"> Call Now</strong><br />
                         (+1) 12345667890
                      </h3>
                   </div>
                   <div className ="cont">
                      <h3> <strong className ="multi"> Free Multipurpose</strong> 
                         Responsive Landing Page 2019
                      </h3>
                   </div>
                </div>
             </div>
          </div>
          <div className ="copyright">
             <div className ="container">
                <div className ="row">
                   <div className ="col-md-12">
                      <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a></p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </footer>
    {/* <!-- end footer --> */}
    
  
 </div>
  )
}

export default App
