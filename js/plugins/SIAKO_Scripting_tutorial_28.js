//======================================================
/*:
* @plugindesc Tutorial 28：如何讓遊戲開始時，直接開啟全螢幕？(FullScreen switch)
* - SIAKO.Mobi RMMV Plugin Scripting 教學
* 
* @author siakoMobi 
* 
*

*/
//======================================================

/* 
 @ features : Tutorial 28
 @ comment  : 如何讓遊戲開始時，直接開啟全螢幕？(FullScreen switch)

1. 利用原生程式 rpg_core.js 內的 Graphics 類別內的 _switchFullScreen 函式
*/

( function(){

	//一啟動遊戲後，自動全螢幕畫面
	Graphics._switchFullScreen();

})();
