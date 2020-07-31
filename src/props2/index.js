document.getElementById("button").addEventListener("click", function (event) {
  console.log(event);
});

// altKey: false
// bubbles: true
// button: 0
// buttons: 0
// cancelBubble: false
// cancelable: true
// clientX: 65
// clientY: 20
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 1
// eventPhase: 0
// fromElement: null
// isTrusted: true
// layerX: 65
// layerY: 20
// metaKey: false
// movementX: 0
// movementY: 0
// offsetX: 57
// offsetY: 11
// pageX: 65
// pageY: 20
// path: (5) [button#button, body, html, document, Window]
// relatedTarget: null
// returnValue: true
// screenX: 1368
// screenY: 348
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
// srcElement: button#button
// target: button#button
// timeStamp: 1529.6200000011595
// toElement: button#button
// type: "click"
// view: Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
// which: 1
// x: 65
// y: 20

document.getElementById("input").addEventListener("input", function () {
  console.log("Input changed!");
});

document.getElementById("box").addEventListener("mouseover", function () {
  console.log("Hovered in box!");
});
