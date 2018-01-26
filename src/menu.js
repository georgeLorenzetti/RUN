var menu = function(game){}

var backGround;
var gameTitle;
var playButton;
var rooftopGuy;
 
menu.prototype = {
  	create: function(){
  		backGround = this.game.add.sprite(0, 0, 'menuBackground');
		gameTitle = this.game.add.sprite(450, 160, 'rooftopGuyTitle');
		gameTitle.scale.setTo(1.5, 1.5);
		gameTitle.anchor.setTo(0.5,0.5);
		playButton = this.game.add.button(660, 400, 'play', this.playTheGame, this);
		playButton.anchor.setTo(0.5,0.5);
		playButton.events.onInputOver.add(this.hover, this);
		playButton.events.onInputOut.add(this.leave, this);
		rooftopGuy = this.game.add.sprite(110, 385, 'playerSheet');
  		rooftopGuy.scale.setTo(3, 3);
  		rooftopGuy.animations.add('running', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, true);
  		rooftopGuy.animations.play('running');
	},

	playTheGame: function(){
		this.game.state.start('StageSelect');
	},

	hover: function(){
		playButton.loadTexture('play2');
	},

	leave: function(){
		playButton.loadTexture('play');
	}

}