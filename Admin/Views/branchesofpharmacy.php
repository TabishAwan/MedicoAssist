<!DOCTYPE html>
<title>branchesofpharmacy</title>
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
                      				<h4 class="card-title">Branches Of Pharmacy List</h4>
                    			</div>
		                        <div class="card-body">
		                          <div class="toolbar">
		                          <div class="material-datatables">
		                            <div class="table-responsive">
		                              <table width="100%" class="table table-striped table-no-bordered table-hover dataTable dtr-inline"  role="grid" aria-describedby="datatables_info" style="width: 100%;" cellspacing="0" id="branchesofPharmacyTable">
	                                        <thead>
                                                <tr class="bg-info text-white">
                                                  <th>Sr No.</th>
                                                  <th>Branch Id </th>
                                                  <th>Description</th>
                                                  <th>Location</th>
                                                  <th>Contact</th>
                                                  <th>Edit</th>
                                                  <th>Delete</th>
                                                </tr>
	                                        </thead>
	                                        <tbody id="branchesofpharmacybody">  
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
		<div class="modal" id="editModalPharmacyBranches">
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
					         	<input type="hidden" id="ePharmacyKey">
					         	<input type="hidden" id="ebranchKeyPharmacy">
					            <label for="Branchid">Branch ID</label>
					            <input type="text" class="form-control" id="ebranchid" placeholder="Password" required>
					        </div>
					        <div class="form-group">
					            <label for="Description">Description</label>
					            <input type="email" class="form-control" id="edescription" placeholder="Email" required>
					        </div>
							<div class="form-group">
					            <label for="Location">Location</label>
					            <input type="text" class="form-control" id="elocation" placeholder="Contact" required>
					        </div>
					        <div class="form-group">
					            <label for="Phone">Contact</label>
					            <input type="text" class="form-control" id="ephone" placeholder="openingtime" required>
					        </div>
					   

					    </form>
					</div>					
				</div>
				<!-- Modal footer -->
				<div class="modal-footer">
					<button onclick="saveChangesPharmacyBranches();" class="btn btn-primary" data-dismiss="modal">Save</button>
					<button type="button" class="btn btn-success" data-dismiss="modal" data-dismiss="modal">Discard</button>
				</div>

					</div>
					</div> 
				</div>

		<?php include '../Includes/plugins.php';?>
		<?php include '../Includes/footer.php';?>
		<script src="../JSControllers/pharmacyController.js"></script>
	</div>
	</body>
</html>