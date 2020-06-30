<?php
if (isset($_GET['link'])) {
  $newvariable =  $_GET['link'];
?>

<!DOCTYPE html> 
<html lang="en">
   
<!-- Mirrored from steelthemes.com/demo/Elango/meditex-final/single-doctors.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 05 Oct 2019 11:35:53 GMT -->
<?php include '../Includes/headernew.php';?>

<?php include '../Includes/navbarnew.php';?>
 
<!------main-content------>
<main class="main-content">
         

<!-----------------breadcrumb------------------------>
<section class="ban-bread-crumb">
        <div class="container">
           <div class="row">
              <div class="col-lg-12">
                 <nav aria-label="breadcrumb">
           <ol class="breadcrumb">
             <li class="breadcrumb-item"><a href="#">Home</a></li>
             <li class="breadcrumb-item"><a href="#">Department</a></li>
             <li class="breadcrumb-item active" aria-current="page">Single-Labs</li>
           </ol>
     </nav>
              </div>
           </div>
        </div>
     
     </section>
     
     
      <!-----------------breadcrumb------------------------>
      <div class="single_doctors">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="single_doctors_left" >
                <!----working_hours---->
                <div id="labQuickDetails">
                  <div class="quick_profile">
                    <h2>Quick Profile</h2>
                      <ul >
                        <li>Name.................Genoveva Leannon</li>
                        <li>Phone.....................(507) 284-2511</li>
                        <li>Email..............Meditex@gmaiil.com</li>
                        <li>Address...............Office 224, Hall B</li>
                        <li>Speciality..................................Dental</li>
                        <li>Degree...................M.D. of Medicine</li>
                      </ul>
                      <a href="#" class="theme-btn">View Timetable</a>
                  </div>
                </div>
                <!-----Book An Appointment-->
                <div class="book_appoint_ment">
                    <h2>Book An Appointment</h2>
                    <form>
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Name*" required="">
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" placeholder="email*" required="">
                        </div>
                        <div class="form-group">
                            <input type="text" name="phone" placeholder="Phone*" required="">
                        </div>
                        <div class="form-group">
                            <input id="datepicker_dp_side" class="form-control date hasDatepicker" name="date" placeholder="Arrival Date">
                            <span class="add-on"><i class="icon flaticon-calendar-1"></i></span>
                        </div>
                        <div class="form-group">
                            <textarea id="form_message" name="message" placeholder="Message" rows="5" required="required" data-error="Please, leave us a message."></textarea>
                        </div>
                        <button class="banner-btn appointment-btn" type="submit" name="submit-form">BOOK  NOW</button>
                    </form>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12">
              <div class="single_doctor_right">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="heading mg_btm" id="labName">
                       <span>Genova Leannon</span>
                      <p>Dentist</p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="contact_social_media text-right">
                      <ul>
                         <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                         <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                         <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                         <li><a href="#"><i class="fa fa-wifi"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="single_doc_banner" id="labImage">
                  <img src="http://steelthemes.com/demo/Elango/meditex-final/assets/image/best-doctors/single-doctor-banner.jpg" class="img-fluid" alt="img" />
                </div>
                <div class="single_doctor_content" id="labDetails">
                  <div class="content_one">
                       <p>
                        Dr. Genoveva Leannon attended Pacific University on a basketball scholarship and graduated with a Bachelor of Science in Biology. Dr. Leannon then graduated with Highest Honors from Oregon Health Sciences University School of Dentistry. Following completion of an Advanced General Dentistry Residency in the U.S. Army Dental Corp., Dr. Leannon worked in general dentistry for several years. His training continued at the Mayo Clinic’s Graduate School of Medicine, where he received a Master of Science and a Certificate of Orthodontics and Dentofacial Orthopedics. Dr. Leannon has published articles in dental and orthodontic journals on innovative techniques and orthodontic research.
                    <br/><br/>
                        Dr. Leannon is past President of the Clackamas County Dental Society and Oregon State Society of Orthodontists. He also is an active member of the American Association of Orthodontists, the Pacific Coast Society of Orthodontists, the American Dental Association, and the Oregon Dental Association.
                    </p>
                  </div>
                </div>
              </div>
                <!-------appointment-section----->
              <div class="testimonial_sec hm-one">
                <div class="row">
                   <div class="col-lg-12">
                      <div  class="heading clearfix">
                         <h1>WHAT <span>CLIENTS SAY</span></h1>
                      </div>
                   </div>
                </div>
                <div class="owl-carousel owl-theme single-item">
                  <div class="testimonial_content">
                    <p>"When I began looking for the "best" center for Max I chose Medicol. You are the best. Many thanks to you and your warm, concerned staff for providing a safe haven for Max and giving me much needed respite. We will see how his nasty disease progresses and if possible will send him again next summer… "</p>
                    <div class="client_details">
                       <img src="http://steelthemes.com/demo/Elango/meditex-final/assets/image/test-1.png" class="img-fluid" alt="test" />
                       <div class="client_in">
                          <h6>Reta Schmidt</h6>
                          <span>Patient</span>
                       </div>
                    </div>
                  </div>
                  <div class="testimonial_content">
                       <p>"Three and a half months ago, my family lost someone that meant the world to us: my father. We made many trips to Medicol with my father for comfort care. We did have a few star employees that deserve recognition. We will never take that from him, but he adored two employees and they were great to him."</p>
                       <div class="client_details">
                          <img src="http://steelthemes.com/demo/Elango/meditex-final/assets/image/test-2.png" class="img-fluid" alt="test" />
                          <div class="client_in">
                             <h6>Katlynn Pouros</h6>
                             <span>Patient's family</span>
                          </div>
                       </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     


<!-------contact-through----->
<div class="contact_through">
      <div class="container">
         <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6">
               <div class="contact_through_inner">
                  <span class="flaticon-phone-1 icon"></span>
                  <p>Emergency Cases: <br/>
                     (052) 611-5711</p>
               </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
               <div class="contact_through_inner">
                  <span class="flaticon-placeholder icon"></span>
                  <p>E7088 Micaela Cliffs, <br/>
                     Thielshire, OK 95062</p>
               </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
               <div class="contact_through_inner">
                  <span class="flaticon-envelope icon"></span>
                  <p>Email Address<br/>
                     contact@meditex.com</p>
               </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
               <div class="contact_through_inner">
                  <span class="flaticon-calendar icon"></span>
                  <p>Book Online<br/>
                     Appointment Now</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-------contact-through----->




 <!-------backtotop-------->
 <a href="#" id="scroll" class="default-bg" style="display: none;"><span></span></a>
  <!-------backtotop-------->
         <!------main-content------>
         </main>
<!------main-slider------>
      </div>



      <!---------mbile-navbar----->
      <div class="bsnav-mobile">
         <div class="bsnav-mobile-overlay"></div>
         <div class="navbar">
            <button class="navbar-toggler toggler-spring mobile-toggler"><span class="fa fa-close"></span></button>
         </div>
      </div>
      <!---------mbile-navbar----->


      <!-----------------------------------script-------------------------------------->
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/jquery-3.3.1.min.js"></script>
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/popper.min.js" ></script>
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/bootstrap.min.js" ></script>
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/bsnav.min.js"></script>
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/jquery-ui.js"></script>
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/owl.js"></script>  
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/isotope.min.js"></script>
          <!---smooth-scrool-->
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/SmoothScroll.min.js"></script>
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/validator.min.js"></script>  
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/contact.js"></script>    
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/script.js"></script>

      <!--Google Map APi Key-->
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHzPSV2jshbjI8fqnC_C4L08ffnj5EN3A"></script>
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/gmaps.js"></script>
      <script src="http://steelthemes.com/demo/Elango/meditex-final/assets/js/map-script.js"></script>
      <!--End Google Map APi-->
   </body>
<?php include '../Includes/footernew.php';?>
<script src="../JSControllers/Labs.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    var link='<?php echo $newvariable; ?>';
    updatekey(link);
  });
</script>
<!-- Mirrored from steelthemes.com/demo/Elango/meditex-final/single-doctors.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 05 Oct 2019 11:35:53 GMT -->

</html>
<?php
}
else{
  echo "No record Found...";
}
?>