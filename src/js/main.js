$(function () {	
	
	// TOOLTIP
 	$('[data-toggle="tooltip"]').tooltip();   
		
	
	// BAGGAGE__BUTTON	
	$(`.baggage-info__wrap .btn-icon`).on("click", function(e) {
		e.preventDefault();
				
		let costDef = $('.baggage-info__default .baggage-info__cost').html(),
			costAdd = $('.baggage-info__additional .baggage-info__cost').html(),
			reg = /\D+/ig,
			def = costDef.replace(reg, ''),
			add = costAdd.replace(reg, '');
		
		if ( costDef === 'Free' ) {
			def = 0;
			costDef = +def + +add;
		} else { costDef = +def + +add; }

		$('.baggage-info__default .baggage-info__cost').html(`${costDef}€`);	
    });
	// END --> BAGGAGE__BUTTON	
		
});