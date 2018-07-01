class  Fighter {
	constructor(name = 'fighter', health = 100, power = 10) {
	this.name = name;
	this._health = health;
	this._power = power;
	}
	setDamage(damage = 10) {
		this._health -= damage;
		if( 0 < this._health){
			console.info( `${this.name}'s health left - ${this._health}`);
		} else {
			console.info( `${this.name}'s has been knockouted` );
		}

	}
	hit(enemy, point = 10) {
		let damage = point * this._power;
		console.log( `${enemy.name} has been hit and got ${damage} damage` );
		enemy.setDamage(damage);
	}
	knockout() {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log('%c time is over', 'color: #D16149;')
				resolve( `${this.name} has been defeated! ` );
			}, 500);
		});
	}
	get healthValue(){
		return this._health;
	}
};


