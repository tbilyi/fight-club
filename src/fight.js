async function fight(fighter, improvedFighter, points) {
	console.info("%c The battle has begun ", 'background: #222; color: #bada55;');
	let result = "draw";
	for ( let i=0; i<points.length; i++){
		console.info(`%c Round ${i+1} - FIGHT!`, 'color: blue;');
		fighter.hit( improvedFighter, points[i] );
		if( 0>= improvedFighter.healthValue ){
			result = await improvedFighter.knockout() + fighter.name + " won!";
			break;
		}
		improvedFighter.doubleHit(fighter, points[i]);
		if( 0>= fighter.healthValue ){
			result = await fighter.knockout() + improvedFighter.name + " won!";;
			break;
		}
	}

	console.info(`%c ${result}`,  'background: #C3D149; color: #B4C5B4F;');
}


