var school = document.querySelector(".school");
var truck = document.querySelector(".truckDiv");
var george = document.querySelector(".georgeDiv");
var tank = document.querySelector(".taketank");
// var carDoor = new Audio("./assets/cardoor.mp3")
var truckBed = document.querySelector(".truckBed")
var html=""
var h5Caption = document.querySelector(".captionh5")

for(var i=0;i<14;i++){
    html += `<div class='brickRow'>`
    for(let j=0;j<20;j++){
        html += `<div class='brickCol'></div>`
    }
    html += `</div>`
}


school.innerHTML = html;
var volumeFx = false;


function driveTruck(){
    if(!volumeFx){
        volumeFx = true;
        showVolume();
        raiseVolume();
    }
    let left = parseInt(window.getComputedStyle(truck).getPropertyValue("left"));
    let georgeLeft = parseInt(window.getComputedStyle(george).getPropertyValue("left"))

    left+=20
    georgeLeft+=20
    truck.style.left = `${left}px`
    george.style.left = `${georgeLeft}px`
    console.log("driveTruck() fired")
    console.log(georgeLeft)
    if(georgeLeft < 360){
    setTimeout(driveTruck,250)
    }
}

 driveTruck()

let hasTurned = false;

function dropTank(){
    console.log("droptank")

    let georgeLeft = parseInt(window.getComputedStyle(george).getPropertyValue("left"))
    let tankLeft = parseInt(window.getComputedStyle(tank).getPropertyValue("left"))

    if(!hasTurned){
        console.log('hasTurned')
        george.style.transform=`rotateY(180deg)`
        hasTurned = true;
        tankLeft-= 30;
     
    }
    georgeLeft -= 4;
    tankLeft -= 1

    george.style.left=`${georgeLeft}px`
    tank.style.left=`${tankLeft}px`

    if(georgeLeft >= -10){
    setTimeout(dropTank,500)
    }
    else{
        tank.style.transform='scale(1.3)'
        georgeLeave()
    }

    console.log(georgeLeft)



  
}
 
 //    dropTank()


 function georgeLeave(){
    if(hasTurned){
        console.log('hasTurned Around')
        george.style.transform=`rotateY(360deg)`
        hasTurned = false;
    }


    let georgeLeft = parseInt(window.getComputedStyle(george).getPropertyValue("left"))

    georgeLeft += 25;

    george.style.left=`${georgeLeft}px`

    console.log(georgeLeft)

    if(georgeLeft < 140){
        setTimeout(georgeLeave,250)
    }
    else{
        returnToCar()
    }

 }


 function returnToCar(){
     if(!hasTurned){
         hasTurned = true
        george.style.transform=`rotateY(200deg)`
        let georgeTop = parseInt(window.getComputedStyle(george).getPropertyValue("top"))
        georgeTop -= 50
        george.style.top =`${georgeTop}px`
        setTimeout(returnToCar,1000)
     }
     else{
        let georgeLeft = parseInt(window.getComputedStyle(george).getPropertyValue("left"))
        georgeLeft -= 60
        george.style.left =`${georgeLeft}px`
        george.style.zIndex=2;
        setTimeout(()=>driveTruck(),1500);
     }

 }



var volumeBars = document.querySelectorAll(".volume");
var volumeCounter = 0;



function showVolume(){
  document.querySelector(".volumeDiv").style.display='block'
}

 function raiseVolume(){
    
        volumeBars[volumeCounter].style.background='green'

        if(volumeCounter < volumeBars.length-1){
            volumeCounter++
            setTimeout(raiseVolume,200)
        }
        else{
            showCaption()
        }
 }


 function showCaption(){
        h5Caption.innerHTML = "god damnit boy!!"

        setTimeout(()=>{
            h5Caption.innerHTML = ""
            lowerVolume()

        },2000)

 }


 function lowerVolume(){
    
    volumeBars[volumeCounter].style.background='black'

    if(volumeCounter > 0){
        volumeCounter--
        setTimeout(lowerVolume,100)
    }
    else{
        console.log("all fnctions have fired!")
    }
}



