//=============================================================================
/*:
* @plugindesc 自訂遊戲選單
* @author Saigetu
*/
//=============================================================================

(function(){
	
	//初始化建立選單
	Scene_Menu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();  
	this.createCommandImages();
	};
	
	//建立圖形選單
	Scene_Menu.prototype.createCommandImages = function(){
		
		//改成Sprite_Button可以宣告成按鈕, sprite只是圖形
		this._itemButton = new Sprite_Button();
		this._itemButton.setClickHandler(this.commandItem.bind(this));
		this._itemButton.y = 100;
		
		this._optionButton = new Sprite_Button();
		this._optionButton.setClickHandler(this.commandOptions.bind(this));
		this._optionButton.y = 180;
		
		this._saveButton = new Sprite_Button();
		this._saveButton.setClickHandler(this.commandSave.bind(this));
		this._saveButton.y = 260;
		
		this._loadButton = new Sprite_Button();
		this._loadButton.setClickHandler(this.commandLoad.bind(this));
		this._loadButton.y = 340;
		
		this._endButton = new Sprite_Button();
		this._endButton.setClickHandler(this.commandGameEnd.bind(this));
		this._endButton.y = 420;
		
		this.addChild(this._itemButton);
		this.addChild(this._optionButton);
		this.addChild(this._saveButton);
		this.addChild(this._loadButton);	
		this.addChild(this._endButton);
	};
	
	
	//更新選單圖片變化
	Scene_Menu.prototype.update = function(){
		
		//將圖片選擇功能載入
		Scene_MenuBase.prototype.update.call(this);
		//控制圖片切換樣式
		switch(this._commandWindow._index){
			case 0:
				this._itemButton.bitmap = ImageManager.loadPicture('itemo');
				this._optionButton.bitmap = ImageManager.loadPicture('option');
				this._saveButton.bitmap = ImageManager.loadPicture('save');
				this._loadButton.bitmap = ImageManager.loadPicture('load');
				this._endButton.bitmap = ImageManager.loadPicture('exit');
				break;
			case 1:
				this._itemButton.bitmap = ImageManager.loadPicture('item');
				this._optionButton.bitmap = ImageManager.loadPicture('optiono');
				this._saveButton.bitmap = ImageManager.loadPicture('save');
				this._loadButton.bitmap = ImageManager.loadPicture('load');
				this._endButton.bitmap = ImageManager.loadPicture('exit');
				break;
			case 2:
				this._itemButton.bitmap = ImageManager.loadPicture('item');
				this._optionButton.bitmap = ImageManager.loadPicture('option');
				this._saveButton.bitmap = ImageManager.loadPicture('saveo');
				this._loadButton.bitmap = ImageManager.loadPicture('load');
				this._endButton.bitmap = ImageManager.loadPicture('exit');
				break;
			case 3:
				this._itemButton.bitmap = ImageManager.loadPicture('item');
				this._optionButton.bitmap = ImageManager.loadPicture('option');
				this._saveButton.bitmap = ImageManager.loadPicture('save');
				this._loadButton.bitmap = ImageManager.loadPicture('loado');
				this._endButton.bitmap = ImageManager.loadPicture('exit');
				break;
			case 4:
				this._itemButton.bitmap = ImageManager.loadPicture('item');
				this._optionButton.bitmap = ImageManager.loadPicture('option');
				this._saveButton.bitmap = ImageManager.loadPicture('save');
				this._loadButton.bitmap = ImageManager.loadPicture('load');
				this._endButton.bitmap = ImageManager.loadPicture('exito');
				break;
		}
		
	};
	

	Scene_Menu.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    
	};

	//選單功能綁定
	Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
	this._commandWindow.visible = false;
	this._commandWindow.x = Graphics.boxWidth;
	this._commandWindow.y = Graphics.boxHeight;
    this._commandWindow.setHandler('item',      this.commandItem.bind(this));
    this._commandWindow.setHandler('options',   this.commandOptions.bind(this));
    this._commandWindow.setHandler('save',      this.commandSave.bind(this));
	this._commandWindow.setHandler('load',      this.commandLoad.bind(this));
    this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
	};
	
	Scene_Menu.prototype.commandLoad = function(){
		SceneManager.push(Scene_Load);
	}
	
	Window_MenuCommand.prototype.addMainCommands = function() {
    var enabled = this.areMainCommandsEnabled();
    if (this.needsCommand('item')) {
        this.addCommand(TextManager.item, 'item', enabled);
    }   
};

//建立選單背景
Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = ImageManager.loadPicture('95 test');
    this.addChild(this._backgroundSprite);
};

	
	Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
    this.addOptionsCommand();
    this.addSaveCommand();
	this.addLoadCommand();
    this.addGameEndCommand();
};

Window_MenuCommand.prototype.addLoadCommand = function(){
	this.addCommand('讀取', 'load',true);	
}
	
})();


