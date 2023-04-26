import {Container, Sprite, Texture} from "pixi.js";
/**
 * @author Viacheslav.I.E.
 * @version 1.0
 * @since 08 Октябрь 2023
 */
export class Game extends Container
{
    // Params >>------------------------------------------------------------<<<<

    public static WIDTH:number = 1024;
    public static HEIGHT:number = 768;

    // Init >>--------------------------------------------------------------<<<<

    /**
     * @private
     */
    constructor()
    {
        super();
        this.configurate();
    }

    protected configurate():void
    {
        let bg:Sprite = new Sprite(Texture.WHITE);
        bg.width = Game.WIDTH;
        bg.height = Game.HEIGHT;
        let logo:Sprite = Sprite.from('assets/logo.png');

        this.addChild(bg);
        this.addChild(logo);

        logo.x = Game.WIDTH / 2 - 150;
        logo.y = Game.HEIGHT / 2 - 150;
    }

    // Base >>--------------------------------------------------------------<<<<

    // Events >>------------------------------------------------------------<<<<

    // Private >>-----------------------------------------------------------<<<<
}