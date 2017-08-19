# T-Rex Game Bot
A bot that plays the Google Chrome T-Rex game for you. The lowest score it has ever gotten is 4 000, and the highest is over 100 000. It can consistantly hit around 50 000 points.

Keep in mind this currently doesnt use doesn't use key inputs, but controls directly from [chromium.](https://cs.chromium.org/chromium/src/components/neterror/resources/offline.js)

![alt text](https://i.imgur.com/uAlZzuq.png)


# How To Use

1. Open chrome and go to: chrome://dino/ (or disconnect your internet)
2. Press "F12" and go to "Console"
3. Copy and Pase the following text, then press enter.
```js
function jump(){Runner.instance_.tRex.setDuck(!1),Runner.instance_.tRex.jumping||Runner.instance_.tRex.ducking||(Runner.instance_.playSound(Runner.instance_.soundFx.BUTTON_PRESS),Runner.instance_.tRex.startJump(Runner.instance_.currentSpeed))}function duck(){Runner.instance_.tRex.jumping?Runner.instance_.tRex.setSpeedDrop():Runner.instance_.tRex.jumping||Runner.instance_.tRex.ducking||Runner.instance_.tRex.setDuck(!0)}setInterval(function(){Runner.instance_.horizon.obstacles.length>0&&(Runner.instance_.horizon.obstacles[0].xPos<25*Runner.instance_.currentSpeed-Runner.instance_.horizon.obstacles[0].width/2&&Runner.instance_.horizon.obstacles[0].yPos>75&&jump(),Runner.instance_.horizon.obstacles[0].xPos<30*Runner.instance_.currentSpeed-Runner.instance_.horizon.obstacles[0].width/2&&Runner.instance_.horizon.obstacles[0].yPos<=75&&duck())},5),console.log("T-Rex Bot by Daniel Apushkinsky");
```
4. Start the game!


# License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details

Created August 2017 by Daniel Apushkinsky
