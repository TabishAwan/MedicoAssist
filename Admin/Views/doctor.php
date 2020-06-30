<!DOCTYPE html>
<title>doctor</title>
<html>
	<?php include '../Includes/header.php';?>
	<body>
		<?php include '../Includes/sidenav.php';?>
		<div class="main-content" id="panel">
			<?php include '../Includes/navbar.php';?>
			
			<div class="container" , align="center" >

				<div class="content">
          			<!-- Add Data Here-->             
              		<div class="row">
                    	<div class="col-md-12">
                      		<div class="card">
                    			<div class="card-header card-header-info card-header-icon">
                      				<div class="card-icon">
                        				<i class="fa fa-edit" style="font-size: 30px"></i>
                      				</div>
                      				<h4 class="card-title">List of Doctors</h4>
                    			</div>
		                        <div class="card-body">
		                          <div class="toolbar">
		                            <div class="main-content" id="panel">
			
			<div class="container">
				<!-- Button to Open the Modal -->
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" style="float: right;">
				Open up
				</button>

				<!-- The Modal -->
				<div class="modal" id="myModal">
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
					    <form action="/examples/actions/confirmation.php" method="get">
					    	<div class="form-group">
					            <label for="address">Address</label>
					            <input type="text" class="form-control" id="address" placeholder="address" required/>
					        </div>
					        <div class="form-group">
					            <label for="bio">BIO</label>
					            <input type="bio" class="form-control" id="bio" placeholder="bio" required>
					        </div>
							<div class="form-group">
					            <label for="clinic">Clinic</label>
					            <input type="text" class="form-control" id="clinic" placeholder="clinic" required>
					        </div>
					        <div class="form-group">
					            <label for="experience">Experience</label>
					            <input type="text" class="form-control" id="experience" placeholder="experience" required>
					        </div>
					        <div class="form-group">
					            <label for="fee">fee</label>
					            <input type="text" class="form-control" id="fee" placeholder="fee" required>
					        </div>	
					        <div class="form-group">
					            <label for="gender">Gender</label>
					            <input type="text" class="form-control" id="gender" placeholder="gender" required>
					        </div>	
					        <div class="form-group">
					            <label for="name">Name</label>
					            <input type="text" class="form-control" id="name" placeholder="name" required>
					        </div>	
					        <div class="form-group">
					            <label for="phone">Contact</label>
					            <input type="text" class="form-control" id="phone" placeholder="phone" required>
					        </div>	
					        <div class="form-group">
					            <label for="specifications">Specifications</label>
					            <input type="text" class="form-control" id="specifications" placeholder="specifications " required>
					        </div>	
					        <div class="form-group">
					            <label for="timeapp">Times per Appointment</label>
					            <input type="text" class="form-control" id="timeapp" placeholder="Enter Data in Minutes" required>
					        </div>	
					         <div class="form-group">
					            <label for="appstarttime">Appointment Start Time</label>
					            <input type="text" class="form-control" id="appstarttime" placeholder="Enter Data according to Hours" required>
					        </div>
					         <div class="form-group">
					            <label for="appclosetime">Appointment End Time</label>
					            <input type="text" class="form-control" id="appclosetime" placeholder="Enter Data according to Hours" required>
					        </div>
					        <div class="form-group">
					            <label for="timespan">TimeSpan</label>
					            <input type="text" class="form-control" id="timespan" placeholder="Enter Data in Hours" required>
					        </div>		
					         <div class="form-group">
					            <label for="Image">Image</label> 
					            
					            <form action="upload.php" method="post" enctype="multipart/form-data">
                                                <input class="form-control" type="file" name="fileToUpload" id="fileToUpload">      
                                </form>
					        </div>	
					           <div class="form-group">
					            <label for="email">Email</label>
					            <input type="text" class="form-control" id="email" placeholder="email" required>
					        </div>
					           <div class="form-group">
					            <label for="Password">Password</label>
					            <input type="text" class="form-control" id="password" placeholder="Password" required>
					        </div>				        
					    </form>

					</div>					
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
				 <button class="btn btn-info" type="button" onclick="uploadImage_addDoctor();" data-dismiss="modal">  Save </button>
					<button type="button" class="btn btn-success" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div> 
				</div>
			</div>
		</div>







				<!-- The Modal -->
				<div class="modal" id="editmodale">
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
					            <label for="Edit Image">Edit Image:</label>
					            <input type="file" class="form-control" id="efileToUpload" placeholder="insert image" required>
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
					<button onclick="editImage();" class="btn btn-primary" data-dismiss="modal">Save</button>
					<button type="button" class="btn btn-success" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div> 
				</div>



		</div>


		                          </div><br>
		                          <div class="material-datatables">
		                            <div class="table-responsive">
		                              <table width="100%" class="table table-striped table-no-bordered table-hover dataTable dtr-inline"  role="grid" aria-describedby="datatables_info" style="width: 100%;" cellspacing="0" id="doctorTable">
	                                        <thead>
                                                <tr class="bg-info text-white">
                                                  <th>Sr No.</th>
                                                  <th>Adress </th>
                                                  <th>Bio</th>
                                                  <th>Clinic</th>
                                                  <th>Email</th>
                                                  <th>Password</th>
                                                  <th>Experience</th>
                                                  <th>Fee</th>
                                                  <th>Gender</th>
                                                  <th>Name</th>
                                                  <th>Contact</th>
                                                  <th>Specifications</th>
                                                  <th>Time/Appointment(mins)</th>
                                                  <th>App. Start Time</th>
                                                  <th>App. End Time</th>
                                                  <th>TimeSpan(hrs)</th>
                                                  <th>Image</th>
                                                  <th>Edit</th>
                                                  <th>Delete</th>
                                                </tr>
	                                        </thead>
	                                        <tbody id="doctorTableBody">  
	                                        	<!-- Data From Database-->
	                                   		</tbody>
		                              </table>  
		                            </div>
		                          </div>
		                        </div>
                    		<!-- end content-->
                      		</div>
                      	<!--  end card  -->
                    	</div>
                    <!-- end col-md-12 -->
              		</div>
          			<!-- end row -->
        		</div>
			</div>
		</div>
		<?php include '../Includes/plugins.php';?>
		<?php include '../Includes/footer.php';?>
		  <script src="../JSControllers/doctorController.js"></script>

	</body>
</html>