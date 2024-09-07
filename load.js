function loader(uuid) {

    var arrTimes = [];
    var i = 0; // start
    var timesToTest = 5;
    var tThreshold = 150; //ms
    var testImage = "http://www.google.com/images/phd/px.gif"; // small image in your server
    var dummyImage = new Image();
    var isConnectedFast = false;


    /** test and average time took to download image from server, called recursively timesToTest times */
    function testLatency(cb) {
        var tStart = new Date().getTime();
        if (i < timesToTest - 1) {
            dummyImage.src = testImage + '?t=' + tStart;
            dummyImage.onload = function() {
                var tEnd = new Date().getTime();
                var tTimeTook = tEnd - tStart;
                arrTimes[i] = tTimeTook;
                testLatency(cb);
                i++;
            };
        } else {
            /** calculate average of array items then callback */
            var sum = arrTimes.reduce(function(a, b) { return a + b; });
            var avg = sum / arrTimes.length;
        }
        return avg
    }

    const loader = `<div id='loader'>
<div class="shapes"></div>

<style>
.shapes {
   width: 57.6px;
   height: 57.6px;
   color: #474bff;
   display: grid;
}

.shapes::before,
.shapes::after {
   content: "";
   grid-area: 1/1;
   background: currentColor;
   clip-path: polygon(0 0,101% 0, 0 100%);
   animation: shapes-t3dtsmlg ${testLatency()} infinite;
}

.shapes::after {
   --s: -1,-1;
}

@keyframes shapes-t3dtsmlg {
   0%, 10% {
      transform: scale(var(--s,1)) translate(0,0)        rotate(0deg);
   }

   33% {
      transform: scale(var(--s,1)) translate(28.8px,-28.8px) rotate(0deg);
   }

   66% {
      transform: scale(var(--s,1)) translate(28.8px,-28.8px) rotate(180deg);
   }

   90%, 100% {
      transform: scale(var(--s,1)) translate(0px,0px)    rotate(180deg);
   }
}
</style></div>`


}