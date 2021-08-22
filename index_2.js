window.onload = function() {

    if(typeof localStorage.getItem("min") !== 'undefined' && typeof localStorage.getItem("sec") !== 'undefined' && localStorage.getItem("min")!= null && localStorage.getItem("sec")!= null ){
        var min = localStorage.getItem("min");
        var sec = localStorage.getItem("sec");
    }
    else {
       console.log("c2");
       var min = "0"+2 ; 
       var sec = "0"+0;
    }
    var time;

    setInterval(function()
    {

        localStorage.setItem("min", min);
        localStorage.setItem("sec", sec);
        time= min +" : "+ sec;
        document.getElementById("timer").innerHTML = time ;
        if(sec == 00)
        {
            if(min !=0)
            {
                min--;
                sec=59;
                if(min < 10)
                {
                    min="0"+min;
                }
            }
        }
        else
        {
            sec--;
            if(sec < 10)
            {
                sec="0"+sec;
            }
        }
    },1000);
}
