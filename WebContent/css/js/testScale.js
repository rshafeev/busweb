﻿function zoomIn(targetBlock) {
	if (targetBlock == 'absPosBlock') {
		new Effect.Scale(targetBlock, 200, {duration: 5, scaleMode: {originalHeight:170, originalWidth:200}, scaleContent: false});
	}
	else {
		new Effect.Scale(targetBlock, 200, {duration: 5});
	}
}

function zoomOut(targetBlock) {
	new Effect.Scale(targetBlock, 50, {duration: 5});
}

function zoomInX(targetBlock) {
	var width=132;
	new Effect.Scale(targetBlock, width, {duration: 3, scaleX: true, scaleY: false, scaleContent: false});
}

function zoomOutX(targetBlock) {
	new Effect.Scale(targetBlock, 75, {duration: 3, scaleX: true, scaleY: false, scaleContent: false});
}

function zoomInY(targetBlock) {
	new Effect.Scale(targetBlock, 200, {duration: 5, scaleX: false, scaleY: true, scaleContent: false});
}

function zoomOutY(targetBlock) {
	new Effect.Scale(targetBlock, 50, {duration: 5, scaleX: false, scaleY: true, scaleContent: false});
}