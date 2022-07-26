let redSquare = newPlayer('pic/redSquare.png')
redSquare.style.zIndex = 0;


function newPlayer(link) {
    let player = document.createElement('img')
    player.src = link
    document.body.append(player)
    return player
}
function move(img) {
    img.style.position = 'fixed'

    function moveTo(left, bottom) {
        img.style.left = left + 'px'
        img.style.bottom = bottom + 'px'
    }
    function moveWithArrows(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;

        img.style.left = x + 'px'
        img.style.bottom = y + 'px'

        function movePlayer() {
            if(direction === 'north') {
                y += 8
            }
            if(direction === 'east') {
                x  += 8
        }
            if(direction === 'south') {
                y -= 8
            }
            if(direction === 'west') {
                x -= 8
            }
            redSquare.style.left = x + 'px'
            redSquare.style.bottom = y + 'px'
            callback(direction)
        }
            setInterval(movePlayer, 1000/144)

            document.addEventListener('keydown', function(e){
                if(e.key === "w"){
                    direction = 'north'
                }
                if(e.key === "d") {
                    direction = 'east'
                }
                if(e.key === "s") {
                    direction = 'south'
                }
                if(e.key === "a") {
                    direction = 'west'
                }
            })

            document.addEventListener('keyup', function(e) {
                direction = null;
            })
    }
        return{
            to: moveTo,
            WithArrowKeys: moveWithArrows
        }
}

move(redSquare).WithArrowKeys(1250, 1)
