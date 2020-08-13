function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

$(".box").on("focusin",function(){
  $(this).parent().find("label").addClass("active");
})

$(".box").on("focusout",function(){
  if(!this.value){
    $(this).parent().find("label").removeClass("active");
  }
})

// Validations For Personal Details

$(document).ready(function(){
  $(".checkCompanyName").hide();
  $(".checkContactName").hide();
  $(".checkEmail").hide();
  $(".checkPhone").hide();
  $(".checkReferenceName").hide();
  $(".checkReferenceNumber").hide();
  
  var company_err = true;
  var contact_err = true;
  var email_err = true;
  var phone_err = true;
  var referenceName_err = true;
  var referenceNumber_err = true;

  $("#companyName").keyup(function(){
    companyCheck();
  });

  $("#contactName").keyup(function(){
    contactCheck();
  });

  $("#email").keyup(function(){
    emailCheck();
  });

  $("#phone").keyup(function(){
    phoneCheck();
  });
  $("#referenceName").keyup(function(){
    referenceNameCheck();
  });

  $("#referenceNumber").keyup(function(){
    referenceNumberCheck();
  });

  function companyCheck(){
    var pattern = /^[a-zA-Z. ]{3,30}$/;
    var company_val = $('#companyName').val();
    if(! pattern.test(company_val) && company_val !== ''){
      $('.checkCompanyName').show();
      $('.checkCompanyName').html('** name can contain alphabets only');
      $('.checkCompanyName').focus();
      $('.checkCompanyName').css("color","red");
      company_err = false;
      return false;
    }
    else{
      $('.checkCompanyName').hide();
    }
    if(company_val.length == ''){
      $('.checkCompanyName').show();
      $('.checkCompanyName').html('** please fill company name');
      $('.checkCompanyName').focus();
      $('.checkCompanyName').css("color","red");
      company_err = false;
      return false;
    }
    
    else{
      $('.checkCompanyName').hide();
    }
  }

  function contactCheck(){
    var pattern = /^[a-zA-Z]*$/;
    var contact_val = $('#contactName').val();
    if(contact_val.length == ''){
      $('.checkContactName').show();
      $('.checkContactName').html('** please fill contact name');
      $('.checkContactName').focus();
      $('.checkContactName').css("color","red");
      contact_err = false;
      return false;
    }
    else{
      $('.checkContactName').hide();
    }

    if(! pattern.test(contact_val) && contact_val !==''){
      $('.checkContactName').show();
      $('.checkContactName').html('** name can contain alphabets only');
      $('.checkContactName').focus();
      $('.checkContactName').css("color","red");
      contact_err = false;
      return false;
    }
    else{
      $('.checkContactName').hide();
    }
  }

  function emailCheck(){
    var pattern = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var email_val = $('#email').val();
    if(email_val.length == ''){
      $('.checkEmail').show();
      $('.checkEmail').html('** please fill  email');
      $('.checkEmail').focus();
      $('.checkEmail').css("color","red");
      email_err = false;
      return false;
    }
    else{
      $('.checkEmail').hide();
    }

    if( ! pattern.test(email_val) && email_val !== ''){
      $('.checkEmail').show();
      $('.checkEmail').html('** invalid email');
      $('.checkEmail').focus();
      $('.checkEmail').css("color","red");
      email_err = false;
      return false;
    }
    else{
      $('.checkEmail').hide();
    }
  }

  function referenceNameCheck(){
    var pattern = /^[a-zA-Z]*$/;
    var refName_val = $('#referenceName').val();
    if(refName_val.length == ''){
      $('.checkReferenceName').show();
      $('.checkReferenceName').html('** please fill contact name');
      $('.checkReferenceName').focus();
      $('.checkReferenceName').css("color","red");
      referenceName_err = false;
      return false;
    }
    else{
      $('.checkReferenceName').hide();
    }

    if(! pattern.test(refName_val) && refName_val !==''){
      $('.checkReferenceName').show();
      $('.checkReferenceName').html('** name can contain alphabets only');
      $('.checkReferenceName').focus();
      $('.checkReferenceName').css("color","red");
      referenceName_err = false;
      return false;
    }
    else{
      $('.checkReferenceName').hide();
    }
  }

  function referenceNumberCheck(){
    var pattern = /^[0-9]*$/;
    var refNumber_val = $('#referenceNumber').val();
    if(refNumber_val.length == ''){
      $('.checkReferenceNumber').show();
      $('.checkReferenceNumber').html('** please fill reference number');
      $('.checkReferenceNumber').focus();
      $('.checkReferenceNumber').css("color","red");
      referenceNumber_err = false;
      return false;
    }
    else{
      $('.checkReferenceNumber').hide();
    }

    if(! pattern.test(refNumber_val) && refNumber_val !==''){
      $('.checkReferenceNumber').show();
      $('.checkReferenceNumber').html('** name contain number only');
      $('.checkReferenceNumber').focus();
      $('.checkReferenceNumber').css("color","red");
      referenceNumber_err = false;
      return false;
    }
    else{
      $('.checkReferenceNumber').hide();
    }
  }

  function phoneCheck(){
    var pattern = /^[789][0-9]{9}$/;
    var phone_val = $('#phone').val();
    if(phone_val.length == ''){
      $('.checkPhone').show();
      $('.checkPhone').html('** please fill phone');
      $('.checkPhone').focus();
      $('.checkPhone').css("color","red");
      phone_err = false;
      return false;
    }
    else{
      $('.checkPhone').hide();
    }

    if(! pattern.test(phone_val) && phone_val !==''){
      $('.checkPhone').show();
      $('.checkPhone').html('** enter mobile number');
      $('.checkPhone').focus();
      $('.checkPhone').css("color","red");
      phone_err = false;
      return false;
    }
    else{
      $('.checkPhone').hide();
    }
  }

  $("#register").click(function(){
    const phone_val = $('#phone').val();
    const refNumber_val = $('#referenceNumber').val();
    const refName_val = $('#referenceName').val();
    const contact_val = $('#contactName').val();
    const company_val = $('#companyName').val();
    const email_val = $('#email').val();

     company_err = true;
     contact_err = true;
     email_err = true;
     phone_err = true;
     referenceName_err = true;
     referenceNumber_err = true;

     companyCheck();
     contactCheck();
     phoneCheck();
     emailCheck();
     referenceNameCheck();
     referenceNameCheck();

     if(company_err === true && contact_err === true &&  email_err === true  && phone_err === true && referenceName_err === true && referenceNumber_err === true){
       alert("registration Successfull ...")
     }
     else{
       alert("please fill the form correctly ...")
     }
  });
});


