<!DOCTYPE html>
<html lang="en"> 
    <!-- Include Header Here-->
    <?php include '../Includes/header.php';?>
    <!--End-->
  <body class="">
    <div class="wrapper ">
      <!-- Include SideBar Here-->
      <?php include '../Includes/sideBar.php';?>
      <!--End-->
      
      <div class="main-panel" style="background-image: linear-gradient(#2b7a78, #def2f1);">
        <!-- Include navigation top header here-->
        <?php include '../Includes/topheader.php';?>
        <div class="content">
            <div class="container-fluid">
              <!-- Add Data Here-->             
                  <div class="row">
                        <div class="col-md-12">
                          <div class="card">
                        <div class="card-header card-header-info card-header-icon">
                          <div class="card-icon">
                            <i class="fa fa-edit" style="font-size: 30px"></i>
                          </div>
                          <h4 class="card-title">List of Blogs</h4>
                        </div>
                        <div class="card-body">
                          <div class="toolbar">
                            <div class="text-right" >
                                  <button class="btn btn-info" type="button"  data-toggle="modal" data-target="#AddEditBlogs">Add new</button>
                            </div>
                          </div>
                          <div class="material-datatables">
                            <div class="table-responsive">
                              <table width="100%" class="table table-striped table-no-bordered table-hover dataTable dtr-inline"  role="grid" aria-describedby="datatables_info" style="width: 100%;" cellspacing="0" id="blogsTable">
                                        <thead>
                                                <tr class="bg-info text-white">
                                                  <th>Sr No.</th>
                                                  <th>Title </th>
                                                  <th>Tag</th>
                                                  <th>Discrption</th>
                                                  <th>Status</th>
                                                  <th>Image</th>
                                                  <th>Edit</th>
                                                  <th>Delete</th>
                                                </tr>
                                                <tbody id="blogsTableBody"></tbody>
                                        </thead>
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
      <?php include '../Includes/footer.php';?> 
      </div>
      <!--  Add New Modal-->
        <div class="modal fade" id="AddEditBlogs" tabindex="-1" role="">
            <div class="modal-dialog Blogs" role="document">
                <div class="modal-content">
                    <div class="card card-signup card-plain">
                        <div class="modal-header card-header-info">
                          <h4 class="card-title">Add Blogs</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                              <i class="material-icons">clear</i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="card ">
                                <div class="card-body ">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-2">
                                              <label for="Title"><b>Title</b></label>   
                                            </div>
                                            <div class="col-md-10">
                                              <input type="text" placeholder="Enter Title" id="Title" class="form-control"  required>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                              <label for="Tag"><b>Tag</b></label>      
                                            </div>
                                            <div class="col-md-10">
                                              <input type="text" placeholder="Enter Tag" id="Tag" class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                              <label for="Discrption"><b>Discrption</b></label>           
                                            </div>
                                            <div class="col-md-10">
                                              <input type="text" placeholder=" Discrption" id="Discrption" class="form-control"  required> <br>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                              <label for="Status"><b>Status</b></label> 
                                            </div>
                                            <div class="col-md-10">
                                              <select class="form-control" id="Status">
                                                <option value="True">True</option>
                                                <option value="False">False</option>
                                              </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                              <label for="Image"><b>Image</b></label> 
                                            </div>
                                            <div class="col-md-10">
                                              <form action="upload.php" method="post" enctype="multipart/form-data">
                                                <input class="form-control" type="file" name="fileToUpload" id="fileToUpload">      
                                              </form>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class ="col-md-5">
                                            </div>
                                            <button class="btn btn-info" type="button" onclick="uploadImage_addBlog();" data-dismiss="modal">  Save </button>
                                            <button class="btn btn-info" data-dismiss="modal"> Cancel</button>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end:: Modal-->

        <!--  Edit Modal-->
        <div class="modal fade" id="EditBlogs" tabindex="-1" role="">
            <div class="modal-dialog EditBlogs" role="document">
                <div class="modal-content">
                    <div class="card card-signup card-plain">
                        <div class="modal-header card-header-info">
                          <h4 class="card-title">Edit Blogs</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                              <i class="material-icons">clear</i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="card ">
                                <div class="card-body ">
                                    <div class="container">
                                        <div class="row">
                                           <input type="hidden" id="Key">
                                            <div class="col-md-2">
                                              <label for="eTitle"><b>Title</b></label>  
                                            </div>
                                            <div class="col-md-10">
                                              <input type="text" id="eTitle" class="form-control"  required>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                              <label for="eTag"><b>Tag</b></label>      
                                            </div>
                                            <div class="col-md-10">
                                              <input type="text" id="eTag" class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                              <label for="eDiscrption"><b>Discrption</b></label>           
                                            </div>
                                            <div class="col-md-10">
                                              <input type="text" id="eDiscrption" class="form-control"  required> <br>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                              <label for="eStatus"><b>Status</b></label> 
                                            </div>
                                            <div class="col-md-10">
                                              <select class="form-control" id="eStatus">
                                                <option value="True">True</option>
                                                <option value="False">False</option>
                                              </select><br>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class ="col-md-4">
                                            </div>
                                            <button class="btn btn-info" type="button" onclick="saveChanges();" data-dismiss="modal">  Save Changes</button>
                                            <button class="btn btn-info" data-dismiss="modal"> Discard</button>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end:: Modal-->

        <script src="../Scripts/blogs.js"></script>
  </body>
</html>