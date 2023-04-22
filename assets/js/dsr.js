/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(window).scroll(function(){
  var sticky = $('.pa-main-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('animated fadeInDown fixed');
  else sticky.removeClass('animated fadeInDown fixed');
});
$(document).ready(function() {   
    $('.bookModalSessionBtn').click(function(){
	var data_session_text = $(this).data('sessiontext');
	$("#session_name").val(data_session_text);
	$('#sessionText').text(data_session_text);
	$('#bookSessionModal').modal('show');
    })
    
    $('.discoveryCallModalBtn').click(function(){
	var data_session_discovery_call_text = $(this).data('calltext');
	$("#discovery_call_name").val(data_session_discovery_call_text);
	$('#discoveryCallModal').modal('show');
    })
    $(document).on('click', '.btn-contact', function(){
        var name = $.trim($("#name").val());
        var email = $.trim($("#email").val());
        var subject = $.trim($("#subject").val());
        var msg = $.trim($("#message").val());
        //$("#loader-gif").show();
        var contactform ='contactform';
        var valid = true;
        if(name == '' || email == '' || IsEmail(email)==false || subject == '')
        {
            if(name == ''){
                valid = false;
                $('#name').addClass('validate-form-input-field');   
            }else{
                 $('#name').removeClass('validate-form-input-field');  
            } 
            if(IsEmail(email)==false)
            {
                valid = false;
                $('#email').addClass('validate-form-input-field'); 
            }
            else
            {
                $('#email').removeClass('validate-form-input-field'); 
            } 
            if(subject == '')
            {
                valid = false;
                $('#subject').addClass('validate-form-input-field'); 
            }
            else
            {
               $('#subject').removeClass('validate-form-input-field'); 
            } 
        }
        else
        {
            $('#subject').removeClass('validate-form-input-field'); 
            $('#message').removeClass('validate-form-input-field'); 
            $('#email').removeClass('validate-form-input-field'); 
            $('#name').removeClass('validate-form-input-field');  
             $("#ajax-loder").show();
            $.ajax({
                url:"common/ajax-page.php",
                type: 'POST',
                data:{name:name,email:email,subject:subject,msg:msg,action:contactform},
                dataType: "text",
                    success: function(data) {
                    if(data==1){ 
                        $("#ajax-loder").hide();
                        $('#contactUsForm').trigger("reset");
			$(".response-message").prepend("<p class='text-success'>Thanks for your Enquiry. Will be in touch with you in 24-48 Hours.</p>");
                        setTimeout(function() {$(".response-message").hide(); }, 5000);
                    }
                    else{
			$(".response-message").prepend("<p class='text-danger'>Mail has been not sent.  Please Try again.</p>");
                        $("#ajax-loder").hide();
                        $('#contactUsForm').trigger("reset");
                        setTimeout(function() {$(".response-message").hide(); }, 5000);
                    }
		},
            });
        }
	return valid;
    });
    /*SESSION SUBMIT MODEL FORM session-submit */
    $(document).on('click', '.session-submit', function(){
	$('.modal-message').empty().append();
        var session_name = $.trim($("#session_name").val());
        var session_enq_name = $.trim($("#session_enq_name").val());
        var session_enq_email = $.trim($("#session_enq_email").val());
        var session_enq_mobile = $.trim($("#session_enq_mobile").val());
        var session_enq_msg = $.trim($("#session_enq_msg").val());
        //$("#loader-gif").show();
        var action ='sessionmodalform';
        var valid = true;
        if(session_name == '' || session_enq_name == '' || IsEmail(session_enq_email)==false || session_enq_mobile == '')
        {
            if(session_enq_name == ''){
                valid = false;
                $('#session_enq_name').addClass('validate-form-input-field');   
            }else{
                 $('#session_enq_name').removeClass('validate-form-input-field');  
            } 
            if(IsEmail(session_enq_email)==false)
            {
                valid = false;
                $('#session_enq_email').addClass('validate-form-input-field'); 
            }
            else
            {
                $('#session_enq_email').removeClass('validate-form-input-field'); 
            } 
            if(session_enq_mobile == '')
            {
                valid = false;
                $('#session_enq_mobile').addClass('validate-form-input-field'); 
            }
            else
            {
               $('#session_enq_mobile').removeClass('validate-form-input-field'); 
            } 
        }
        else
        {
            $('#session_enq_name').removeClass('validate-form-input-field'); 
            $('#session_enq_email').removeClass('validate-form-input-field'); 
            $('#session_enq_mobile').removeClass('validate-form-input-field'); 
            $('#session_enq_msg').removeClass('validate-form-input-field');  
             $("#ajax-loder").show();
            $.ajax({
                url:"common/ajax-page.php",
                type: 'POST',
                data:{session_name:session_name,session_enq_name:session_enq_name,
		    session_enq_email:session_enq_email,session_enq_mobile:session_enq_mobile, 
		    session_enq_msg: session_enq_msg, action:action},
                dataType: "text",
                    success: function(data) {
                    if(data==1){ 
                        $("#ajax-loder").hide();
                        $('#sessionBookForm').trigger("reset");
			$("#modalToDisplayMessageSuccErr").modal("show");
			$(".modal-message").prepend("<h3 class='message-success'>Thank you for reaching out to us!<br> We will get back to you shortly.</h3>");
			setTimeout(function() {$("#modalToDisplayMessageSuccErr").modal("hide"); }, 5000);
			$("#bookSessionModal").modal("hide");
                    }
                    else{
			$("#ajax-loder").hide();
                        $('#sessionBookForm').trigger("reset");
			setTimeout(function() {$("#modalToDisplayMessageSuccErr").modal("hide"); }, 5000);
			$("#modalToDisplayMessageSuccErr").modal("show");
			$(".modal-message").prepend("<h3 class='message-error'>Something went Wrong !<br> Please try again !</h3>");
			$("#bookSessionModal").modal("hide");
                    }
		},
            });
        }
	return valid;
    });
    /*SESSION SUBMIT MODEL FORM */
    /*DISCOVERY CALL SUBMIT BUTTON*/
     $(document).on('click', '.discovery-call-submit', function(){
	 $('.modal-message').empty().append();
        var discovery_call_name = $.trim($("#discovery_call_name").val());
        var discovery_call_enq_name = $.trim($("#discovery_call_enq_name").val());
        var discovery_call_enq_email = $.trim($("#discovery_call_enq_email").val());
        var discovery_call_enq_mobile_no = $.trim($("#discovery_call_enq_mobile_no").val());
        var discovery_call_enq_message = $.trim($("#discovery_call_enq_message").val());
        //$("#loader-gif").show();
        var action ='discoverycallmodalform';
        var valid = true;
        if(discovery_call_enq_name == '' || IsEmail(discovery_call_enq_email)==false || discovery_call_enq_mobile_no == '')
        {
            if(discovery_call_enq_name == ''){
                valid = false;
                $('#discovery_call_enq_name').addClass('validate-form-input-field');   
            }else{
                 $('#discovery_call_enq_name').removeClass('validate-form-input-field');  
            } 
            if(IsEmail(discovery_call_enq_email)==false)
            {
                valid = false;
                $('#discovery_call_enq_email').addClass('validate-form-input-field'); 
            }
            else
            {
                $('#discovery_call_enq_email').removeClass('validate-form-input-field'); 
            } 
            if(discovery_call_enq_mobile_no == '')
            {
                valid = false;
                $('#discovery_call_enq_mobile_no').addClass('validate-form-input-field'); 
            }
            else
            {
               $('#discovery_call_enq_mobile_no').removeClass('validate-form-input-field'); 
            } 
        }
        else
        {
            $('#discovery_call_enq_name').removeClass('validate-form-input-field'); 
            $('#discovery_call_enq_email').removeClass('validate-form-input-field'); 
            $('#discovery_call_enq_mobile_no').removeClass('validate-form-input-field'); 
            $('#discovery_call_enq_message').removeClass('validate-form-input-field');  
             $("#ajax-loder").show();
            $.ajax({
                url:"common/ajax-page.php",
                type: 'POST',
                data:{discovery_call_name:discovery_call_name,discovery_call_enq_name:discovery_call_enq_name,
		    discovery_call_enq_email:discovery_call_enq_email,discovery_call_enq_mobile_no:discovery_call_enq_mobile_no, 
		    discovery_call_enq_message: discovery_call_enq_message, action:action},
		    dataType: "text",
                    success: function(data) {
                    if(data==1){ 
                        $("#ajax-loder").hide();
                        $('#discoveryCallBookForm').trigger("reset");
			$("#modalToDisplayMessageSuccErr").modal("show");
			$(".modal-message").prepend("<h3 class='message-success'>Thank you for reaching out to us!<br> We will get back to you shortly.</h3>");
			setTimeout(function() {$("#modalToDisplayMessageSuccErr").modal("hide"); }, 5000);
			$("#discoveryCallModal").modal("hide");
                    }
                    else{
                        $("#ajax-loder").hide();
                        $('#discoveryCallBookForm').trigger("reset");
			setTimeout(function() {$("#modalToDisplayMessageSuccErr").modal("hide"); }, 5000);
			$("#modalToDisplayMessageSuccErr").modal("show");
			$(".modal-message").prepend("<h3 class='message-error'>Something went Wrong !<br> Please try again !</h3>");
			$("#discoveryCallModal").modal("hide");
                    }
		},
            });
        }
	return valid;
    });
    /*DISCOVERY CALL SUBMIT BUTTON*/
    
    function IsEmail(email)
    {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)){
           return false;
        }else{
           return true;
        }
    }
    
});