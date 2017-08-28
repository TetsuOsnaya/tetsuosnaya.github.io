$(document).ready(function () {
   var nombre, apellido, correo, datos,buscar;
   var enviar=$("#enviar");
   var Bbuscar=$("#buscar");
   var Tbuscar=$("#Btexto");

   var entradas;
   var $artContainer = $('.cont');
   var template =
   '<div class="img-g">'+
 			'<a href=":url:">'+
 				'<div class="titulo">'+
 					'<h2>:titulo:</h2>'+
 				'</div>'+
 				'<div class="img-p">'+
 					'<img src=":img:" alt="Adiós París" />'+
 				'</div>'+
 			'</a>'+
 		'</div>';
   function renderArt (ent) {
   		 ent.forEach(function (show) {
   				var article = template
   					.replace(':img:',show.IMG)
   					.replace(':titulo:',show.TIT)
   					.replace(':url:',show.URL);
   				var $article = $(article)
   				$artContainer.append($article);
   			});
   	}


    $("#Mboton").click(function () {
      $(".Hbarra").toggleClass("Hbarra-visible");
    });

    Tbuscar.keypress(function (ev) {

     if (ev.keyCode==13) {
      buscar=$("#Btexto").val();
      if ( buscar !="" && buscar != " " && buscar!="Buscar")
      {
       datos='buscar='+buscar+'&proceso=3';
       $.ajax({
             type: "POST",
             data: datos,
             url:"proceso0.php",
             success: function (res,textStatus) {
               entradas=JSON.parse(res);
               $('.articulo').remove();
               $artContainer.find('.img-g').remove();
               $artContainer.find('.buscar').remove();
               $(".Hbarra").toggleClass("Hbarra-visible");
               $artContainer.append('<div class="buscar"><h2>Resultados de buscar:"'+ buscar+'"</h2></div>');
               renderArt(entradas);
             },
             error: function (ev) {
                 alert("Error");
             }
         });

      }else {
       alert("No hay nada por buscar");
      }

     }

    });


    Bbuscar.click(function () {
     buscar=$("#Btexto").val();
     if ( buscar !="" && buscar != " " )
     {

      datos='buscar='+buscar+'&proceso=3';
      $.ajax({
            type: "POST",
            data: datos,
            url:"proceso0.php",
            success: function (res,textStatus) {
              entradas=JSON.parse(res);
              $('.articulo').remove();
              $artContainer.find('.img-g').remove();
              $artContainer.find('.buscar').remove();
              $(".Hbarra").toggleClass("Hbarra-visible");
              $artContainer.append('<div class="buscar"><h2>Resultados de buscar:"'+ buscar+'"</h2></div>');
              renderArt(entradas);
            },
            error: function (ev) {
                alert("Error");
            }
        });

     }else {
      alert("No hay nada por buscar");
     }
    });


    enviar.click(function () {

     nombre=$("#nombre").val();
     correo=$("#correo").val();
     enviar=$("#enviar");

     if(nombre== ""||nombre==" "||nombre=="Nombre")
     {
      alert("No tienes nombre?");
      $("#nombre").focus();
     }
     else if (correo=="" || correo==" " || correo=="contacto@backstagecltv.com") {
      alert("Tu correo no está permitido");
      $("#correo").focus();
     }else {
      datos='nombre='+nombre+'&correo='+correo+'&proceso=1';

      $.ajax({
            type: "POST",
            data: datos,
            url:"proceso0.php",
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
     }

    });



});
