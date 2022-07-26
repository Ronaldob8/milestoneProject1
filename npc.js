let tSemiTruck = newEnemy('pic/semiTruck.png')
let bSemiTruck = newEnemy('pic/semiTruck.png')
let tGreenCar = newEnemy('pic/2ndCar.png')
let bGreenCar = newEnemy('pic/2ndCar.png')
let tRedCar = newEnemy('pic/racerCar.png')
let bRedCar = newEnemy('pic/racerCar.png')
let orangeCar = newEnemy('pic/slowCar.png')
let finishLine = newEnemy('pic/finish.png')

finishLine.style.zIndex = -2;

function newEnemy(link) {
    let enemy = document.createElement('img')
    enemy.src = link
    document.body.append(enemy)
    return enemy;
}
function setClass(car) {
car.setAttribute('class', 'enemyCars')
return car;
}

function setId(car, idName){
car.setAttribute('id', idName)
return car;
}



//enemy's class 
setClass(tSemiTruck)
setClass(bSemiTruck)
setClass(tGreenCar)
setClass(bGreenCar)
setClass(tRedCar)
setClass(bRedCar)
setClass(orangeCar)
//enemy's id's
setId(tSemiTruck,'tSemi')
setId(bSemiTruck,'bSemi')
setId(tGreenCar, 'tGreen')
setId(bGreenCar, 'bGreen')
setId(tRedCar,'tRed')
setId(bRedCar,'bRed')
setId(orangeCar, 'orange')
setId(redSquare, 'player')
//enemy position
move(bGreenCar).to(-400, 110)
move(tGreenCar).to(-400, 875)
move(bSemiTruck).to(-450, 225)
move(tSemiTruck).to(-450, 1000)
move(bRedCar).to(-400,365)
move(tRedCar).to(-400,750)
move(orangeCar).to(-400,480)
move(finishLine).to(1200, 1200)