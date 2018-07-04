//=============================================================================
/*:
* @plugindesc 自訂遊戲標題
* @author Saigetu
*/
//=============================================================================



//建立標題用的綁定選項
Scene_Title.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_TitleCommand();
    this._commandWindow.setHandler('newGame',  this.commandNewGame.bind(this));
    this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    this._commandWindow.setHandler('options',  this.commandOptions.bind(this));
	this._commandWindow.setHandler('quit',  this.commandQuit.bind(this));
    this.addWindow(this._commandWindow);
};


//初始標題選項並呼叫圖形化程式
var saigetu_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
    saigetu_create.apply(this);
};

//標題畫面即時更新
var saigetu_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
     saigetu_update.apply(this);
};


//標題畫面初始化設定
Scene_Title.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    this.centerSprite(this._backSprite1);
    this.playTitleMusic();
    this.startFadeIn(this.fadeSpeed(), false);
};

//建立自訂的選項
var saigetu_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    saigetu_makeCommandList.apply(this);
	this.addQuitCommand();
};

//設定遊戲結束選項
Window_TitleCommand.prototype.addQuitCommand = function(){
	this.addCommand('結束','quit');
	
};

//結束遊戲功能
Scene_Title.prototype.commandQuit = function(){
	SceneManager.exit();
};

