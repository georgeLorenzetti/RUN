var stageSelect = function(game){}

var stageNumber;
var maxStageNumber = 10;
 
stageSelect.prototype = {
  	create: function(){
  		this.game.add.sprite(20, 300, 'instructions');

		var one = this.game.add.button(60, 100, "1", function(){this.playTheGame(1)}, this);
		var two = this.game.add.button(145, 100, "2", function(){this.playTheGame(2)}, this);
		var three = this.game.add.button(230, 100, "3", function(){this.playTheGame(3)}, this);
		var four = this.game.add.button(315, 100, "4", function(){this.playTheGame(4)}, this);
		var five = this.game.add.button(400, 100, "5", function(){this.playTheGame(5)}, this);
		var six = this.game.add.button(485, 100, "6", function(){this.playTheGame(6)}, this);
		var seven = this.game.add.button(570, 100, "7", function(){this.playTheGame(7)}, this);
		var eight = this.game.add.button(655, 100, "8", function(){this.playTheGame(8)}, this);
		var nine = this.game.add.button(740, 100, "9", function(){this.playTheGame(9)}, this);
		var ten = this.game.add.button(825, 100, "10", function(){this.playTheGame(10)}, this);
		var eleven = this.game.add.button(60, 170, "11", function(){this.playTheGame(11)}, this);
		var twelve = this.game.add.button(145, 170, "12", function(){this.playTheGame(12)}, this);
		var thirteen = this.game.add.button(230, 170, "13", function(){this.playTheGame(13)}, this);
		var fourteen = this.game.add.button(315, 170, "14", function(){this.playTheGame(10)}, this);
		var fifteen = this.game.add.button(400, 170, "15", function(){this.playTheGame(10)}, this);


		one.scale.setTo(0.75,0.75);
		two.scale.setTo(0.75,0.75);
		three.scale.setTo(0.75,0.75);
		four.scale.setTo(0.75,0.75);
		five.scale.setTo(0.75,0.75);
		six.scale.setTo(0.75,0.75);
		seven.scale.setTo(0.75,0.75);
		eight.scale.setTo(0.75,0.75);
		nine.scale.setTo(0.75,0.75);
		ten.scale.setTo(0.75,0.75);
		eleven.scale.setTo(0.75, 0.75);
		twelve.scale.setTo(0.75, 0.75);
		thirteen.scale.setTo(0.75, 0.75);
		fourteen.scale.setTo(0.75, 0.75);
		fifteen.scale.setTo(0.75, 0.75);

		one.anchor.setTo(0.5,0.5);
		two.anchor.setTo(0.5,0.5);
		three.anchor.setTo(0.5,0.5);
		four.anchor.setTo(0.5,0.5);
		five.anchor.setTo(0.5,0.5);
		six.anchor.setTo(0.5,0.5);
		seven.anchor.setTo(0.5,0.5);
		eight.anchor.setTo(0.5,0.5);
		nine.anchor.setTo(0.5,0.5);
		ten.anchor.setTo(0.5,0.5);
		eleven.anchor.setTo(0.5,0.5);
		twelve.anchor.setTo(0.5,0.5);
		thirteen.anchor.setTo(0.5,0.5);
		fourteen.anchor.setTo(0.5,0.5);
		fifteen.anchor.setTo(0.5,0.5);
		
	},

	playTheGame: function(stageNumber_){
		stageNumber = stageNumber_;
		this.game.state.start("Game");
	}
}