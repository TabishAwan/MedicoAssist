<!DOCTYPE html>
<title>foodfunMenu</title>
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
                      				<h4 class="card-title">foodfunMenu</h4>
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
					            <input type="text" class="form-control" id="name" placeholder="" required>
					        </div>
					        <div class="form-group">
					            <label for="itemtype">Item_Type</label>
					            <input type="email" class="form-control" id="itemtype" placeholder="" required>
					        </div>
							<div class="form-group">
					            <label for="itemcode">Item_Code</label>
					            <input type="text" class="form-control" id="itemcode" placeholder="" required>
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
					            <input type="text" class="form-control" id="ename" placeholder="" required>
					        </div>
					        <div class="form-group">
					            <label for="eitemtype">Item_Type</label>
					            <input type="email" class="form-control" id="eitemtype" placeholder="" required>
					        </div>
							<div class="form-group">
					            <label for="eitemcode">Item_Code</label>
					            <input type="text" class="form-control" id="eitemcode" placeholder="" required>
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









		</div>

		                          </div><br>
		                          <div class="material-datatables">
		                            <div class="table-responsive">
		                              <table width="100%" class="table table-striped table-no-bordered table-hover dataTable dtr-inline"  role="grid" aria-describedby="datatables_info" style="width: 100%;" cellspacing="0" id="labsTable">
	                                        <thead>
                                                <tr class="bg-info text-white">
                                                  <th>Sr No.</th>
                                                  <th>Name </th>
                                                  <th>Item Type</th>
                                                  <th>Item Code</th>
                                       				 <th>Image</th>
                                                  <th>Edit</th>
                                                  <th>Delete</th>
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

        <script src="../JSControllers/menu.js"></script>
	</body>
</html>
