<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>TemplateWatchVKib</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="js/TemplateWatchVKib.js"></script>
	<script>
		$(function(){
			$("#TemplateWatch").TemplateWatchVKib({
				imgSRC	:'maket.png',
				width 	:'1440',
				height 	:'1931',
				zIndex 	:'500'
			});
		});
	</script>
</head>
<body>

<div id="TemplateWatch"></div>

<div style="height: 250px;background-color: red;z-index: 200;position: relative;"></div>
<div style="height: 300px;background-color: blue;"></div>
<div style="height: 300px;background-color: green;z-index: 400;position: relative;"></div>
</body>
</html>