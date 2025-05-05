function RegisterEventHandlerForPreventDefault(className,eventType) { 
var oFrame = document.getElementsByClassName(className);
for (var i = 0; i < oFrame.length; i++) {
oFrame[i].contentWindow.document.addEventListener(eventType, function(e) { e.preventDefault(); }, false);}
}
function  RegisterEventHandlerForEdgeAnimate() {
/*
Automatically generated function to support placed Adobe Edge Animate/OAM files.
It is needed to prevent javascript events sent to the widget from being propagated
to the device/reader and activating reader chrome.
See "Preventing Default Behavior" in the Apple iBookstore Asset Guide for more information.
*/
var eventArray = ["touchstart" , "touchmove" , "touchend" , "click", "mouseover" ];
for (var j=0;j<eventArray.length;j++) {
RegisterEventHandlerForPreventDefault("_idGeneratedPreventDefault", eventArray[j]); } 
}
