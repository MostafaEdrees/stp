














//change color
function changeBackground() {
     var color = document.getElementById("color").value; 
     document.getElementById("coltext").style.color = color;
 }

 document.getElementById("submitColor").addEventListener("click", changeBackground, false);









//timer


     let send=document.getElementById('send');
     send.addEventListener('click',
   
     function(){
          if(input.value==''){
               alert('Please enter the time and click send')
               }
               else{
                    let timer=document.getElementById('timer');
       
                    timer.style.display = "block";
               }
 
     })

 

function makeTimer() {
     let input=document.getElementById('input');
		var endTime = new Date(input.value);	
			endTime = (Date.parse(endTime) / 1000);
			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);