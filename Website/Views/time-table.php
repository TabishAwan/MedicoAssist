<!DOCTYPE html>
<html lang="en">

<title>appointment</title>
<style>
.button {
  background-color: #90EE90; 
  font-color:#006400;/* Green */
  border: none;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 20px; 

}
</style>
   
<!-- Mirrored from steelthemes.com/demo/Elango/meditex-final/time-table.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 05 Oct 2019 11:37:36 GMT -->
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
             <li class="breadcrumb-item"><a href="#">Pages</a></li>
             <li class="breadcrumb-item active" aria-current="page"> Timetable</li>
           </ol>
     </nav>
              </div>
           </div>
        </div>
     
     </section>
     
<!--------Timetable-------->

<section class="time_table">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="heading">
                     <h1>Timetable</h1>
                 </div>
            </div>
            <div class="col-lg-12">
                    <div class="department_select">
                                     
                            <div class="dropdown">
                                    <button type="button" class=" btn-primary  dropdown-toggle" data-toggle="dropdown">
                                            All Departments
                                    </button>
                                    <div class="dropdown-menu" id="doctordropdown">
                         
                                     	<a href="" class="dropdown-item" onclick="getDocTimetable()" id = "testing">All Departments</a>
                                                                       
                                        </div>
                                         </div>
    
                    </div>

            </div>
            <div class="col-lg-12">
                <div class="table_outer table-responsive" >
                    <table  class="table table-striped  table-bordered">
                        <tbody id = "clear">
                            <tr id="doctordropdown2">
                                <th scope="col"></th>
                                <th scope="col">2</th>
                                <th scope="col">3</th>
                                <th scope="col">4</th>
                                <th scope="col">5</th>
                                <th scope="col">6</th>
                                <th scope="col">7</th>
                                <th scope="col">8</th>
                            </tr>
                           
                           
                            <tr  id="id1" >
                                <th class="side_time">Monday
                              </th>

                            </tr>

                            <tr id="id2">
                                <th class="side_time">Tuesday</th>
                         

    
                            </tr>

                            <tr id="id3">
                                <th class="side_time">Wedneshday</th>
                              

                         
                                
                            </tr>
                            <tr id="id4">
                                    <th class="side_time">Thursday</th>
                                  
                                    
                                    
                                </tr>

                                <tr id="id5">
                                        <th class="side_time">Friday</th>
                                 
                              
                                        
                                        
                                    </tr>
                                    
                                <tr id="id6">
                                        <th class="side_time">Saturday</th>
                                
                                        
                                        
                                    </tr>
                                     <tr id="id7">
                                        <th class="side_time">Sunday</th>
                                
        
                  
                                        
                                        
                                        
                                        
                                    </tr>
                     

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

 <!--------Timetable-------->
 
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
<script src="../JSControllers/our-doctors.js"></script>
<script src="../JSControllers/loginController.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    displayDoctorDropdown();
     			
  });
</script>
<!-- Mirrored from steelthemes.com/demo/Elango/meditex-final/time-table.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 05 Oct 2019 11:37:36 GMT -->
</html>