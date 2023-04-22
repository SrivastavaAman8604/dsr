<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="We're here to help - get in touch.">
    <title>Contact Us :: Divine Soul Resonance  </title>
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
        <div class="pa-breadcrumb spacer-bottom">
            <div class="container">
                <div class="pa-breadcrumb-box1 dsr-box">
		    <div class="row justify-content-md-center wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.5s" style="visibility: visible; animation-duration: 2s; animation-delay: 0.5s; animation-name: fadeInUp;">
			<div class="col-lg-12 pb-25">
			    <h1 class="text-center">Contact us</h1>
			</div>
			<div class="col-lg-8">
			    <div class="pa-contact-form">
				<div class="response-message"></div>
				<form id="contactUsForm">
				    <input type="text" id="name" placeholder="Enter your name.." class="dsr-input">
				    <input type="text" id="email" placeholder="Enter your email.."class="dsr-input">
				    <input type="text" id="subject" placeholder="Enter your subject.." class="dsr-input">
				    <textarea id="message" placeholder="Message here" name="message.." class="dsr-input"></textarea>
				    <button type="button" class="pa-btn submitForm btn-contact">submit</button>
				</form>
			    </div>
			</div>
			<div class="col-lg-4">
			    <div class="pa-contact-form">
					<img src="assets/images\archana-other-images/archana-contact.jpeg" class="img-fluid border-radius" alt="Contact us archana">
				</div>
		    </div>
                </div>
            </div>
        </div>
		</div>
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