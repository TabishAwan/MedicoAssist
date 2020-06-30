<!DOCTYPE html>
<title>reservationfoodfun</title>
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
                      				<h4 class="card-title">Reservation/Bookus</h4>
                    			</div>
		                        <div class="card-body">
		                          <div class="toolbar">
		                            <div class="main-content" id="panel">
			
			


		</div>

		                          </div><br>
		                          <div class="material-datatables">
		                            <div class="table-responsive">
		                              <table width="100%" class="table table-striped table-no-bordered table-hover dataTable dtr-inline"  role="grid" aria-describedby="datatables_info" style="width: 100%;" cellspacing="0" id="labsTable">
	                                        <thead>
                                                <tr class="bg-info text-white">
                                                  <th>Sr No.</th>
                                                  <th>Date </th>
                                                  <th>Time</th>
                                                  <th>No.Of Persons</th>
                                                  <th>Name for Reservation</th>
                                              
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
	</body>
	     <script src="../JSControllers/bookedus.js"></script>
		<script type="text/javascript">
  jQuery(document).ready(function(){
    displaybooked();
  });
</script>
</html>
