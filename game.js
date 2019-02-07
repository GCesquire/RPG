$(document).ready(function () {

	var wizard;
	var knight;
	var elf;
	var orc;

	var characterSelection = [];
	var character = null;
	var defenders = [];
	var defender = null;

	function startGame() {
		wizard = {
			id: 0,
			name: "Wizard",
			healthPoints: 120,
			baseAttack:10,
			attackPower: 10,
			counterAttackPower: 8,
			img:"data:image/jpeg;base64,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"
		}

		knight = {
			id: 1,
			name: "Knight",
			healthPoints: 100,
			baseAttack: 8,
			attackPower: 8,
			counterAttackPower: 5,
			img:"data:image/jpeg;base64,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"
		}

		elf = {
			id: 2,
			name: "Elf",
			healthPoints: 150,
			baseAttack:9,
			attackPower: 9,
			counterAttackPower: 10,
			img:"data:image/jpeg;base64,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"
		}

		orc = {
			id: 3,
			name: "Orc",
			healthPoints: 100,
			baseAttack: 12,
			attackPower: 12,
			counterAttackPower: 12,
			img:"https://vignette.wikia.nocookie.net/dream-world/images/f/fc/Orc_Warrior.png/revision/latest?cb=20120401105703"
		}
		// reset character selected
		character = null;

		// reset enemies array
		defenders = [];

		// reset enemy selected
		defender = null;

		// reset character selections
		characterSelection = [wizard,knight,elf,orc];

		// clears all character divs
		$("#character").empty();
		$("#defenderArea").empty();
		$("#defender").empty();
		$("#status").empty();

		$.each(characterSelection, function(index, character) {
			// create a div for each character to display character selection at start of the game
			var newCharacterDiv = $("<div>").addClass("character panel panel-success").attr("id",character.id);

			$("<div>").addClass("panel-heading").html(character.name).appendTo(newCharacterDiv);
			$("<div>").addClass("panel-body").append("<img src='" + character.img + "'>").appendTo(newCharacterDiv);
			$("<div>").addClass("panel-footer").append("<span class='hp'>" + character.healthPoints + "</span>").appendTo(newCharacterDiv);

			// append new div to character selection
			$("#characterSelection").append(newCharacterDiv);
		});

		$(".character").on("click", function() {
			// when character has been selected
			if(character === null) {
				console.log("picked character");
				//get id of character selected
				var charId = parseInt($(this).attr("id"));

				character = characterSelection[charId];

				// loop through character array
				$.each(characterSelection, function(index, character) {
					// add unselected characters to enemies array
					if(character.id !== charId) {
						defenders.push(character);
						$("#"+character.id).removeClass("character panel-success").addClass("defender panel-danger").appendTo("#defenderArea");
					} else {
						$("#"+character.id).appendTo("#character");
					}
				});

				// add click event after defender class has been added
				$(".defender").on("click", function() {
					if(defender === null) {
						var defenderId = parseInt($(this).attr("id"));
						console.log(this);
						defender = characterSelection[defenderId];
						$("#"+defenderId).appendTo("#defender");
					}
				});
			}
		});

		$("#restart").hide();
	}

	startGame();

	

	$("#attack").on("click", function() {
		// when character has been selected, character has not been defeated and there are still defenders left
		if(character !== null && character.healthPoints > 0 && defenders.length > 0) {
			// created variable to store game status messages
			var status = "";

			// when defender has been selected
			if(defender !== null) {
				// decrease defender HP by character attack power
				defender.healthPoints -= character.attackPower;
				status += "You attacked " + defender.name + " for " + character.attackPower + " damage.<br>";

				console.log("Defender: ",defender.name,defender.healthPoints);

				// update defender HP
				$("#"+defender.id + " .hp").html(defender.healthPoints);

				// decrease character HP by defender counter attack power
				character.healthPoints -= defender.counterAttackPower;
				status += defender.name + " attacked you back for " + defender.counterAttackPower + " damage.<br>";

				console.log("Character: ",character.name,character.healthPoints);

				// update character HP
				$("#"+character.id + " .hp").html(character.healthPoints);

				// increase character attack power by base attack power
				character.attackPower += character.baseAttack;

				// when character is defeated
				if(character.healthPoints <= 0) {
					status = "You've been defeated... GAME OVER!!!!";
					$("#restart").show();
				} else if(defender.healthPoints <= 0) {	// when defender is defeated
					status = "You have defeated " + defender.name + ", you can choose to fight another enemy.";

					// clear defender selection
					$("#defender").empty();
					defender = null;

					// remove defeated defender from defender array
					defenders.splice(defenders.indexOf(defender),1);
				}

				// when no defenders left
				if(defenders.length === 0) {
					status = "You win!";
					$("#restart").show();
				}
			} else {
				status = "No enemy here.";
			}

			$("#status").html(status);
		}
	})

	$("#restart").on("click", function() {
		startGame();
	})
	
});