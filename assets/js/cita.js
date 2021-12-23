$(document).ready(function (){
	$('body').on('click','.modal_editar',function (){
		$('#nro_cita').val($(this).attr('param1'));

	})
});