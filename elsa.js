$('input[type="checkbox"]').on('change', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
    if (this.id == "goihoc1namcheckbox") {
        $("#gia1nam").css("display","block");
        $("#giatrondoi").css("display","none");
    }
    if (this.id == "goihoctrondoicheckbox") {
        $("#gia1nam").css("display","none");
        $("#giatrondoi").css("display","block");
    }
    if ($('#goihoc1namcheckbox').is(':checked') == false) {
        $("#gia1nam").css("display","none");
    }
    if ($('#goihoctrondoicheckbox').is(':checked') == false) {
        $("#giatrondoi").css("display","none");
    }
 });

  $( "#guidangkybutton" ).click(function() {
    guidangky();
  });
function guidangky() {
    console.log("abc");
    if ($('#goihoc1namcheckbox').is(':checked') || $('#goihoctrondoicheckbox').is(':checked')) {
        window.alert("Đăng ký thành công !")
    }
    else {
        window.alert("Đăng ký thất bại ! Xin kiểm tra lại thông tin")
    }
    
}



