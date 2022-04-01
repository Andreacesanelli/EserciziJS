
		$('.speciale').css('background-color','blue').css('color','white')	
		$('h4 , .benvenuto').css('background-color','lightblue')
		$('p.benvenuto').append('<span> coda di span al p con class benvenuto</span>')
		$('p.speciale').prepend('<span> aggiunta in testa di span al p con class speciale </span>')
		$('p').before('<h2> h2 iniettato prima dell h3 </h2>')
		$('p').wrapAll("<div class='wrapp'></div>")
		$('<h2>Titolo creato con appendTo agli h1</h2>').appendTo('h1')
		$('#dato1').prop('value','Andrea')
		$('#dato2').prop('value','Cesanelli')

