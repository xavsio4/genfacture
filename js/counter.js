// jQuery to get the current count on page load
$.ajax({
	url: "counter/readcount.php",
	success: function(data) {
		var data = JSON.stringify(data, null, 4);
		var data = $.parseJSON(data);
 
		$('#hitCounter1').html(data.count);
		$('#hitCounter2').html(data.count);
	}
});