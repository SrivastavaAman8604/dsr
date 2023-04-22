<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Confirm a counselling session at a convenient date and time.">
    <title>Calendar :: Divine Soul Resonance </title>
    
    <?php
	include './common/headcss.php';
    ?>
</head>
<body>
    <!-- pre loader start -->
    <?php
	include './common/preeLoader.php';
    ?>
    <!-- pre loader end -->
    <!-- main wrapper start -->
    <div class="pa-main-wrapper">
        <!-- main header start -->
        <?php
	    include './common/header.php';
	?>
        <!-- main header end -->
        <div class="pa-breadcrumb">
            <div class="container">
                <div class="pa-breadcrumb-box1 dsr-box">
		    <div class="row justify-content-md-center">
			<div class="col-lg-12 pb-25">
			    <h1 class="text-center">Calendar</h1>
			</div>
			<div class="col-lg-12">
			    <div class="blockquote-box1">
				<div class="row d-flex flex-wrap align-items-center">
				    <div class="col-lg-12">
					<div class="calendly-inline-widget" 
					    style="min-width:320px;height:750px;" data-auto-load="false">
					    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
					    <script>
					    Calendly.initInlineWidget({
					    url: 'https://calendly.com/divinesoulresonance'
					    });
					    </script>
					</div>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
                </div>
            </div>
        </div>
	<!--<div class="pa-services spacer-top pt-40">
            <div class="container">
                <div class="row">
		    <div class="col-lg-12">
			<div class="row justify-content-md-center">
			    <div class="col-sm-4">
				<div class="pa-product-box quote-box">
				    <div class="pa-product-img">
					<img src="assets/img/messages/8.png" alt="image" class="img-fluid">
				    </div>
				</div>
			    </div>
			    <div class="col-sm-1">

			    </div>
			    <div class="col-sm-4">
				<div class="pa-product-box quote-box">
				    <div class="pa-product-img">
					<img src="assets/img/messages/9.png" alt="image" class="img-fluid">
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>
            </div>
        </div>--
        <!-- footer start -->
        <?php
	    include './common/footer-section.php';
	?>
        <!-- footer end -->
        <!-- copyright start -->
        <?php
	    include './common/footer-copyright-section.php';
	?>
        <!-- copyright end -->
        <!-- login start -->
    </div>
    <!-- main wrapper end -->
    <?php
	include './common/footerjs.php';
    ?>
</body>
</html>