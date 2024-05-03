class Sprite{
	constructor(posX, posY, width, height){
		this.posX = posX;
		this.posY = posY;
		this.height = height;
		this.width = width;
		this.draw = function(){}; // 描写する関数
	}
}

class Map{
    constructor(mapdata){
        this.height = mapdata.length;
        this.width = mapdata[0].length;
        this.ids = structuredClone(mapdata); // 複製
    }
}

class ImageBox extends Sprite{
    constructor(posX, posY, width, height, src){
        super(posX, posY, width, height);

        this.img = new Image();
        this.img.src = src;
        this.draw = function(){
			game.data.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);
		};
    }
}

class Button extends Sprite{
    constructor(posX, posY, width, height, text){
        super(posX, posY, width, height);

        this.text = text;
        this.font = "40px sunset";

        this.draw = function(){
            // 背景
            createRoundRectPath(this.posX, this.posY, this.width, this.height, 4);
            game.data.context.fillStyle = "#888";
            game.data.context.fill();


            // 文字
			game.data.context.font = this.font;
            game.data.context.fillStyle = "#FFF";
            game.data.context.textBaseline = "middle"; // 基準をテキストの上下中央に
		    game.data.context.textAlign = "center"; // 基準をテキストの左右中央に
            game.data.context.fillText(this.text, this.posX + this.width/2, this.posY + this.height/2);
		};

        this.onClick = function(){console.log("clicked!");};
    }
    isPointInside(pointX, pointY){
        if(this.posX <= pointX && pointX <= this.posX+this.width && this.posY <= pointY && pointY <= this.posY+this.height){
            return true;
        } else {
            return false;
        }
    }
}