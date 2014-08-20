
function createEnemy(enemyDetails){
	var enemy = {};
	enemy.type = enemyDetails.type;
	enemy.live = true;
	enemy.startingX = enemyDetails.startingX;
	enemy.startingY = enemyDetails.startingY;
	enemy.x = enemyDetails.startingX;
	enemy.y = enemyDetails.startingY;
	enemy.width = enemyDetails.startingW;
	enemy.height = enemyDetails.startingH;
	enemy.startingW = enemyDetails.startingW;
	enemy.startingH = enemyDetails.startingH;

	enemy.speed = enemyDetails.speed;
	enemy.AIType = enemyDetails.AIType;
	enemy.health = 100;

	enemy.updateEnemy = function(deltaTime){
		switch(enemy.AIType){
			case 0:
				enemy.x -= enemy.speed*deltaTime;
			break;
			case 1:
				enemy.x -= enemy.speed*deltaTime/0.9;
				enemy.y = enemy.startingY+8*Math.sin(enemy.x/7);
			break;
			default:
				enemy.x -= enemy.speed*deltaTime;
			break;
		}
	};
	enemy.renderEnemy = function(ctx){

		switch(enemy.type){
			case 0:
			console.log(tiles);
				ctx.drawImage(tiles,fireEnemyShipCoords[0],fireEnemyShipCoords[1],enemy.startingW,enemy.startingH,enemy.x,enemy.y,enemy.width,enemy.height);
			break;
			case 1:
				ctx.drawImage(tiles,enemyWaterShipCoords[0],enemyWaterShipCoords[1],enemy.startingW,enemy.startingH,enemy.x,enemy.y,enemy.width,enemy.height);
			break;
			case 2:
				ctx.drawImage(tiles,enemyEarthShipCoords[0],enemyEarthShipCoords[1],enemy.startingW,enemy.startingH,enemy.x,enemy.y,enemy.width,enemy.height);
			break;
			case 3:
				ctx.drawImage(tiles,enemyAirShipCoords[0],enemyAirShipCoords[1],enemy.startingW,enemy.startingH,enemy.x,enemy.y,enemy.width,enemy.height);
			break;
		}
	};

	enemy.doDamage = function(sourceInfo){
		switch(sourceInfo.type){
			case 0:
			break;
			case 1:
			break;
			case 2:
			break;
			case 3:
			break;
			default:
			break;
		}

	};

	enemy.checkCollision = function(collisionRectangle){

	};

	return enemy;
}