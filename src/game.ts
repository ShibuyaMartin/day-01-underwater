//MAIN STAGE DAY UNDERWATER

import { isPreviewMode } from "@decentraland/EnvironmentAPI"
import { FestivalManagement } from "./concert/festivalMGMT"

/*
//add fewo

export let fewo = new Entity()
fewo.addComponent(new GLTFShape('models/fewo.glb'))
fewo.addComponent(
  new Transform({
    position: new Vector3(48, 3, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(10,10,10)
  })
)
engine.addEntity(fewo) */


executeTask(async ()=>{
  if(await isPreviewMode()){
    Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, ()=>{
      log("postion", Camera.instance.position)
    })
  }  
})



export let manager = new FestivalManagement()
manager.checkTime()



