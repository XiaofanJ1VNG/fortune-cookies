addEventListener("load",app);
function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = !fortuneList ? "No fortune" : fortuneList[~~(Math.random() * fortuneList.length)];
			this.luckyNumbers = [];
			this.drawLuckyNumbers();
		}
		drawLuckyNumbers() {
			let maxDraws = 6,
				draws = maxDraws,
				maxNumber = 99,
				numberPool = [];

			// create number pool
			while (maxNumber--) {
				numberPool.unshift(maxNumber + 1);
			}
			// draw from pool, populate the lucky numbers

		}
	}

	var fcBtn = document.querySelector("button"),
		fortuneText = document.querySelector(".fc-fortune-text"),

		fortuneList = [
			"Chinatown should be an evolving, inclusive and open-ended ecosystem for all beings here, and not just a museum of the past.","We are not victims, we are inhabitants, builders, innovators, supporters and investors of our own community.","We need to reimagine new local businesses that foster community support for both old and young immigrants.","How can we make a place for younger people to open their own business in Chinatown?","If you don’t like rats, start helping the community to clean up the streets.","Investing in Chinatown can be as simple as cleaning up streets, visiting the grocery stores, going to local restaurants, buying stuff from local hardwares and donating to local organizations.","Go and ask the elders around you what are the things they’re struggling with recently and help them with that.","What can we do to make Chinatown safer at night? Light it up.","Try to apply what you've learned directly to helping the community.","Speak up our concerns. Make sure that our elected officials are looking out for us, make sure people are reaching across generations and across communities.","Plant a fruit tree in your neighborhood, take care of it with your friends and families, and share the fruits with the people and animals in the community. During which, kinship is built.","We need to build symbiotic relationships and kinships among multiple generations, culture and species. ",
		],
		fortune = new Fortune(),

		getFortune = function(){
			fortune = new Fortune(fortuneList);
			fortuneText.innerHTML = fortune.text;
			
		},
		nextState = function(){
			let elClass = this.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (elClass.contains(spawned)) {
				elClass.remove(spawned);
				elClass.add(opened);

			// new cookie
			} else {
				elClass.remove(opened);
				elClass.add(spawned);
				getFortune();
			}
		};
	
	getFortune();
	fcBtn.addEventListener("click",nextState);
}