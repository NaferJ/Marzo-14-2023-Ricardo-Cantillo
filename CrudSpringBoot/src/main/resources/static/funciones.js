function eliminar(id){
	swal({
  title: "Esta seguro de Eliminar?",
  text: "Los datos seran eliminados permanentemente!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
	  $.ajax({
		  url:"/eliminar/"+id,
		  success: function(res){
			  console.log(res);
		  }
	  });
    swal("Dato Eliminado!", {
      icon: "success",
    }).then((ok)=>{
		if(ok){
			location.href="/listar";
		}
	});
  } else {
    swal("Your imaginary file is safe!");
  }
});
}