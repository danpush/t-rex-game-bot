# T-Rex Game Bot
A bot that plays the Google Chrome T-Rex game for you. It can consistantly hit around 50,000 points. Highest I've gotten is 100,000 but I'm sure it can go much higher.

When I had started this project I thought this would be at least 200 lines of code, yet here I am hitting 6 figure scores where the bot itself is just 10 lines of code. Obviously I have to simulate the key inputs, and that's what takes up the other 50 lines.

I've been able to make it so short by finding a formula to calculate how far away I need to jump before an obsticle. I found this by just straight up playing the game and logging the exact speed of the T-rex and the distance away from the obsticle at the time of jumping, putting this into graphing software you could see a clear correlation between the speed of the T-Rex and the distance from the next obsticle (at the time of jumping). Distance would always be 25 * speed. From there all that was left to do was type it up!

![HighScore](https://i.imgur.com/uAlZzuq.png)



# How To Use

1. Open chrome and go to: chrome://dino/ (or disconnect your internet)
2. Press "F12" and go to "Console"
3. Copy and Pase the following text, then press enter.
```js
function keyDown(e){Podium={};var n=document.createEvent("KeyboardEvent");Object.defineProperty(n,"keyCode",{get:function(){return this.keyCodeVal}}),n.initKeyboardEvent?n.initKeyboardEvent("keydown",!0,!0,document.defaultView,e,e,"","",!1,""):n.initKeyEvent("keydown",!0,!0,document.defaultView,!1,!1,!1,!1,e,0),n.keyCodeVal=e,document.body.dispatchEvent(n)}function keyUp(e){Podium={};var n=document.createEvent("KeyboardEvent");Object.defineProperty(n,"keyCode",{get:function(){return this.keyCodeVal}}),n.initKeyboardEvent?n.initKeyboardEvent("keyup",!0,!0,document.defaultView,e,e,"","",!1,""):n.initKeyEvent("keyup",!0,!0,document.defaultView,!1,!1,!1,!1,e,0),n.keyCodeVal=e,document.body.dispatchEvent(n)}setInterval(function(){Runner.instance_.horizon.obstacles.length>0&&(Runner.instance_.horizon.obstacles[0].xPos<25*Runner.instance_.currentSpeed-Runner.instance_.horizon.obstacles[0].width/2&&Runner.instance_.horizon.obstacles[0].yPos>75&&(keyUp(40),keyDown(38)),Runner.instance_.horizon.obstacles[0].xPos<30*Runner.instance_.currentSpeed-Runner.instance_.horizon.obstacles[0].width/2&&Runner.instance_.horizon.obstacles[0].yPos<=75&&keyDown(40))},5);
```
4. Start the game!


# License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details

Created August 2017 by Daniel Apushkinsky (Last Updated August 2019)
