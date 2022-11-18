

 let ogreSequences = { 
     back : { frames: ["ogreback2.png", "ogreback3.png"], start: 0, end: 1 }, 
     right: { frames: ["ogreright2.png","ogreright3.png"], start: 2, end: 3},
     left:  { frames: ["ogreleft2.png","ogreleft3.png"], start: 4, end: 5 },
     front: { frames: ["ogreforward2.png", "ogreforward3.png"], start: 6, end: 7 }
 }

function initOgre() {
    let ogre = PIXI.AnimatedSprite.fromFrames(
        ogreSequences.back.frames
             .concat(ogreSequences.right.frames)
             .concat(ogreSequences.left.frames)
             .concat(ogreSequences.front.frames)
        )
    
    ogre.onFrameChange = () => {
        // console.log(ogre.currentFrame)
        // console.log(ogreDirection)
        // console.log("frame change " + ogre.currentFrame + " current direction " + ogreDirection + "  end frame : " + ogreSequences[ogreDirection].end)
        if (ogre.currentFrame < ogreSequences[ogreDirection].start || ogreSequences[ogreDirection].end < ogre.currentFrame)  
        {
            // console.log("reset position to " + ogreSequences[ogreDirection].start)
            ogre.gotoAndPlay(ogreSequences[ogreDirection].start) 
        }
        }
    ogre.animationSpeed = 0.12; 
    ogre.x = 68;
    ogre.play()

    return ogre
}


function sayHello() {
    console.log("hello from display source file...")
}