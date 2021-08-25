import { hud } from "src/builderhud/BuilderHUD"



export class LiveScreen extends Entity{

    texture:VideoTexture
    circle = new Texture("src/concert/images/circle_mask.png")

    constructor(name:string, tranform: TranformConstructorArgs){
        super(name)

        engine.addEntity(this)
        this.addComponent(new Material())
        this.addComponent(new Transform(tranform))
        this.getComponent(Transform).scale = new Vector3(0,0,0)
        this.addComponent(new PlaneShape())
        hud.attachToEntity(this)
    }


    setVideoFeed(texture: VideoTexture, startLive:boolean){
        this.texture = texture
        this.getComponent(Material).albedoTexture = this.texture
        this.getComponent(Material).emissiveColor
        this.getComponent(Material).alphaTexture = this.circle
        startLive ? this.texture.playing = true : this.texture.playing = false
    }
}