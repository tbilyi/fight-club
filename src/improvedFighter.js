class ImprovedFighter extends Fighter{
	doubleHit(enemy, point = 10){
		super.hit(enemy, point*2);
	}
}