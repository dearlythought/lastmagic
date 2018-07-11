//=============================================================================
/*:
* @plugindesc 分子效果
* @author Saigetu
*/
//=============================================================================
(function(){
function saigetu_pa() {
    this.initialize.apply(this, arguments);
}

saigetu_pa.prototype = Object.create(Sprite_Base.prototype);
saigetu_pa.prototype.constructor = saigetu_pa;

saigetu_pa.prototype.initialize = function(character) {
    Sprite_Base.prototype.initialize.call(this);
    this._ischeck=false;
	this.loadParticleImage();
	this.loadParticlePosition();
};


saigetu_pa.prototype.loadParticleImage = function(){
	this.bitmap=ImageManager.loadSystem('Cursor');
	
}

saigetu_pa.prototype.loadParticlePosition = function(){
	this.anchor.x=Math.random(Math.sin(360));
	this.anchor.y=Math.random(Math.cos(360));
	this.x=(Math.randomInt(Graphics.boxWidth)/1.5)+380;
	this.y=Math.randomInt(Graphics.boxHeight);
	
}

saigetu_pa.prototype.revertOpacity=function(){
	if(this._ischeck){
		
		if(this.opacity<255){
			this.opacity +=1;
		}
		else{this._ischeck=false;}
	}
	
}



saigetu_pa.prototype.update=function(){
	
	//this.rotation+=0.08895;
	
	this.y-=1.314;
	
	
	if(!this._ischeck){
		
		if(this.opacity<=0){
			this._ischeck=true;
			this.loadParticlePosition();
		}
		else{
			this.opacity -=1;
		}
	}
	else{
		this.revertOpacity();
	}
}

var saigetu_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function(){
	saigetu_create.call(this);
	this.showParticles();
	
}

Scene_Title.prototype.showParticles = function(){
	this.setParticles= [];
	for(var i=0;i<60;i++){
		var newPar=new saigetu_pa();
		this.setParticles.push(newPar);
		this.addChild(this.setParticles[i]);
		
	}
	
}






})();