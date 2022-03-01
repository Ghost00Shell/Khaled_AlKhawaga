/* 
js code for the astronauts inspired by: http://jsfiddle.net/j2PAb/
*/

$(document).ready(function() {
    animateDiv($('.a'));
    animateDiv($('.b'));
    animateDiv($('.c'));
});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - 20;
    var w = $container.width() - 20;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });
};

function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest / speedModifier);

    return speed;
}


var s=window.screen;
    var width = q.width=s.width;
    var height = q.height;
    var yPositions = Array(300).join(0).split('');
    var ctx=q.getContext('2d');
    
    function shuffle(array) {
      var m = array.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m], array[m] = array[i], array[i] = t;
      }
      return array;
    }
    // var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var alphabet = "01".split("");
    var draw = function () {
      ctx.fillStyle='rgba(0,0,0,.05)';
      ctx.fillRect(0,0,width,height);
      ctx.fillStyle='#0F0';
      ctx.font = '10pt Georgia';
      yPositions.map(function(y, index){
       text = String.fromCharCode(1e2+Math.random()*33);   
        //text = shuffle(alphabet)[0]     ;
        x = (index * 10)+10;
        q.getContext('2d').fillText(text, x, y);
        if(y > 100 + Math.random()*1e4)
        {
          yPositions[index]=0;
        }
        else
        {
          yPositions[index] = y + 10;
        }
      });
    };

    RunMatrix();

    function RunMatrix()
    {
      if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
            Game_Interval = setInterval(draw, 33);
    }

    function StopMatrix()
    {
      clearInterval(Game_Interval);
    }
