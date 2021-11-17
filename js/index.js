var $ = function (id) {    return document.getElementById(id); };
var counter = 0;
var rand = Math.floor(Math.random() * 9 + 2); //"+ 2" because I want to skip first two divs: title & score;
//onlyOnce will prevent the score to update when user has multiple clicks on a single div
var onlyOnce = Array(9).fill(1);
//Displays the image and updates the score
function display(id){

    var divs = document.getElementById("gameholder").children; 
    // var divs = document.querySelectorAll("div");
    console.log(divs);
    console.log("rand : " + rand + " id : " + id);
    console.log(divs[rand]);

    //Adding yeti class in the divs[rand]
    divs[rand].classList.add("yeti");

    if((rand - 2) == id){
        //$("penguin" + (id+1)).classList.add("yeti-stay");
        console.log($("penguin" + (id+1)).classList);
        if(counter != 8){
            $("clickYeti").play();
            
            setTimeout(() => {
                
                alert("Yaaaarrrr! \n Game Over || Refresh to start over");
                
                window.location.reload();
            }, 100);
        }
        else{
            $("victory").play();
            alert("Congrats, You have won the game");
            window.location.reload();
        }    

    }
    else if(counter == 8){
        $("victory").play();
        alert("Congrats, You have won the game");
        
        window.location.reload();
    }else{
        $("clickPen").play();
    }

//onlyOnce will prevent the score to update when user has multiple clicks on a single div    
    if(onlyOnce[id] != 0)
    ++counter;

    onlyOnce[id] = 0;

    //makes the penguins stay up when clicked and disappear when the yeti is awoken.
    $("penguin" + (id+1)).classList.add(("penguin" + (id+1)) + "-stay");

    
    // $("penguin" + (id+1)).style.cssText = "background-image:url('../images/penguin_"+(id+1) +".png' important!)";
    //console.log($("penguin" + (id+1)).style.cssText);
}
//Displays the score
function updatedScore(){
    $("score").innerHTML = counter;
}

    $("start").play();

    setInterval(updatedScore, 100);

