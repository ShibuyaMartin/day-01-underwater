import { hud } from 'src/builderhud/BuilderHUD'
import { PlaneUVData } from 'src/modules/uvData'
import { scene } from 'src/sceneParent'

export class LiveScreen extends Entity {
  constructor(
    name: string,
    tranform: TranformConstructorArgs,
    material: Material,
    uvData: PlaneUVData
  ) {
    super(name)

    this.setParent(scene)
    engine.addEntity(this)
    this.addComponent(material)
    this.addComponent(new Transform(tranform))
    this.getComponent(Transform).scale = new Vector3(0, 0, 0)
    this.addComponent(new PlaneShape())
    if(uvData){
      this.getComponent(PlaneShape).uvs = [
        
          uvData.uv00.x,
          uvData.uv00.y,
    
          uvData.uv10.x,
          uvData.uv10.y,
    
          uvData.uv11.x,
          uvData.uv11.y,
    
          uvData.uv01.x,
          uvData.uv01.y,
        //----
          uvData.uv00.x,
          uvData.uv00.y,
      
          uvData.uv10.x,
          uvData.uv10.y,
    
          uvData.uv11.x,
          uvData.uv11.y,
    
          uvData.uv01.x,
          uvData.uv01.y
        ]
    }
    
    
    hud.attachToEntity(this)
  }

  //   setVideoFeed(texture: VideoTexture) {
  //     this.getComponent(Material).albedoTexture = texture
  //     this.getComponent(Material).emissiveTexture = texture
  //   }
}
