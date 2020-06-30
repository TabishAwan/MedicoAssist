<!DOCTYPE html>
<title>labs</title>
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
                      				<h4 class="card-title">List of Labs</h4>
                    			</div>
		                        <div class="card-body">
		                          <div class="toolbar">
		                            <div class="main-content" id="panel">
			
			<div class="container">
				<!-- Button to Open the Modal -->
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" style="float: right;">
				Add up
				</button>

				<!-- The Modal simple  -->
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
					    <form action="/examples/actions/confirmation.php" method="post">
					    	<div class="form-group">
					    		
					            <label for="name">Name</label>
					            <input type="text" class="form-control" id="name" placeholder="Password" required>
					        </div>
					        <div class="form-group">
					            <label for="inputEmail">Email</label>
					            <input type="email" class="form-control" id="inputEmail" placeholder="Email" required>
					        </div>
							<div class="form-group">
					            <label for="inputPassword">Contact</label>
					            <input type="text" class="form-control" id="inputContact" placeholder="Contact" required>
					        </div>
					        <div class="form-group">
					            <label for="inputPassword">Open timings</label>
					            <input type="text" class="form-control" id="opentimings" placeholder="openingtime" required>
					        </div>
					        <div class="form-group">
					            <label for="inputPassword">close timings</label>
					            <input type="text" class="form-control" id="closetimings" placeholder="close timings" required>
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
				      <button class="btn btn-info" type="button" onclick="uploadImage_addLab();" data-dismiss="modal">  Save </button>
					<button type="button" class="btn btn-success" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div> 
				</div>
			</div>

	<!-- The Modal editor  -->
				<div class="modal" id="editModal">
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

					            <label for="name">Name</label>
					            <input type="text" class="form-control" id="ename" placeholder="Password" required>
					        </div>
					        <div class="form-group">
					            <label for="inputEmail">Email</label>
					            <input type="email" class="form-control" id="einputEmail" placeholder="Email" required>
					        </div>
							<div class="form-group">
					            <label for="inputPassword">Contact</label>
					            <input type="text" class="form-control" id="einputContact" placeholder="Contact" required>
					        </div>
					        <div class="form-group">
					            <label for="inputPassword">Open timings</label>
					            <input type="text" class="form-control" id="eopentimings" placeholder="openingtime" required>
					        </div>
					        <div class="form-group">
					            <label for="inputPassword">close timings</label>
					            <input type="text" class="form-control" id="eclosetimings" placeholder="close timings" required>
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
					<button onclick="editImage();" class="btn btn-primary" data-dismiss="modal">Save</button>
					<button type="button" class="btn btn-success" data-dismiss="modal" data-dismiss="modal">Discard</button>
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
					         <input type="text" id="branchKey">

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
		                              <table width="100%" class="table table-striped table-no-bordered table-hover dataTable dtr-inline"  role="grid" aria-describedby="datatables_info" style="width: 100%;" cellspacing="0" id="labsTable">
	                                        <thead>
                                                <tr class="bg-info text-white">
                                                  <th>Sr No.</th>
                                                  <th>Name </th>
                                                  <th>Email</th>
                                                  <th>Contact</th>
                                                  <th>Open Time</th>
                                                  <th>Close Time</th>
                                                  <th>Branches</th>
                                                  <th>Image</th>
                                                  <th>Edit</th>
                                                  <th>Delete</th>
                                                  <th>Add Branch</th>
                                                </tr>
	                                        </thead>
	                                        <tbody id="labsTableBody">  
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
        <script src="../JSControllers/labController.js"></script>
	</body>
</html>
