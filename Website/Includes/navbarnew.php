 <body class="sbar_color_one">    
         <!--Start Preloader -->
           <div class="preloader"></div>
         <!--End Preloader --> 
      <div class="page-wapper home-page-one">
         <header class="site-header" id="header-one">
            <div class="top-bar">
               <div class="container">
                  <div  class="row clearfix">
                     <div class="col-lg-12">
                        <div class="float-left">
                           <p><i class="fa fa-map-marker"></i>662/124/194</p>
                        </div>
                        <div class="float-right ">
                           <div class="inner-sec">
                              <ul class="social-media">
                                 <li><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                 <li><a href="https://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
                                  <li><a href="LoginForDoctor.php"><i class="fa fa-stethoscope"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide">
               <div class="container">
                  <a class="navbar-brand" href="home.php"><img src="http://steelthemes.com/demo/Elango/meditex-final/assets/image/default-logo.png" class="img-fluid" alt="img"></a>
                  <button class="navbar-toggler toggler-spring"><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse">
                     <ul class="navbar-nav navbar-mobile ml-auto mr-auto">
                        <li class="nav-item dropdown"><a class="nav-link link_hd" href="home.php">  Home  </a></li>
                        <li class="nav-item dropdown"><a class="nav-link link_hd" href="our-doctors.php"> Doctors </a></li>
                        <li class="nav-item dropdown"><a class="nav-link link_hd" href="labs.php"> Laboratory </a></li>
                        <li class="nav-item dropdown"><a class="nav-link link_hd" href="pharmacy.php"> Pharmacy </a></li>
                        <li class="nav-item dropdown"><a class="nav-link link_hd" href="time-table.php"> Appointments </a></li>
                        <li class="nav-item dropdown"><a class="nav-link link_hd" href="aboutus.php"> About Us </a></li>
                 
                       
                     </ul>
                     <ul class="navbar-nav navbar-mobile right-nav ml-auto ">
                 
                              
                                <!----cart----->
                                <li class="nav-item  dropdown cart_dropdown">
                                    <a class="nav-link" href="#"> <span class="fa fa-user fa-2x head-icon"></span>   </a>
                                    <ul class="navbar-nav submenu">
                                       <li> 
                                       	<div  class="cart" id="cart_items">
                                        <div class="product_inside_cart">
                                          <div id="notSignIn">
	                                        <div class="cart_in">
	                                           <img src="https://vrtize.com/wp-content/uploads/2016/08/new-account-icon-256x256.png" class="img-fluid" width="50" alt="proimg"/>
	                                           <div class="content">
	                                                <a href="signup.php"><h2 >Sign Up</h2></a>
	                                           </div>                                          
	                                        </div>
	                                        <div class="cart_in" >
	                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8cD1RMW4FJFvq_vT78MTzhGOWj4UmJ-tqL8SPT5SC3NNIIZ1" class="img-fluid" width="50" alt="proimg" />
	                                             <div class="content">
	                                              <a href="login.php"><h2 >Login</h2></a>
	                                             </div>
	                                          </div>
	                                      </div>
	                                      <div id="signIn">
	                                          <div class="cart_in">
	                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8cD1RMW4FJFvq_vT78MTzhGOWj4UmJ-tqL8SPT5SC3NNIIZ1" class="img-fluid" width="50" alt="proimg" />
	                                             <div class="content">
	                                              <a href="myprofile.php"><h2 >My Profile</h2></a>
	                                             </div>
	                                          </div>
	                                          <div class="cart_in">
	                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8cD1RMW4FJFvq_vT78MTzhGOWj4UmJ-tqL8SPT5SC3NNIIZ1" class="img-fluid" width="50" alt="proimg" />
	                                             <div class="content">
	                                              <a href="#" onclick="signout();"><h2 >Signout</h2></a>
	                                             </div>
	                                          </div>
	                                      </div>

                                       </div>


                                   

                                     </div> </li>
                                    </ul>
                                 </li> 
                                   <!----cart----->
                     </ul>
                  </div>
               </div>
            </div>
            <!--End Main Header -->
            <script>  
            	jQuery(document).ready(function(){
            		firebase.auth().onAuthStateChanged(function(user) {
					  if (user) {
						  $('#signIn').show();
						  $('#notSignIn').hide();
						} 
					  else 
					  	{
						  $('#signIn').hide();
						  $('#notSignIn').show();
					  	}
					});
				});
            </script>