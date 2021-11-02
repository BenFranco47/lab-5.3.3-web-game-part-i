/* Created a function so that each img can be called rather than have multiple blocks of code*/
function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
   
   
    return object
}

/* Allows user to double click on img to remove it*/
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {
    object.remove()
    
    })
}

/*Background */
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon


/* BONUS- Renders the images on the screen*/
/*Background/ Environment*/
enviroment('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
enviroment('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)




/*All Object Images*/
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)


function enviroment(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
    for(let w = 0; w < width; w++){
    newImage(url, left + w*100, bottom+h*100)
        
        }
    }
}