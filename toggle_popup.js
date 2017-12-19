function hideDialog() {
    $('.dialog_layout').css("display","none");
}

function showDialog(location){
    console.log("CLICKED!");
    $('.dialog_layout').css("display","block");
    $("#map").attr("src","https://www.google.com/maps/embed/v1/place?key=AIzaSyAECqeD61NgyNm6fU5QoRB1GxCpdUxcYBc&q=" + location);
}