function loadHeader(){
	$("#header").append(
		'<title>Versus War - Dashboard</title>' +
		'<link rel="shortcut icon" href="../assets/login/images/default.png">' +
		'<link rel="icon" type="image/png" href="../assets/login/images/default.png"/>' +   
		'<link rel="stylesheet" type="text/css" href="../assets/login/vendor/bootstrap/css/bootstrap.min.css">' +
		'<link rel="stylesheet" type="text/css" href="../assets/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">'+
		'<link rel="stylesheet" type="text/css" href="../assets/login/vendor/animate/animate.css">'+
		'<link rel="stylesheet" type="text/css" href="../assets/login/vendor/css-hamburgers/hamburgers.min.css">'+
		'<link rel="stylesheet" type="text/css" href="../assets/login/vendor/select2/select2.min.css">'+
		'<link rel="stylesheet" type="text/css" href="../assets/login/css/util.css">'+
		'<link rel="stylesheet" type="text/css" href="../assets/login/css/main.css">'+
		'<link href="../assets/plugins/morris/morris.css" rel="stylesheet">'+
		'<link href="../assets/plugins/alertify/css/alertify.css" rel="stylesheet" type="text/css">'+
		'<link href="../assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">'+
		'<link href="../assets/css/icons.css" rel="stylesheet" type="text/css">'+
		'<link href="../assets/css/style.css" rel="stylesheet" type="text/css">'+
		'<link href="../assets/plugins/prism/prism.css" rel="stylesheet" type="text/css">'+
		'<link href="../assets/plugins/ion-rangeslider/ion.rangeSlider.css" rel="stylesheet" type="text/css"/>'+
		'<link href="../assets/plugins/ion-rangeslider/ion.rangeSlider.skinModern.css" rel="stylesheet" type="text/css"/>'+
		'<link href="../assets/plugins/bootstrap-rating/bootstrap-rating.css" rel="stylesheet" type="text/css">'+
		'<link href="../assets/plugins/fullcalendar/css/fullcalendar.min.css" rel="stylesheet" />'+
		'<link href="../assets/plugins/c3/c3.min.css" rel="stylesheet" type="text/css"  />'+
		'<link rel="stylesheet" href="../assets/plugins/chartist/css/chartist.min.css">'+
		'<link href="../assets/plugins/timepicker/tempusdominus-bootstrap-4.css" rel="stylesheet" />'+
		'<link href="../assets/plugins/timepicker/bootstrap-material-datetimepicker.css" rel="stylesheet">'+
		'<link href="../assets/plugins/clockpicker/jquery-clockpicker.min.css" rel="stylesheet" />'+
		'<link href="../assets/plugins/colorpicker/asColorPicker.min.css" rel="stylesheet" type="text/css" />'+
		'<link href="../assets/plugins/select2/select2.min.css" rel="stylesheet" type="text/css" />'+
		'<link href="../assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" rel="stylesheet">'+
		'<link href="../assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet">'+
		'<link href="../assets/plugins/bootstrap-touchspin/css/jquery.bootstrap-touchspin.min.css" rel="stylesheet" />'+
		'<link href="../assets/plugins/summernote/summernote-bs4.css" rel="stylesheet" />'+
		'<link href="../assets/plugins/dropzone/dist/dropzone.css" rel="stylesheet" type="text/css">'+
		'<link href="../assets/plugins/dropify/css/dropify.min.css" rel="stylesheet">'+
		'<link type="text/css" href="../assets/plugins/x-editable/css/bootstrap-editable.css" rel="stylesheet">'+
		'<link href="../assets/plugins/jvectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet">'+
		'<link href="../assets/plugins/sweet-alert2/sweetalert2.min.css" rel="stylesheet" type="text/css">'+
		'<link href="../assets/plugins/datatables/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />'+
		'<link href="../assets/plugins/datatables/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />'+
		'<link href="../assets/plugins/datatables/responsive.bootstrap4.min.css" rel="stylesheet" type="text/css" />'+
		'<link href="../assets/plugins/RWD-Table-Patterns/dist/css/rwd-table.min.css" rel="stylesheet" type="text/css" media="screen">'
	);
}

function loadFooter(){
	$('#footer').append('© 2020 Versus War All Right Reserved.');
}

function loadTopMenu(){
	$('#topMenu').append(
		'<nav class="navbar-custom">'+
		'<ul class="list-inline float-right mb-0">'+
		'<li class="list-inline-item dropdown notification-list">'+
		'<a class="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">'+
		'<img src="../assets/login/images/logo.png" alt="user" class="rounded-circle"></a>'+
		'<div class="dropdown-menu dropdown-menu-right profile-dropdown ">'+
		//<!-- item-->
		'<div class="dropdown-item noti-title">'+
		'<h5>Hola, Admin</h5></div>'+
		//<!-- <a class="dropdown-item" href="profile.php"><i class="mdi mdi-account-circle m-r-5 text-muted"></i> Profile</a> -->
		'<a class="dropdown-item" href="" onclick="logOut()"><i class="mdi mdi-logout m-r-5 text-muted"></i> Logout</a>'+
		'</div></li></ul>'+
		'<div class="clearfix"></div>'+
		'</nav>'
	);
}

function loadSideMenu(){
	$('.side-menu').prepend(
		'<button type="button" class="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">'+
		'<i class="ion-close"></i>'+
		'</button>'+
		'<div class="topbar-left">'+
		'<div class="text-center">'+
		'<a href="index.html" class="logo">'+
		'<i class="mdi mdi-assistant">'+
		'</i> Versus War</a>'+
		'</div>'+
		'</div>'+
		'<div class="sidebar-inner slimscrollleft">'+
		'<div id="sidebar-menu">'+
		'<ul>'+
		'<li class="menu-title">Main</li>'+
		'<li>'+
		'<a href="index.html" class="waves-effect">'+
		'<i class="mdi mdi-airplay"></i>'+
		'<span> Dashboard </span>'+
		'</a>'+
		'</li>'+
		'<li class="has_sub">'+
		'<a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-file-image"></i> <span> Category </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>'+
		'<ul class="list-unstyled">'+
		'<li><a href="addcategory.html">Add Category</a></li>'+
		'<li><a href="categories.html">Manage Categories</a></li>'+
		'</ul>'+
		'</li>'+
		'<li class="has_sub">'+
		'<a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-account-multiple"></i> <span> Profiles </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>'+
		'<ul class="list-unstyled">'+
		'<li><a href="addprofile.html">Add Profile</a></li>'+
		'<li><a href="profiles.html">Manage Profiles</a></li>'+
		'</ul>'+
		'</li>'+
		'<li class="has_sub">'+
		'<a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-file-image"></i> <span> Wars </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>'+
		'<ul class="list-unstyled">'+
		'<li><a href="addwar.html">Create War</a></li>'+
		'<li><a href="wars.html">Manage Wars</a></li>'+
		'</ul>'+
		'</li>'+
		'</ul>'+
		'</div>'+
		'<div class="clearfix"></div>'+
		'</div>'
	);
}

function loadScripts(){
	$('#injectScripts').append(
		'<script src="../assets/js/jquery.min.js"></script>'+
		'<script src="../assets/js/popper.min.js"></script>'+
		'<script src="../assets/js/bootstrap.min.js"></script>'+
		'<script src="../assets/js/modernizr.min.js"></script>'+
		'<script src="../assets/js/detect.js"></script>'+
		'<script src="../assets/js/fastclick.js"></script>'+
		'<script src="../assets/js/jquery.slimscroll.js"></script>'+
		'<script src="../assets/js/jquery.blockUI.js"></script>'+
		'<script src="../assets/js/waves.js"></script>'+
		'<script src="../assets/js/jquery.nicescroll.js"></script>'+
		'<script src="../assets/js/jquery.scrollTo.min.js"></script>'+
		'<script src="../assets/plugins/alertify/js/alertify.js"></script>'+
		'<script src="../assets/pages/alertify-init.js"></script>'+
		'<script src="../assets/plugins/datatables/jquery.dataTables.min.js"></script>'+
		'<script src="../assets/plugins/datatables/dataTables.bootstrap4.min.js"></script>'+
		'<script src="../assets/plugins/datatables/dataTables.buttons.min.js"></script>'+
		'<script src="../assets/plugins/datatables/buttons.bootstrap4.min.js"></script>'+
		'<script src="../assets/plugins/datatables/jszip.min.js"></script>'+
		'<script src="../assets/plugins/datatables/pdfmake.min.js"></script>'+
		'<script src="../assets/plugins/datatables/vfs_fonts.js"></script>'+
		'<script src="../assets/plugins/datatables/buttons.html5.min.js"></script>'+
		'<script src="../assets/plugins/datatables/buttons.print.min.js"></script>'+
		'<script src="../assets/plugins/datatables/buttons.colVis.min.js"></script>'+
		'<script src="../assets/pages/datatables.init.js"></script>'+
		'<script src="../assets/plugins/sweet-alert2/sweetalert2.min.js"></script>'+
		'<script src="../assets/pages/sweet-alert.init.js"></script>'+
		'<script src="../assets/plugins/bootstrap-inputmask/bootstrap-inputmask.min.js" type="text/javascript"></script>'+
		'<script src="../assets/plugins/skycons/skycons.min.js"></script>'+
		'<script src="../assets/plugins/raphael/raphael-min.js"></script>'+
		'<script src="../assets/plugins/morris/morris.min.js"></script>'+
		'<script src="../assets/pages/dashborad.js"></script>'+
		'<script src="../assets/js/app.js"></script>'+
		'<script src="../assets/login/vendor/jquery/jquery-3.2.1.min.js"></script>'+
		'<script src="../assets/login/vendor/bootstrap/js/popper.js"></script>'+
		'<script src="../assets/login/vendor/bootstrap/js/bootstrap.min.js"></script>'+
		'<script src="../assets/login/vendor/select2/select2.min.js"></script>'+
		'<script src="../assets/login/vendor/tilt/tilt.jquery.min.js"></script>'+
		'<script src="../assets/login/js/main.js"></script>'+
		'<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>'
	);
}