window.onload=function(){
	var updateHour = function(){
        let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        st,
        dayWeek = date.getDay(),
        hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds(),
        period;

		let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        document.getElementById("dayWeek").innerHTML = week[dayWeek];
        
        let months = ['January', 'February', 'March', 'Aphril', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        if ( day == 1 ){ st = "st";}
        else { if ( day == 2 ){ st = "nd";}
            else { if ( day == 3 ){ st = "rd";}
                else{ st = "th";}
            }
        }


		if (hours >= 12) {
			hours = hours - 12;
			period = 'PM';
		} else {
			period = 'AM';
		}
    
		if (hours == 0 ){
			hours = 12;
		} 
        
		if (minutes < 10){ minutes = "0" + minutes; }
		if (seconds < 10){ seconds = "0" + seconds; }

        document.getElementById("day").innerHTML = day+" "+st; 
        document.getElementById("month").innerHTML = months[month]; 
        document.getElementById("year").innerHTML = year; 
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes; 
        document.getElementById("seconds").innerHTML = seconds; 
        document.getElementById("period").innerHTML = period; 
	};
    

	updateHour();
	let range = setInterval(updateHour, 1000);

       
}