jQuery(document).ready(function($) {

	$(window).bind("load resize", function() {
		var topOffset = 191;

		var height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
		height = height - topOffset;

		$(".ufps-container.principal").css("min-height", height + "px");
	})
	
});


$(document).ready(function() {

	$('.dataTable tfoot th').each( function () {
		var title = $(this).text();
		if(title!='Acción'){
			$(this).html( '<input type="text" class="dataTable_search form-control control-label" placeholder="Buscar en '+title+'" />' );
		}else{
			$(this).html('');
		}
	} );

	var table = $('.dataTable').DataTable({
		"language":{
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
		}

	});

	table.columns().every( function () {
		var that = this;

		$( 'input.dataTable_search', this.footer() ).on( 'keyup change', function () {
			if ( that.search() !== this.value ) {
				that
				.search( this.value )
				.draw();
			}
		} );
	} );
} );

function selecte (obj) {
    var options='';
    $.each(obj, function(key, item) {
        var titulo ='';
        if(item.descripcion){
            titulo ='title="'+item.descripcion+'"';
        }
        options+='<option '+titulo+' value="'+item.id+'">'+item.nombre+'</option>'
    });
    return options;
}