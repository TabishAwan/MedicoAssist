<?php
if (isset($_GET['did'])) {
  $doc =  $_GET['did'];
?>

<!DOCTYPE html>
<html lang="en">
   <title>doctorProfile</title>


<?php include '../Includes/headernew.php';?>
<?php include '../Includes/navbarnew.php';?>
<style>
body{
  background: #DAE3E7;
}

.row{
  margin-top: 40px;
}


html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
div.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}

.header {
  padding: 10px 0;
  background: #f5f5f5;
  border-top: 3px solid #3AAA64;
}

.list-group {
    list-style: disc inside;

}

.list-group-item {
    display: list-item;
}

 .find-more{
   text-align: right;
 }


.label-theme{
  background: #3AAA64;
  font-size: 14px;
  padding: .3em .7em .3em;
  color: ##568701;
  border-radius: .25em;
}

.label a{
  color: inherit;
}
	</style>
  
<!------main-content------>

          

<!-----------------breadcrumb------------------------>

     
     <!-----------------breadcrumb------------------------>
     <!-----------------welcome_section------------------------>
<hr>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>AHM Kamal</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
</head>


<body>
	<main class="main-content">


        
          	
				<!-- The Modal editor  -->
		

				<!-- The Modal -->
				<div class="modal fade" id="editModal" tabindex="-1" role="dialog" data-backdrop="false">
					<div class="modal-dialog">
					<div class="modal-content">

					<!-- Modal Header -->
					<div class="modal-header">
					<h4 class="modal-title">Fillup form</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					
					<!-- Modal body -->
					<div class="modal-body" , align="left">
					 <div class="bs-example">
					    <form action="/examples/actions/confirmation.php" method="post">
					    	<div class="form-group">
					    		 <input type="hidden" id="eKey">
					    		 <label for="address">Address</label>
					            <input type="text" class="form-control" id="eaddress" placeholder="address" required>
					        </div>
					        <div class="form-group">
					            <label for="bio">BIO</label>
					            <input type="bio" class="form-control" id="ebio" placeholder="bio" required>
					        </div>
							<div class="form-group">
					            <label for="clinic">Clinic</label>
					            <input type="text" class="form-control" id="eclinic" placeholder="clinic" required>
					        </div>
					      
					        <div class="form-group">
					            <label for="experience">Experience</label>
					            <input type="text" class="form-control" id="eexperience" placeholder="experience" required>
					        </div>
					        <div class="form-group">
					            <label for="fee">fee</label>
					            <input type="text" class="form-control" id="efee" placeholder="fee" required>
					        </div>	
					        <div class="form-group">
					            <label for="gender">Gender</label>
					            <input type="text" class="form-control" id="egender" placeholder="gender" required>
					        </div>	
					        <div class="form-group">
					            <label for="name">Name</label>
					            <input type="text" class="form-control" id="ename" placeholder="name" required>
					        </div>	
					        <div class="form-group">
					            <label for="phone">Contact</label>
					            <input type="text" class="form-control" id="ephone" placeholder="phone" required>
					        </div>	
					        <div class="form-group">
					            <label for="specifications">Specifications</label>
					            <input type="text" class="form-control" id="especifications" placeholder="specifications " required>
					        </div>	
					        <div class="form-group">
					            <label for="timeapp">TimesperAppointment</label>
					            <input type="text" class="form-control" id="etimeapp" placeholder="Enter Data in Minutes" required>
					        </div>	
					          <div class="form-group">
					            <label for="timespan">Appointment Start Time</label>
					            <input type="text" class="form-control" id="eappstarttime" placeholder="Enter Data in Hours" required>
					        </div>
					          <div class="form-group">
					            <label for="timespan">Appointment End Time</label>
					            <input type="text" class="form-control" id="eappclosetime" placeholder="Enter Data in Hours" required>
					        </div>
					        <div class="form-group">
					            <label for="timespan">timespan</label>
					            <input type="text" class="form-control" id="etimespan" placeholder="Enter Data in Hours" required>
					        </div>
					          <div class="form-group">
					            <label for="email">Email</label>
					            <input type="text" class="form-control" id="eemail" placeholder="email" required>
					        </div>
					          <div class="form-group">
					            <label for="Password">Password</label>
					            <input type="text" class="form-control" id="epassword" placeholder="Password" required>
					        </div>
						        
					    </form>

					</div>					
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
					<button onclick="saveChanges();" class="btn btn-primary" data-dismiss="modal">Save</button>
					<button type="button" class="btn btn-success" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div> 
				</div>
     

    			<!--Prescription Modal-->

    				<div class="modal fade" id="prescriptionModal" tabindex="-1" role="dialog" data-backdrop="false">
					<div class="modal-dialog">
					<div class="modal-content">

					<!-- Modal Header -->
					<div class="modal-header">
					<h4 class="modal-title">Prescription Form</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>			
							
					<!-- Modal body -->
					<div class="modal-body" , align="left">
					 <div class="bs-example">
				        <div class="form-group">
				            <label for="bio">Patient ID:</label>
				            <input type="text" class="form-control" id="patientIDPrec" placeholder="patientID" required>
				        </div>
						<div class="form-group">
				            <label for="comment">Prescription:</label>
							<textarea class="form-control" rows="7" id="prescriptionDetails" name="text"></textarea>
				        </div>
					</div>					
				</div>
				<!-- Modal footer -->
				<div class="modal-footer" id="modalButtons">
					<button onclick="saveChanges();" class="btn btn-primary" data-dismiss="modal">Save</button>
					<button type="button" class="btn btn-success" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div> 
				</div>
     
<!-- Main container -->
  <div class="container">
       
<div class="row" style="margin-top:20px;">
	 <div class="col-md-9">
        </div>

        	
        <div class="col-md-3" id="editButton">

       <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" onclick="editDoctor();" style="float: right;">
			Edit  Profile
				</button>
        </div><br><br>


         <div class="col-md-3" id="nameid">
          <h2 style="font-size:8px; color:##568701"><strong>NAME</strong></h2>
        </div>
        <div class="col-md-3" id="specificationid"> <!-- Rank & Qualifications -->
          <h5 style="color:##568701">Associate Professor</h5>

        </div>
        <div class="col-md-3" id="addressid"> <!-- Rank & Qualifications -->
          <p >Address: Namapara, Trishal, Mymensingh</p>
        </div>

        <div class="col-md-3" id="phoneid"> <!-- Phone & Social -->
          <span class="number" style="font-size:18px; color:##568701">Phone:<strong>+8801732226402</strong></span>

     
        </div>
      </div>
<!-- Section:Biography -->
  <div class="row">
        <div class="col-md-12">
          <div class="card card-block text-xs-left">
            <h2 class="card-title" style="color:#568701"> Appointments</h2>
            <div style="height: 15px"></div>
              <div class="material-datatables">
		                            <div class="table-responsive">
		                              <table width="100%" class="table table-striped table-no-bordered table-hover dataTable dtr-inline"  role="grid" aria-describedby="datatables_info" style="width: 100%;" cellspacing="0" id="myprofiletableid">
	                                        <thead>
                                                <tr class="bg-info text-white">
                                                  <th>Sr No.</th>
                                                  <th>startTime</th>
                                                  <th>endTime </th>
                                                  <th>day</th>
                                                  <th>patientID</th>
                                                  <th>timeStamp</th>
                                                  <th>CheckBox</th>
                                            
                                                  
                                                </tr>
	                                        </thead>
	                                        <tbody id="myprofiletablebody">  
	                                        	<!-- Data From Database-->
	                                   		</tbody>
		                              </table>  
		                            </div>
		                          </div>
          </div>
        </div>
      </div>
<!-- End:Biography -->
  


</div> <!--End of Container-->
<hr>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>



 <!-------backtotop-------->
 <a href="#" id="scroll" class="default-bg" style="display: none;"><span></span></a>
  <!-------backtotop-------->
         <!------main-content------>
         </main>
<!------main-slider------>
      </div>
   
<!------dataTable------>
     


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
<script src="../JSControllers/loginController.js"></script>
<script src="../JSControllers/our-doctors.js"></script>
	<script type="text/javascript">
	  $(document).ready(function(){
	  	var docID='<?php echo $doc; ?>';
	    displayDoctor(docID);
	    displayDoctorAppointments(docID);
	  });
  	</script>

</body>
</html>
<?php
}
else{
  echo "No record Found...";
}
?>
<!--<script type="text/javascript">
  $(document).ready(function(){
    var link='<?php  $newvariable; ?>';
    updatekey(link);
  });
</script>
 Mirrored from steelthemes.com/demo/Elango/meditex-final/aboutus.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 05 Oct 2019 11:14:24 GMT -->
