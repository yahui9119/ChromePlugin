///jquery.js
$(document).ready(function() {
$('a[name=btnadd]').click(function(event) {
	/* Act on the event */
	
	$('#divkeyvalue').append($('<div class="input-group "><span class="input-group-addon">key</span><input type="text" class="form-control" placeholder="待提交的参数名"> <span class="input-group-addon">value</span>  <input type="text" class="form-control" placeholder="待提交的参数值"> 	</div>'));
});	

$('a[name=btndel]').click(function(event) {
	/* Act on the event */
	
	$('#divkeyvalue').children(':last').remove();
});	
});
function PhoneList($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}