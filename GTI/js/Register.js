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


  var company_err = true;
  var contact_err = true;
   
  $("#companyName").keyup(function(){
    companyCheck();
  });

  $("#contactName").keyup(function(){
    contactCheck();
  });

  function companyCheck(){
    var pattern = /^[a-zA-Z]*$/;
    var company_val = $('#companyName').val();
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

    if(pattern.match(company_val) && company_val !==''){
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

    if(pattern.match(contact_val) && contact_val !==''){
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
})