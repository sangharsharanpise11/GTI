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


// Company Details validations

  $(".checkCompanyDes").hide();
  $(".checkCompanyAddress").hide();
  $(".checkCountry").hide();
  $(".checkSector").hide();
  $(".checkSubSector").hide();
  $(".checkTypeSize").hide();
  $(".checkStage").hide();
  $(".checkTurnover").hide();

  var companyDesc_err = true;
  var companyAddress_err = true;
  var country_err = true;
  var sector_err = true;
  var subSector_err = true;
  var typeSize_err = true;
  var stage_err =true;
  var turnOver_err =true;

  $("#companyInfo").keyup(function(){
    companyInfoCheck();
  });

  $("#companyAddress").keyup(function(){
    companyAddressCheck();
  });

  $("#exampleFormControlSelect1").keyup(function(){
    countryCheck();
  });

  $("#exampleFormControlSelect2").keyup(function(){
    sectorCheck();
  });
  $("#exampleFormControlSelect3").keyup(function(){
    subSectorCheck();
  });

  $("#exampleFormControlSelect4").keyup(function(){
    typeSizeCheck();
  });

 

  function companyInfoCheck(){
    var pattern = /^[a-zA-Z. ]{3,3000}$/;
    var companyInfo_val = $('#companyInfo').val();
    if(! pattern.test(companyInfo_val) && companyInfo_val !== ''){
      $('.checkCompanyDes').show();
      $('.checkCompanyDes').html('** contain alphabets only');
      $('.checkCompanyDes').focus();
      $('.checkCompanyDes').css("color","red");
      companyDesc_err = false;
      return false;
    }
    else{
      $('.checkCompanyDes').hide();
    }
    if(companyInfo_val.length == ''){
      $('.checkCompanyDes').show();
      $('.checkCompanyDes').html('** please fill company Description');
      $('.checkCompanyDes').focus();
      $('.checkCompanyDes').css("color","red");
      companyDesc_err = false;
      return false;
    }
    
    else{
      $('.checkCompanyDes').hide();
    }
  }

  function companyAddressCheck(){
    var pattern = /^[a-zA-Z.-]*$/;
    var companyAddress_val = $('#companyAddress').val();
    if(companyAddress_val.length == ''){
      $('.checkCompanyAddress').show();
      $('.checkCompanyAddress').html('** please fill address');
      $('.checkCompanyAddress').focus();
      $('.checkCompanyAddress').css("color","red");
      companyAddress_err = false;
      return false;
    }
    else{
      $('.checkCompanyAddress').hide();
    }

    if(! pattern.test(companyAddress_val) && companyAddress_val !==''){
      $('.checkCompanyAddress').show();
      $('.checkCompanyAddress').html('** contain alphabets only');
      $('.checkCompanyAddress').focus();
      $('.checkCompanyAddress').css("color","red");
      companyAddress_err = false;
      return false;
    }
    else{
      $('.checkCompanyAddress').hide();
    }
  }

  
  $("#next").click(function(){

    const companyInfo_val = $('#companyInfo').val();
    const companyAddress_val = $('#companyAddress').val();
    
     companyDesc_err = true;
     companyAddress_err = true;

     companyInfoCheck();
     companyAddressCheck();
     
     var country=$("#exampleFormControlSelect1");
     var sector=$("#exampleFormControlSelect2");
     var subSector=$("#exampleFormControlSelect3");
     var typeAndSize=$("#exampleFormControlSelect4");
     var productStage=$("#exampleFormControlSelect5");
     var turnOver=$("#exampleFormControlSelect6");

     if(country.val() == -1){
      $('.checkCountry').show();
      $('.checkCountry').html('** please select the country');
      $('.checkCountry').focus();
      $('.checkCountry').css("color","red");
      country_err = false;
      return false;
    }
    else{
      $('.checkCountry').hide();
    }

    if(sector.val() == -1){
      $('.checkSector').show();
      $('.checkSector').html('** please select the sector');
      $('.checkSector').focus();
      $('.checkSector').css("color","red");
      sector_err = false;
      return false;
    }
    else{
      $('.checkSector').hide();
    }
    
    if(subSector.val() == -1){
      $('.checkSubSector').show();
      $('.checkSubSector').html('** please select sub sector');
      $('.checkSubSector').focus();
      $('.checkSubSector').css("color","red");
      subSector_err = false;
      return false;
    }
    else{
      $('.checkSubSector').hide();
    }

    if(typeAndSize.val() == -1){
      $('.checkTypeSize').show();
      $('.checkTypeSize').html('** please select typre and size');
      $('.checkTypeSize').focus();
      $('.checkTypeSize').css("color","red");
      typeSize_err = false;
      return false;
    }
    else{
      $('.checkTypeSize').hide();
    }
    

    if(productStage.val() == -1){
      $('.checkStage').show();
      $('.checkStage').html('** please select stage');
      $('.checkStage').focus();
      $('.checkStage').css("color","red");
      stage_err = false;
      return false;
    }
    else{
      $('.checkStage').hide();
    }

    if(turnOver.val() == -1){
      $('.checkTurnover').show();
      $('.checkTurnover').html('** please select typre and size');
      $('.checkTurnover').focus();
      $('.checkTurnover').css("color","red");
      turnOver_err = false;
      return false;
    }
    else{
      $('.checkTurnover').hide();
    }
     if(companyDesc_err === true && companyAddress_err === true ){
       alert("go to product page ...")
     }
     else{
       alert("please fill the form correctly ...")
     }
  });



// product Details validations

$(".checkProductName").hide();
$(".checkProductDescription").hide();
$(".checkSubSector").hide();
$(".checkSector").hide();

var productDesc_err = true;
var productName_err = true;
var subSector_err = true;
var sector_err = true;


$("#productName").keyup(function(){
  productNameCheck();
});

$("#productdesc").keyup(function(){
  productDescCheck();
});




function productNameCheck(){
  var pattern = /^[a-zA-Z. ]{3,3000}$/;
  var productName_val = $('#productName').val();
  if(! pattern.test(productName_val) && productName_val !== ''){
    $('.checkProductName').show();
    $('.checkProductName').html('** contain alphabets only');
    $('.checkProductName').focus();
    $('.checkProductName').css("color","red");
    companyDesc_err = false;
    return false;
  }
  else{
    $('.checkProductName').hide();
  }
  if(productName_val.length == ''){
    $('.checkProductName').show();
    $('.checkProductName').html('** please fill company Description');
    $('.checkProductName').focus();
    $('.checkProductName').css("color","red");
    companyDesc_err = false;
    return false;
  }
  
  else{
    $('.checkProductName').hide();
  }
}

function   productDescCheck()
{
  var pattern = /^[a-zA-Z.-]*$/;
  var productDesc_val = $('#productDesc').val();
  if(companyAddress_val.length == ''){
    $('.checkProductDescription').show();
    $('.checkProductDescription').html('** please fill address');
    $('.checkProductDescription').focus();
    $('.checkProductDescription').css("color","red");
    productDesc_err = false;
    return false;
  }
  else{
    $('.checkProductDescription').hide();
  }

  if(! pattern.test(productDesc_val) && productDesc_val !==''){
    $('.checkProductDescription').show();
    $('.checkProductDescription').html('** contain alphabets only');
    $('.checkProductDescription').focus();
    $('.checkProductDescription').css("color","red");
    productDesc_err = false;
    return false;
  }
  else{
    $('.checkProductDescription').hide();
  }
}


$("#complete").click(function(){

  const productName = $('#productName').val();
  const productDesc = $('#productDesc').val();
  
   companyDesc_err = true;
   companyAddress_err = true;

   companyInfoCheck();
   companyAddressCheck();
   

   var sector1=$("#exampleFormControlSelect7");
   var subSector1=$("#exampleFormControlSelect8");
 


  if(sector1.val() == -1){
    $('.checkSector').show();
    $('.checkSector').html('** please select the sector');
    $('.checkSector').focus();
    $('.checkSector').css("color","red");
    sector_err = false;
    return false;
  }
  else{
    $('.checkSector').hide();
  }
  
  if(subSector1.val() == -1){
    $('.checkSubSector').show();
    $('.checkSubSector').html('** please select sub sector');
    $('.checkSubSector').focus();
    $('.checkSubSector').css("color","red");
    subSector_err = false;
    return false;
  }
  else{
    $('.checkSubSector').hide();
  }

 
   if(companyDesc_err === true && companyAddress_err === true ){
     alert("completed ...")
   }
   else{
     alert("please fill the form correctly ...")
   }
});




});


