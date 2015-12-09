var userName = prompt("Hello! What is your name?");

var person = prompt("Welcome to the North Pole, " + userName + "! Who do you want to hang out with today: A) Santa, B) Rudolph, or C) some of the elves?");

if (person === "A" || person === "a") {
	alert("Great! Santa is happy to see you!");

	var activity = prompt("Do you want to A) eat cookies with Santa, B) fly in his sleigh, or C) go to the mall?");
	
	if (activity === "A" || activity === "a") {
		alert("That sounds like a great idea.");
	
		var cookie = prompt("How many cookies do you want to eat? A) 1 cookie or B) a plate full of cookies?");
		
		if (cookie === "A" || cookie ==="a") {
			alert("That was a delicious treat! What a wonderful way to spend time with Santa in the North Pole.");
		}
	
		else if (cookie === "B" || cookie === "b") {
			alert("Uh oh. That sounded like a good idea at the time but now you and Santa both have stomach aches.");
		}
	
		else {
			prompt("Oops! That's not one of the options. Please try again.");
		}
	}

	
	else if (activity === "B" ||activity === "b") {
		alert("Santa let you take the reigns to his sleigh and you (and all the reindeer) flew all around the world in just one night and successfully delivered all the kids their toys. Great job!");
	}
	else if (activity === "C" || activity === "c") {
		alert("Good thing you are great with your iPhone camera. You had to take all the photos of the screaming/crying kiddos sitting on Santa's lap. Put some extra peppermint schnapps in your hot chocolate- you deserve it!");
	}
	else {
		prompt("Oops! That's not one of the options. Please try again.");
	}
}

else if (person === "B" || person === "b") {
	alert("Great! Rudolph is happy to see you!");
		
	var activity2 = prompt("Do you and Rudolph want to: A) guide Santa's sleigh, B) play reindeer games, or C) have a snack?");

	if (activity2 === "A" || activity2 === "a") {
		alert("You hopped into Santa's sleigh and Rudolph led the way towards Europe. You almost collided with a few airplanes along the way, but luckily Rudolph's red nose warned the pilots of your presence. You guys were able to deliver all the children in Europe their gifts in time!");
	}
	else if (activity2 === "B" || activity2 === "b") {
		alert("That sounds fun!");

		var games = prompt("Which game would you like to play: A) capture the flag, B) tag, or C) build a snowman?");

		if (games === "A" || games === "a") {
			alert("You were able to sneak past some elves and make it into their territory but you didn't see Santa and he tagged you and took you to jail. Too bad!");
		}
		else if (games === "B" || games === "b") {
			alert("Tag! You're it! You start chasing down one of the elves but you trip on a candycane and the elf gets safely to base. Too bad!");
		}
		else if (games === "C" || games === "c") {
			alert("Congratulations! You and Rudolph dominated a snowman making contest and took home the trophy!");
		}
		else {
			prompt("Oops! That's not one of the options. Please try again.");
		}
	}
	else if (activity2 === "C" || activity2 === "c") {
		alert("I hope you aren't allergic to hay because that is Rudolph's favorite meal!");
	}
	else {
		prompt("Oops! That's not one of the options. Please try again.");
	}
}


else if (person === "C" || person === "c") {
	alert("Great! The elves are happy to see you!");
		
	var activity3 = prompt("Do you and the elves want to: A) go sledding, B) build toys, or C) bake cookies?");

	if (activity3 === "A" || activity3 === "a") {
		alert("You are having a blast sledding down a very steep hill. On your 3rd trip down, your sled hits a rock which sends you flying into the air. You injure your ankle.");
		
		var injury = prompt("Do you want to: A) Walk it off or B) Go to the Emergency Room?")
			
			if (injury === "A" || injury === "a") {
				alert("Wow, okay! Get back to sledding!");
			}
			else if (injury === "B" ||injury === "b") {
				alert("Good idea. Go get an x-ray. Get well soon!");
			}
	}

	else if (activity3 === "B" || activity3 === "b") {
		alert("That sounds fun!");
		
		var toys = prompt("How many toys do you want to build today? You can choose between 1 - 1,000.");

		if (toys >= 500) {
			alert("Wow, that's a lot of toys! Better get started.");
		}
		else if (toys < 500) {
			alert("Some of the elves might think you're lazy.");
		}
		else {
			alert("uh oh! That's not a number");
		}

	}

	else if (activity3 === "C" || activity3 === "c") {
		alert("Yum! I love cookies!");

		var bake = prompt("What kind of cookie do you want to bake today: A) sugar cookies, B) chocolate chip cookies, or C) peanut butter cookies?");

			if (bake === "A" || bake === "a") {
				alert("You made some delicious sugar cookies and Mr. & Mrs. Clause ate the right up!");
			}
			else if (bake === "B" || bake === "b") {
				var chips = prompt("Ok! How many bags of chocolate chips should we put in: A) 1/2 bag, B) 2 bags, or C) 3 bags?");
			}
				if (chips === "A" || chips === "a") {
					alert('"Just 1/2 bag?!," The elves exclaimed. "It is Christmas, live a little!"');
				}
				else if (chips === "B" || chips === "b") {
					alert("You are known as the cookie master at the North Pole now. Everyone couldn't get enough of your chocolate chip cookies.");
				}
				else if (chips === "C" || chips === "c") {
					alert("Wow! That's a lot of chocolate chips! Some of the elves got very upset with you since you used up all their chocolate. They didn't have enough to make fudge, so they kicked you out of the North Pole.");
				}
				else {
					prompt("Oops! That's not one of the options. Please try again.");
				}
	}

			else if (bake === "C" || bake === "c") {
				alert("With raving reviews from all your friends, you entered your peanut butter cookies in the North Pole Baking Contest and WON!");
			}
			else {
				prompt("Oops! That's not one of the options. Please try again.");
			}
}

else {
		prompt("Oops! That's not one of the options. Please try again.");
}

