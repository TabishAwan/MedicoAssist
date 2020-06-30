<!DOCTYPE html>
<title>pharmacy</title>
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
                      				<h4 class="card-title">List of Pharmacies</h4>
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
					<h4 class="modal-title">Fill up Form</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<!-- Modal body -->
				<div class="modal-body" , align="left">
					 <div class="bs-example">
					    <form action="/examples/actions/confirmation.php" method="post">
					    	<div class="form-group">
					            <label for="name">Name</label>
					            <input type="text" class="form-control" id="name" placeholder="Name" required>
					        </div>
					    	<div class="form-group">
					            <label for="branch">Branch</label>
					            <input type="text" class="form-control" id="branch" placeholder="Branch" required>
					        </div>
					        <div class="form-group">
					            <label for="email">Email</label>
					            <input type="text" class="form-control" id="email" placeholder="Email" required>
					        </div>
							<div class="form-group">
					            <label for="contact">Contact</label>
					            <input type="text" class="form-control" id="contact" placeholder="Contact" required>
					        </div>
					        <div class="form-group">
					            <label for="openTime">Open timings</label>
					            <input type="text" class="form-control" id="openTime" placeholder="Openingtime" required>
					        </div>
					        <div class="form-group">
					            <label for="closeTime">Close Timings</label>
					            <input type="text" class="form-control" id="closeTime" placeholder="close Timings" required>
					        </div>	
					        <div class="form-group">
					            <label for="location">Location</label>
					            <input type="text" class="form-control" id="location" placeholder="Location" required>
					        </div>
					              <div class="form-group">
					            <label for="Image">Image</label> 
					            
					            <form action="upload.php" method="post" enctype="multipart/form-data">
                                                <input class="form-control" type="file" name="fileToUpload" id="fileToUpload">      
                                </form>
					        </div>	

					    </form>
					</div>					
				</div>
				

					<!-- Modal footer -->
				<div class="modal-footer">
				  <button class="btn btn-info" type="button" onclick="uploadImage_addPharmacy();" data-dismiss="modal">  Save </button>
					<button type="button" class="btn btn-success" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div>
				</div>
			</div>
			
	
	<!-- The Modal -->
				<div class="modal" id="editModalpharmacy">
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

					            <label for="branch">Branch</label>
					            <input type="text" class="form-control" id="ebranch" placeholder="Branch" required>
					        </div>
					        <div class="form-group">
					            <label for="closeTime">Close Timings</label>
					            <input type="text" class="form-control" id="eclosetime" placeholder="CloseTimings" required>
					        </div>
							<div class="form-group">
					            <label for="contact">Contact</label>
					            <input type="text" class="form-control" id="econtact" placeholder="Contact" required>
					        </div>
					        <div class="form-group">
					            <label for="email">Email</label>
					            <input type="text" class="form-control" id="eemail" placeholder="Email" required>
					        </div>
					        <div class="form-group">
					            <label for="location">Location</label>
					            <input type="text" class="form-control" id="elocation" placeholder=" Location" required>
					        </div>		
					           <div class="form-group">
					            <label for="name">Name</label>
					            <input type="text" class="form-control" id="ename" placeholder=" Name" required>
					        </div>	
					           <div class="form-group">
					            <label for="openTime">Open Time</label>
					            <input type="text" class="form-control" id="eopentime" placeholder=" Openingtime" required>
					        </div>	

					               <div class="form-group">
					            <label for="Edit Image">Edit Image:</label>
					            <input type="file" class="form-control" id="efileToUpload" placeholder="insert image" required>
					        </div>			        
					    </form>
					</div>					
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
					<button onclick="editImage();" class="btn btn-primary"  data-dismiss="modal">Save</button>
					<button type="button" class="btn btn-success" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div> 
				</div>






						<!-- The Modal Add branches  -->
				<div class="modal" id="addBranchModal">
					<div class="modal-dialog">
					<div class="modal-content">

					<!-- Modal Header -->
					<div class="modal-header">
					<h4 class="modal-title">Fillup form for Branch Details</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>

					<!-- Modal body -->
					<div class="modal-body" , align="left">
					 <div class="bs-example"> 
					    <form action="/examples/actions/confirmation.php" method="post">
					    	<div class="form-group">
					         <input type="text" id="branchKeyPharmacy">

	            			<label for="branchId">Branch ID</label>
					            <input type="text" class="form-control" id="branchId" placeholder="Branch ID" required>
					        </div>
					        <div class="form-group">
					            <label for="location">LOCATION</label>
					            <input type="email" class="form-control" id="location" placeholder="LOCATION" required>
					        </div>
							<div class="form-group">
					            <label for="phone">PHONE NO.</label>
					            <input type="text" class="form-control" id="phone" placeholder="PHONE" required>
					        </div>
					        <div class="form-group">
					            <label for="description">DESCRIPTION</label>
					            <input type="text" class="form-control" id="description" placeholder="DESCRIPTION" required>
					        </div>

					    </form>
					</div>					
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
					<button onclick="addBranch();" class="btn btn-primary" data-dismiss="modal">Save</button>
					<button type="button" class="btn btn-success" data-dismiss="modal" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div> 
				</div>









		</div>
		       </div><br>
		                          <div class="material-datatables">
		                            <div class="table-responsive">
		                              <table width="100%" class="table table-striped table-no-bordered table-hover dataTable dtr-inline"  role="grid" aria-describedby="datatables_info" style="width: 100%;" cellspacing="0" id="pharmacyTable">
	                                        <thead>
                                                <tr class="bg-info text-white">
                                                  <th>Sr No.</th>
                                                  <th>Name </th>
                                                  <th>Branch </th>
                                                  <th>Email</th>
                                                  <th>Contact</th>
                                                  <th>Open Time</th>
                                                  <th>Close Time</th>
                                                  <th>Location </th>z
                                                   <th>Image</th>
                                                  <th>Edit</th>
                                                  <th>Delete</th>
                                                  <th>Add Branch</th>
                                                  <th>Total Branches</th>
                                                </tr>
	                                        </thead>
	                                        <tbody id="pharmacyTableBody">  
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
		<script src="../JSControllers/pharmacyController.js"></script>

	</body>
</html>