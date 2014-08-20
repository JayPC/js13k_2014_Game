
function createBullet(bulletDetails){
	var bullet = {};
	bullet.type = bulletDetails.type;
	bullet.live = true;
	bullet.liveTime = bulletDetails.liveTime;
	bullet.liveMaxTime = bulletDetails.liveMaxTime;
	bullet.startingX = bulletDetails.startingX;
	bullet.startingY = bulletDetails.startingY;
	bullet.x = bulletDetails.startingX;
	bullet.y = bulletDetails.startingY;
	bullet.startingW = bulletDetails.startingW;
	bullet.startingH = bulletDetails.startingH;
	bullet.width = bulletDetails.startingW;
	bullet.height = bulletDetails.startingH;
	bullet.speed = bulletDetails.speed;
	bullet.ySpeed = bulletDetails.rockSpeed;
	bullet.updateBullet = function(deltaTime){
		switch(bullet.type){
			case 0:
				bullet.x += bullet.speed*deltaTime;
			break;
			case 1:
				bullet.x += bullet.speed*deltaTime/1.3;
				bullet.y = bullet.startingY+8*Math.sin(bullet.x/7);
			break;
			case 2:
				bullet.x += bullet.speed*deltaTime;
				bullet.y += bullet.ySpeed*deltaTime;
			break;
			case 3:
				bullet.x += bullet.speed*deltaTime;
				bullet.y -= deltaTime*3;
				bullet.height += deltaTime*6;
				bullet.width += deltaTime*6;
			break;
			default:
				bullet.live = false;
			break;
		}

		if(bullet.liveTime <= 0){
			bullet.live = false;
		}else{
			bullet.liveTime -= deltaTime;
		}
	};




	bullet.renderBullet = function(ctx){
			switch(bullet.type){
				case 0:
			ctx.drawImage(tiles,fireBulletCoords[0],fireBulletCoords[1],
				bullet.startingW,bullet.startingH,
				bullet.x,bullet.y
				,bullet.width,bullet.height);
				break; 
				case 1:
			ctx.drawImage(tiles,waterBulletCoords[0],waterBulletCoords[1],
				bullet.startingW,bullet.startingH,
				bullet.x,bullet.y
				,bullet.width,bullet.height);
				break;
				case 2:
			ctx.drawImage(tiles,earthBulletCoords[0],earthBulletCoords[1],
				bullet.startingW,bullet.startingH,
				bullet.x,bullet.y
				,bullet.width,bullet.height);
				break;
				case 3:
			ctx.drawImage(tiles,airBulletCoords[0],airBulletCoords[1],
				bullet.startingW-0.1,bullet.startingH,
				bullet.x,bullet.y
				,bullet.width,bullet.height);
				break;
			}
	};

	return bullet;
}