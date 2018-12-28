var started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';

function init() {
	canvas = $('#imageView').get(0);
	context = canvas.getContext('2d');
	
	// Auto-adjust canvas size to fit window.
	canvas.width  = window.innerWidth - 75;
	canvas.height = window.innerHeight - 75;
  
	//$('#container').get(0).addEventListener('mousemove', onMouseMove, false);
	
	canvas.addEventListener('click', onClick, false);
	canvas.addEventListener('mousemove', onMouseMove, false);
	// Add events for toolbar buttons.
	$('#red').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#pink').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#fuchsia').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#orange').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#yellow').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#lime').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#green').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#blue').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#purple').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#black').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
	$('#white').get(0).addEventListener('click', function(e) { onColorClick(e.target.id); }, false);
}

function onMouseMove(ev) {
	var x, y;
		
	
	if (ev.layerX >= 0) {
		
		x = ev.layerX - 5;
		y = ev.layerY - 5;
	}
	else if (ev.offsetX >= 0) {
		
		x = ev.offsetX - 5;
		y = ev.offsetY - 5;
	}
	
	if (!started) {
		started = true;

		context.beginPath();
		context.moveTo(x, y);		
	}
	else {
		context.lineTo(x, y);
		context.stroke();
	}
	
	$('#stats').text(x + ', ' + y);
}

function onClick(e) {
	if (stampId.length > 0) {
		context.drawImage($(stampId).get(0), e.pageX - 90, e.pageY - 60, 80, 80);
	}
}

function onColorClick(color) {
	// Start a new path to begin drawing in a new color.
	context.closePath();
	context.beginPath();
	
	// Select the new color.
	context.strokeStyle = color;
	
	// Highlight selected color.
	var borderColor = 'white';
	if (color == 'white' || color == 'yellow') {
		borderColor = 'black';
	}
	
	$('#' + lastColor).css("border", "0px dashed white");
	$('#' + color).css("border", "2px dashed " + borderColor);
	
	// Store color so we can un-highlight it next time around.
	lastColor = color;
}








































































