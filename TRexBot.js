setInterval(function(){
	if (Runner.instance_.horizon.obstacles.length > 0){ // if obsticles exist
		if (Runner.instance_.horizon.obstacles[0].xPos < Runner.instance_.currentSpeed * 25 - Runner.instance_.horizon.obstacles[0].width/2 && Runner.instance_.horizon.obstacles[0].yPos > 75){
			keyUp(40);
			keyDown(38);
		}

		if (Runner.instance_.horizon.obstacles[0].xPos < Runner.instance_.currentSpeed * 30 - Runner.instance_.horizon.obstacles[0].width/2 && Runner.instance_.horizon.obstacles[0].yPos <= 75)
			keyDown(40);
	}
}, 5);


function keyDown(codeKey){
	// Simulate a key press

	Podium = {};

	var oEvent = document.createEvent('KeyboardEvent');

    Object.defineProperty(oEvent, 'keyCode', {
    	get : function() {
    		return this.keyCodeVal;
    	}
    });      

    if (oEvent.initKeyboardEvent) {
    	oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, codeKey, codeKey, "", "", false, "");
    } else {
    	oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, codeKey, 0);
    }

    oEvent.keyCodeVal = codeKey;

    document.body.dispatchEvent(oEvent);

}


function keyUp(codeKey) {
	// Similate a key up

	Podium = {};

	var oEvent = document.createEvent('KeyboardEvent');

    Object.defineProperty(oEvent, 'keyCode', {
    	get : function() {
    		return this.keyCodeVal;
    	}
    });      

    if (oEvent.initKeyboardEvent) {
    	oEvent.initKeyboardEvent("keyup", true, true, document.defaultView, codeKey, codeKey, "", "", false, "");
    } else {
    	oEvent.initKeyEvent("keyup", true, true, document.defaultView, false, false, false, false, codeKey, 0);
    }

    oEvent.keyCodeVal = codeKey;

    document.body.dispatchEvent(oEvent);
}
