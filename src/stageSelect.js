var stageSelect = function(game){}

var stageNumber;
var maxStageNumber = 10;

var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ten;
var twelve;
var thirteen;

 
stageSelect.prototype = {
  	create: function(){
  		this.game.add.sprite(0, 0, 'stageSelectBackground');

		one = this.game.add.button(210, 280, "1", function(){this.playTheGame(1)}, this);
		one.events.onInputOver.add(this.hover1, this);
		one.events.onInputOut.add(this.leave1, this);

		two = this.game.add.button(270, 280, "2", function(){this.playTheGame(2)}, this);
		two.events.onInputOver.add(this.hover2, this);
		two.events.onInputOut.add(this.leave2, this);

		three = this.game.add.button(330, 280, "3", function(){this.playTheGame(3)}, this);
		three.events.onInputOver.add(this.hover3, this);
		three.events.onInputOut.add(this.leave3, this);

		four = this.game.add.button(390, 280, "4", function(){this.playTheGame(4)}, this);
		four.events.onInputOver.add(this.hover4, this);
		four.events.onInputOut.add(this.leave4, this);

		five = this.game.add.button(450, 280, "5", function(){this.playTheGame(5)}, this);
		five.events.onInputOver.add(this.hover5, this);
		five.events.onInputOut.add(this.leave5, this);

		six = this.game.add.button(510, 280, "6", function(){this.playTheGame(6)}, this);
		six.events.onInputOver.add(this.hover6, this);
		six.events.onInputOut.add(this.leave6, this);

		seven = this.game.add.button(570, 280, "7", function(){this.playTheGame(7)}, this);
		seven.events.onInputOver.add(this.hover7, this);
		seven.events.onInputOut.add(this.leave7, this);

		eight = this.game.add.button(630, 280, "8", function(){this.playTheGame(8)}, this);
		eight.events.onInputOver.add(this.hover8, this);
		eight.events.onInputOut.add(this.leave8, this);

		nine = this.game.add.button(690, 280, "9", function(){this.playTheGame(9)}, this);
		nine.events.onInputOver.add(this.hover9, this);
		nine.events.onInputOut.add(this.leave9, this);

		ten = this.game.add.button(750, 280, "10", function(){this.playTheGame(10)}, this);
		ten.events.onInputOver.add(this.hover10, this);
		ten.events.onInputOut.add(this.leave10, this);

		eleven = this.game.add.button(210, 340, "11", function(){this.playTheGame(11)}, this);
		eleven.events.onInputOver.add(this.hover11, this);
		eleven.events.onInputOut.add(this.leave11, this);

		twelve = this.game.add.button(275, 340, "12", function(){this.playTheGame(12)}, this);
		twelve.events.onInputOver.add(this.hover12, this);
		twelve.events.onInputOut.add(this.leave12, this);

		thirteen = this.game.add.button(340, 340, "13", function(){this.playTheGame(13)}, this);
		thirteen.events.onInputOver.add(this.hover13, this);
		thirteen.events.onInputOut.add(this.leave13, this);


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
		
	},

	playTheGame: function(stageNumber_){
		stageNumber = stageNumber_;
		this.game.state.start("Game");
	},

	hover1: function(){
		one.loadTexture('1-2');
	},
	hover2: function(){
		two.loadTexture('2-2');
	},
	hover3: function(){
		three.loadTexture('3-2');
	},
	hover4: function(){
		four.loadTexture('4-2');
	},
	hover5: function(){
		five.loadTexture('5-2');
	},
	hover6: function(){
		six.loadTexture('6-2');
	},
	hover7: function(){
		seven.loadTexture('7-2');
	},
	hover8: function(){
		eight.loadTexture('8-2');
	},
	hover9: function(){
		nine.loadTexture('9-2');
	},
	hover10: function(){
		ten.loadTexture('10-2');
	},
	hover11: function(){
		eleven.loadTexture('11-2');
	},
	hover12: function(){
		twelve.loadTexture('12-2');
	},
	hover13: function(){
		thirteen.loadTexture('13-2');
	},

	leave1: function(){
		one.loadTexture('1');
	},
	leave2: function(){
		two.loadTexture('2');
	},
	leave3: function(){
		three.loadTexture('3');
	},
	leave4: function(){
		four.loadTexture('4');
	},
	leave5: function(){
		five.loadTexture('5');
	},
	leave6: function(){
		six.loadTexture('6');
	},
	leave7: function(){
		seven.loadTexture('7');
	},
	leave8: function(){
		eight.loadTexture('8');
	},
	leave9: function(){
		nine.loadTexture('9');
	},
	leave10: function(){
		ten.loadTexture('10');
	},
	leave11: function(){
		eleven.loadTexture('11');
	},
	leave12: function(){
		twelve.loadTexture('12');
	},
	leave13: function(){
		thirteen.loadTexture('13');
	},
}