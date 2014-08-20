
function createEnemy(enemyDetails){
	var enemy = {};
	enemy.type = enemyDetails.type;
	enemy.live = true;
	enemy.x = enemyDetails.startingX;
	enemy.y = enemyDetails.startingY;
	enemy.width = enemyDetails.startingW;
	enemy.height = enemyDetails.startingH;
	enemy.speed = enemyDetails.speed;
	enemy.updateEnemy = function(deltaTime){
			enemy.x -= enemy.speed*deltaTime;
	};


	enemy.renderEnemy = function(ctx){
		ctx.drawImage(tiles,fireBulletCoords[0],fireBulletCoords[1],
				bullet.startingW,bullet.startingH,
				bullet.x,bullet.y
				,bullet.width,bullet.height);
	};



	return enemy;
}