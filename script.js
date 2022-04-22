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
			"When the most vulnerable Asians are being attacked by another minority groups, the institution of white-supremacy wins. It’s the same institution that values profits over lives and the planet."," We need the education of present and future generations which emphasizes social and enviornmental issues based our own experiences and an apprecieation of our diverse cultural perspectives.","Stand in solidarity with Black, Indigenous and people of colors communities and the planet."," We should care about the protection of nature and ecosystem as much as we care about the people. As a society, we often forget human don’t exist separately from nature.","We can’t preserve a community without uplifting the voices of its people.","Social injustice and environmental injustice are fueled by the same flame: the undervaluing, commidification, and exploitation of all forms of life and natural resources, from the smallest blade of grass to those living in poverty.","When the most vulnerable Asians are being attacked by another minority groups, the institution of white-supremacy wins. It’s the same institution that values profits over lives and the planet.","Put down roots in places that reciprocate unconditional care. Never feel shamed for our capacity to love without return.","Chinatown should be an evolving, inclusive and open-ended ecosystem for all beings here, and not just a museum of the past.","We are not victims, we are inhabitants, builders, innovators, supporters and investors of our own community.","We need to reimagine new local businesses that foster community support for both old and young immigrants.","How can we make a place for younger people to open their own business in Chinatown?","If you don’t like rats, start helping the community to clean up the streets.","Investing in Chinatown can be as simple as cleaning up streets, visiting the grocery stores, going to local restaurants, buying stuff from local hardwares and donating to local organizations.","Go and ask the elders around you what are the things they’re struggling with recently and help them with that.","What can we do to make Chinatown safer at night? Light it up.","Try to apply what you've learned directly to helping the community.","Speak up our concerns. Make sure that our elected officials are looking out for us, make sure people are reaching across generations and across communities.","Plant a fruit tree in your neighborhood, take care of it with your friends and families, and share the fruits with the people and animals in the community. During which, kinship is built.","We need to build symbiotic relationships and kinships among multiple generations, culture and species. ","Instead of trying to do the right thing out of our own pockets while everything else is going wrong, or there're bigger forces working against us, let’s maybe try to craft a vision together that different groups can all agree on.","Chinatown can be a forward-looking cultural hub with appealing historical landmarks.","We need to amplify to the city what the Chinatown community is going through.","More solidarities and allies need to be built from other communities in order to support our community and the issues that our community is going through.","Voting for politicians is one of the best ways to get ourselves represented, and to get our voices heard and to get them to shape and change policies.","Chinatown would be proud of the people trying to improve the community through volunteer work, being civilly engaged, creating arts and cultural events, cleaning up streets and being supportive of each other.","Chinatown is not mysterious, it’s only mysterious when you don’t want to learn about it at all.","Make Chinatown into a neighborhood where you can leave your doors open for your human and non-human friends.","Chinatown was built upon the marshy land of this once wooded land. What can we do to give back to the land?","Feel comfortable being Asian and Asian Americans.","Pandemic, the construction of mega jails, fire…These are the hard times but also the times that we show our solidarity with the community and opportunities for us to make changes.","There's no way to undo the 'big proposals' that happened to Chinatown, but by putting our efforts into many 'small proposals' rather than saying 'this is what it is', we can have power over our own community.","The organizations of both older and younger generations need to collaborate more closely and be open to each other’s ideas and experiences.","Chinatown needs to get ready to bring back and welcome the return of small businesses, tourists, friendly animals and more green spaces."
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