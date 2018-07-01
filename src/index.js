let fighterParams = ['Knight', 1000, 17],
	improvedFighterParams = ['Daemon', 1500, 8];

const fighter = new Fighter(...fighterParams),
	improvedFighter = new ImprovedFighter(...improvedFighterParams);
fight(fighter, improvedFighter, points = [20, 13, 45]);