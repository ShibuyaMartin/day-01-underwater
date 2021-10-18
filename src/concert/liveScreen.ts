import { hud } from 'src/builderhud/BuilderHUD'
import { scene } from 'src/sceneParent'

export class LiveScreen extends Entity {
  constructor(
    name: string,
    tranform: TranformConstructorArgs,
    material: Material
  ) {
    super(name)

    this.setParent(scene)
    engine.addEntity(this)
    this.addComponent(material)
    this.addComponent(new Transform(tranform))
    this.getComponent(Transform).scale = new Vector3(0, 0, 0)
    this.addComponent(new PlaneShape())
    hud.attachToEntity(this)
  }

  //   setVideoFeed(texture: VideoTexture) {
  //     this.getComponent(Material).albedoTexture = texture
  //     this.getComponent(Material).emissiveTexture = texture
  //   }
}
