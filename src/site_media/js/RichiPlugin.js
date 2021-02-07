(function($){


	jQuery.validar_numeros=function(obj){
		var estado=true;
		var cadena=obj.val();
        if(!cadena.match(/^[0-9]+$/))
            	estado=false;
		return estado;
	}

	jQuery.base64ToBytes=function(base64){
		var binaryString = window.atob(base64);
		var binaryLen = binaryString.length;
		var bytes = new Uint8Array(binaryLen);
		for (var i = 0; i < binaryLen; i++) {
			
			bytes[i] = binaryString.charCodeAt(i);
		}
		return bytes;
	}


	




	jQuery.validar_formulario=function(obj){
		var estado=true;
		
		obj.find('input,date').each(function(){
            if(!$(this).val())
            	estado=false;
          });  

		return estado;
	}



		


  	jQuery.diasEntreFechas=function(fechaInicio,fechaFin){
		
  		var fI = new Date(fechaInicio).getTime();
  		var fF    = new Date(fechaFin).getTime();
  		var diff = fF - fI;
  		var rs=diff/(1000*60*60*24);
        return rs;
    

	}




	jQuery.Http_Request=function(Purl,meto,data){
		var behavior;

          switch(meto)
          {
            case "POST":
            case "PUT":
            case "DELETE":
                $.ajax({async:false,url:Purl,type:meto,dataType:'json',data:data,success: function(response){ behavior=response;},error: function(e){behavior=e;}});
                break;
            case "GET":
                $.ajax({async:false,url:Purl,type:meto,dataType:'json',success: function(response){ behavior=response;},error: function(e){behavior=e;}});
                break;
          }
          return behavior;
    

	}

	jQuery.diasEntreFechas=function(fechaInicio,fechaFin){
		
  		var fI = new Date(fechaInicio).getTime();
  		var fF    = new Date(fechaFin).getTime();
  		var diff = fF - fI;
  		var rs=diff/(1000*60*60*24);
        return rs;
    

	}



	jQuery.complex_table=function(obj){
		var html="<thead><tr>";
		if(obj.length>0){
			var indices=Object.keys(obj[0]);
			$.each(indices, function(i,val) {
				html=html+"<th class='R"+val+" hidden' id='h"+val+"'>"+val+"</th>";
			});

			

			html=html+"<th id='ctrl'>controles</th></tr></thead><tvody>";
			$.each(obj, function(_i,_val) {
				html=html+"<tr>";
				$.each(_val, function(__i,__val) {
					
					html=html+"<td class='R"+__i+" hidden'>"+__val+"</td>";	
				});
				html=html+"<td><a data-accion='editar' class='btn-normal-min' href='"+_val['id']+"'><i class='fa fa-cogs' aria-hidden='true'></i></a><a data-accion='eliminar' class='btn-normal-min' href='"+_val['id']+"'><i class='fa fa-trash' aria-hidden='true'></i></a><a data-accion='imprimir' class='btn-normal-min' href='"+_val['id']+"'><i class='fa fa-print' aria-hidden='true'></i></a></td>";
			});
			html=html+"</tr></tbody>";
			return html;
		}
	}

	//1,7=1 pagina

	jQuery.secuence=function(curr,cont){
		var html="";
		var lim=0;
		
		var entero=parseInt(cont/10);
		var residuo=cont%10;
		if(residuo>0)
			lim=entero+1;
		else
			lim=entero;
		
		
		


		//nuestra logica es de organizar una lista de 5 elementos.
		//los elementos iran desde el curr hasta el curr+4
		//siempre y cuando curr sea > a 5

		var fin=0;
		fin=curr+4;
		if(fin>lim)
		{
			fin=lim;
			curr=fin-4;
		}

		if(lim<5)
		{
			for(i=1;i<=lim;i++){
				html=html+"<a id='K"+i+"'>"+i+"</a>";
			}

		}
		else{
			for(i=curr;i<=fin;i++){
				html=html+"<a id='K"+i+"'>"+i+"</a>";
			}
		}
		

		return html;
		
	}

	jQuery.simplex_table=function(obj){
		var html="<thead><tr>";
		if(obj.length>0){
			var indices=Object.keys(obj[0]);
			$.each(indices, function(i,val) {
				html=html+"<th class='R"+val+" hidden' id='h"+val+"'>"+val+"</th>";
			});

			

			html=html+"</tr></thead><tvody>";
			$.each(obj, function(_i,_val) {
				html=html+"<tr>";
				$.each(_val, function(__i,__val) {
					
					html=html+"<td class='R"+__i+" hidden'>"+__val+"</td>";	
				});
			});
			html=html+"</tr></tbody>";
			return html;
		}
	}

	jQuery.printex_table=function(obj){
		var html="<thead><tr>";
		if(obj.length>0){
			var indices=Object.keys(obj[0]);
			$.each(indices, function(i,val) {
				html=html+"<th class='R"+val+" hidden' id='h"+val+"'>"+val+"</th>";
			});

			

			html=html+"<th id='ctrl'>controles</th></tr></thead><tvody>";
			$.each(obj, function(_i,_val) {
				html=html+"<tr>";
				$.each(_val, function(__i,__val) {
					
					html=html+"<td class='R"+__i+" hidden'>"+__val+"</td>";	
				});
				html=html+"<td><a data-accion='imprimir' class='btn-normal-min' href='"+_val['id']+"'><i class='fa fa-print' aria-hidden='true'></i></a></td>";
				
			});
			html=html+"</tr></tbody>";
			return html;
		}
	}

})(jQuery);