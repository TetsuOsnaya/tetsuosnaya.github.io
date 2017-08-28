$(document).ready(function () {
   var nombre, apellido, correo, datos;
   var enviar=$("#enviar");

    $("#Mboton").click(function () {
      $(".Hbarra").toggleClass("Hbarra-visible");
    });

    enviar.click(function () {

     nombre=$("#nombre").val();
     correo=$("#correo").val();
     enviar=$("#enviar");

     if(nombre== ""||nombre==" ")
     {
      alert("No tienes nombre?");
      $("#nombre").focus();
     }
     else if (correo=="" || correo==" ") {
      alert("Tu correo no está permitido");
      $("#correo").focus();
     }
     datos='nombre='+nombre+'&correo='+correo;

     $.ajax({
           type: "POST",
           data: datos,
           url:"proceso.php",
           success: function (res) {
               alert(res);
               /*var shows = res.map(function  (el) {
                   return el.show;
               });*/

           },
           error: function (ev) {
               alert("Error");
           }
       });
   });
});
