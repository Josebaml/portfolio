//Altura de cada una de las secciones de la página
var ancho = $(window).height()
var miAncho = ancho - 70;
$('.central_box').css('height', miAncho+'px')
$('#hero').css('height', ancho+'px')
//$('#aboutMe , #studies, #experience, #contact').css('minHeight', ancho+'px')

var inicioSeccion = $(document).scrollTop()

var aboutMeSection = ancho - 100;
var experienceSection = ancho + aboutMeSection
var studiesSection = experienceSection + ancho
var contactSection = studiesSection + ancho

if(inicioSeccion < aboutMeSection){
	$('header nav a[href$=#hero]').css({'color': '#273245','transform': 'scale(1.2)'})
} else if (inicioSeccion >= aboutMeSection && inicioSeccion < experienceSection) {
	$('header nav a[href$=#aboutMe]').css({'color': '#273245','transform': 'scale(1.2)'})
} else if (inicioSeccion >= experienceSection && inicioSeccion < studiesSection) {
	$('header nav a[href$=#experience]').css({'color': '#273245','transform': 'scale(1.2)'})
} else if (inicioSeccion >= studiesSection && inicioSeccion < contactSection) {
	$('header nav a[href$=#studies]').css({'color': '#273245','transform': 'scale(1.2)'})
} else if (inicioSeccion >= contactSection) {
	$('header nav a[href$=#contact]').css({'color': '#273245','transform': 'scale(1.2)'})
}

$(window).scroll(function() {
	var inicioScroll = $(document).scrollTop()
	
var aboutMeScroll = ancho - 70;
var experienceScroll = ancho + aboutMeScroll
var studiesScroll = experienceScroll + ancho
var contactScroll = studiesScroll + ancho


if(inicioScroll < aboutMeScroll){
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#hero]').css({'color': '#273245','transform': 'scale(1.2)'})
	
} else if (inicioScroll >= aboutMeScroll && inicioScroll < experienceScroll) {
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#aboutMe]').css({'color': '#273245','transform': 'scale(1.2)'})
	//$( "h2.aboutMeMov" ).addClass( "animaH2" );
	//$( "#aboutMeText" ).addClass( "aboutMeTextMov" );
} else if (inicioScroll >= experienceScroll && inicioScroll < studiesScroll) {
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#experience]').css({'color': '#273245','transform': 'scale(1.2)'})
	//$( "h2.studiesMov" ).addClass( "animaH2" );
} else if (inicioScroll >= studiesScroll && inicioScroll < contactScroll) {
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#studies]').css({'color': '#273245','transform': 'scale(1.2)'})
	//$( "h2.experienceMov" ).addClass( "animaH2" );
} else if (inicioScroll >= contactScroll) {
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	$('header nav a[href$=#contact]').css({'color': '#273245','transform': 'scale(1.2)'})
	//$( "h2.contactMov" ).addClass( "animaH2" );
	$( "#complete" ).addClass( "animaComplete" );
}
})

$("header h1, #subir").click(irArriba)

$("header nav a").click( irAseccion )

$("p.btnAboutMeWhite, p.btnAboutMe").click( irSeccion )

function irAseccion(event)	{
		
	event.preventDefault()
	
	var idSeccion = $(this).attr("href")
	
	var seccion = $(idSeccion)
	
	var distanciasSeccion = seccion.offset() 
	
	var destinoY = distanciasSeccion.top - $("body > header").outerHeight() 
	
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	
	$('header nav a[href$='+idSeccion+']').css({'color': '#273245','transform': 'scale(1.2)'})
	
	$("html,body").stop().animate( { scrollTop: destinoY } , 1000)
	
}

function irArriba(event){
	event.preventDefault()
	
	$('header nav a').css({'color': '#848484','transform': 'scale(1)'})
	
	$('header nav a[href$=#hero]').css({'color': '#273245','transform': 'scale(1.2)'})
	
	$("html,body").stop().animate({ scrollTop: "0" } , 1000)	
}

function irSeccion()	{
	
	var idSeccion = $(this).attr("id")
	
	var seccion = $(idSeccion)
	
	var distanciasSeccion = seccion.offset() 
	
	$('header nav a').css('color', '#848484')
	
	$('header nav a[href$='+idSeccion+']').css('color', '#273245')
	
	var destinoY = distanciasSeccion.top - $("body > header").outerHeight() 
	
	$("html,body").stop().animate( { scrollTop: destinoY } , 1000)
	

	
}