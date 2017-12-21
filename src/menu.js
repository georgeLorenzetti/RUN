var menu = function(game){}
 
menu.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(160, 160, "title");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160, 320, "play", this.playTheGame, this);
		playButton.anchor.setTo(0.5,0.5);
	},

	playTheGame: function(){
		console.log("menu");
		this.game.state.start("StageSelect");
	}
}