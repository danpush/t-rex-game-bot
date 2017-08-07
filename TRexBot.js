// Made by Daniel Apushkinsky in August 2017

function jump(){
	Runner.instance_.tRex.setDuck(false);
	if (!Runner.instance_.tRex.jumping && !Runner.instance_.tRex.ducking) {
		Runner.instance_.playSound(Runner.instance_.soundFx.BUTTON_PRESS);
		Runner.instance_.tRex.startJump(Runner.instance_.currentSpeed);
	}
}

function duck(){
	if (Runner.instance_.tRex.jumping) {
		Runner.instance_.tRex.setSpeedDrop();
	} else if (!Runner.instance_.tRex.jumping && !Runner.instance_.tRex.ducking) {
		Runner.instance_.tRex.setDuck(true);
	}
}

setInterval(function(){
	if (Runner.instance_.horizon.obstacles.length > 0){
		if (Runner.instance_.horizon.obstacles[0].xPos < Runner.instance_.currentSpeed * 25 - Runner.instance_.horizon.obstacles[0].width/2 && Runner.instance_.horizon.obstacles[0].yPos > 75){
			jump();
		}

		if (Runner.instance_.horizon.obstacles[0].xPos < Runner.instance_.currentSpeed * 30 - Runner.instance_.horizon.obstacles[0].width/2 && Runner.instance_.horizon.obstacles[0].yPos <= 75){
			duck();
		}
	}
}, 5);

console.log("T-Rex Bot by Daniel Apushkinsky")

//chrome://dino/
//https://cs.chromium.org/chromium/src/components/neterror/resources/offline.js?q=t-rex+package:%5Echromium$&dr=C&l=7	