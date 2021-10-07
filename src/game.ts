//MAIN STAGE DAY UNDERWATER

import { isPreviewMode } from "@decentraland/EnvironmentAPI"
import { FestivalManagement } from "./concert/festivalMGMT"


//add mushrooms

export let mushrooms = new Entity()
mushrooms.addComponent(new GLTFShape('models/mushrooms.glb'))
mushrooms.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(mushrooms) 


//add mushrooms_02

export let mushrooms_02 = new Entity()
mushrooms_02.addComponent(new GLTFShape('models/mushrooms_02.glb'))
mushrooms_02.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(mushrooms_02) 


//add mushrooms_03

export let mushrooms_03 = new Entity()
mushrooms_03.addComponent(new GLTFShape('models/mushrooms_03.glb'))
mushrooms_03.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(mushrooms_03) 


//add mushrooms_04

export let mushrooms_04 = new Entity()
mushrooms_04.addComponent(new GLTFShape('models/mushrooms.glb'))
mushrooms_04.addComponent(
  new Transform({
    position: new Vector3(20, 15, 64),
    rotation: Quaternion.Euler(0, 45, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(mushrooms_04) 


//add mushrooms_05

export let mushrooms_05 = new Entity()
mushrooms_05.addComponent(new GLTFShape('models/mushrooms_02.glb'))
mushrooms_05.addComponent(
  new Transform({
    position: new Vector3(90, 30, 60),
    rotation: Quaternion.Euler(0, 145, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(mushrooms_05) 


//add mushroom_06

export let mushroom_06 = new Entity()
mushroom_06.addComponent(new GLTFShape('models/mushrooms_03.glb'))
mushroom_06.addComponent(
  new Transform({
    position: new Vector3(30, 8, 60),
    rotation: Quaternion.Euler(0, 120, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(mushroom_06) 



//add mushrooms_07

export let mushrooms_07 = new Entity()
mushrooms_07.addComponent(new GLTFShape('models/mushrooms.glb'))
mushrooms_07.addComponent(
  new Transform({
    position: new Vector3(84, 0, 64),
    rotation: Quaternion.Euler(0, 30, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(mushrooms_07) 


//add bubbles

export let bubbles = new Entity()
bubbles.addComponent(new GLTFShape('models/bubbles.glb'))
bubbles.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(bubbles) 

//add water_fountain 

export let water_fountain = new Entity()
water_fountain.addComponent(new GLTFShape('models/water_fountain.glb'))
water_fountain.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(water_fountain) 

//add lights_top

export let lights_top = new Entity()
lights_top.addComponent(new GLTFShape('models/lights_top.glb'))
lights_top.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(lights_top) 

//add artist names

export let an_nina_nesbitt = new Entity()
an_nina_nesbitt.addComponent(new GLTFShape('models/an_nina_nesbitt.glb'))
an_nina_nesbitt.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(an_nina_nesbitt) 

//add smoke

export let smoke = new Entity()
smoke.addComponent(new GLTFShape('models/smoke.glb'))
smoke.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(smoke) 

//add plants_stage

export let plants_stage = new Entity()
plants_stage.addComponent(new GLTFShape('models/plants_stage.glb'))
plants_stage.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(plants_stage) 




executeTask(async ()=>{
  if(await isPreviewMode()){
    Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, ()=>{
      log("postion", Camera.instance.position)
    })
  }  
})



export let manager = new FestivalManagement()
manager.checkTime()



