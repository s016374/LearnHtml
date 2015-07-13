/**
 * Created by s016374 on 15/5/25.
 */

var i=0;
function timedCount(){
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()", 500)
}

timedCount();