// Rover Object Goes Here
// ======================
let rover = { 
    x: 0,
     y: 0,
    direction: "N",
    travelLog: []

  
}



// ======================
function turnLeft(rover){
    console.log("turnLeft was called!");
    
    switch (rover.direction) {
      case "N":
        rover.direction="W"
        break;
      case "E":
        rover.direction= "N"
        break;
        case "S":
        rover.direction= "E"
        break;
        case "W":
        rover.direction= "S"
        break;
      }

  }
  
  function turnRight(rover){
    console.log("turnRight was called!");
    switch (rover.direction) {
        case "N":
          rover.direction="E"
          break;
        case "E":
          rover.direction= "S"
          break;
          case "S":
          rover.direction= "W"
          break;
          case "W":
          rover.direction= "N"
          break;
        }
  }
  
  function moveForward(rover){
    console.log("moveForward was called")
    switch (rover.direction) {
        case "N":
          rover.y--
          break;
        case "E":
          rover.x++
          break;
          case "S":
          rover.y++
          break;
          case "W":
          rover.x--
          break;
        }
        rover.travelLog.push([rover.x,rover.y])
       
  }
  function moveBackward(rover){
    console.log("movebackward was called")
    switch (rover.direction) {
        case "N":
          rover.y++
          break;
        case "E":
          rover.x--
          break;
          case "S":
          rover.y--
          break;
          case "W":
          rover.x++
          break;
        }
        rover.travelLog.push([rover.x,rover.y])
    }

function Commands(rover, command){

    for (let i = 0; i<command.length; i++){

        if (command[i]==="f"){
            moveForward(rover)
        } 
        else if (command[i]==="r"){
            turnRight(rover)
        } else if (command[i]==="l"){
            turnLeft(rover)
        } else if (command[i]==="b"){
            moveBackward(rover)
        } 
    }

    
console.log(rover)
}

Commands (rover, "rlbrrrfffbff")


// function Boundary(rover, command){ 
//     if(rover.y >= 0 && rover.y < 10){
//         if(command === "l"){
//             rover.y--;
//         } else {
//             rover.y++;
//         }
        
//         console.log(`Rover has position: x=${rover.x}, y=${rover.y}`);
        
//      } else {
//         console.log("You can't place rover outside of the boundary!");
//      }
// }





  
