//MAIN STAGE DAY UNDERWATER

import { isPreviewMode } from '@decentraland/EnvironmentAPI'
import { FestivalManagement } from './concert/festivalMGMT'
import { scene } from './sceneParent'

//add mushrooms

export let mushrooms = new Entity()
mushrooms.addComponent(new GLTFShape('models/mushrooms.glb'))
mushrooms.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(mushrooms)
mushrooms.setParent(scene)

//add mushrooms_02

export let mushrooms_02 = new Entity()
mushrooms_02.addComponent(new GLTFShape('models/mushrooms_02.glb'))
mushrooms_02.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(mushrooms_02)
mushrooms_02.setParent(scene)
//add mushrooms_03

export let mushrooms_03 = new Entity()
mushrooms_03.addComponent(new GLTFShape('models/mushrooms_03.glb'))
mushrooms_03.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(mushrooms_03)
mushrooms_03.setParent(scene)
//add mushrooms_04

export let mushrooms_04 = new Entity()
mushrooms_04.addComponent(new GLTFShape('models/mushrooms.glb'))
mushrooms_04.addComponent(
  new Transform({
    position: new Vector3(20, 15, 64),
    rotation: Quaternion.Euler(0, 45, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(mushrooms_04)
mushrooms_04.setParent(scene)
//add mushrooms_05

export let mushrooms_05 = new Entity()
mushrooms_05.addComponent(new GLTFShape('models/mushrooms_02.glb'))
mushrooms_05.addComponent(
  new Transform({
    position: new Vector3(90, 30, 60),
    rotation: Quaternion.Euler(0, 145, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(mushrooms_05)
mushrooms_05.setParent(scene)
//add mushrooms_06

export let mushrooms_06 = new Entity()
mushrooms_06.addComponent(new GLTFShape('models/mushrooms_03.glb'))
mushrooms_06.addComponent(
  new Transform({
    position: new Vector3(30, 8, 60),
    rotation: Quaternion.Euler(0, 120, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(mushrooms_06)
mushrooms_06.setParent(scene)
//add mushrooms_07

export let mushrooms_07 = new Entity()
mushrooms_07.addComponent(new GLTFShape('models/mushrooms.glb'))
mushrooms_07.addComponent(
  new Transform({
    position: new Vector3(84, 0, 64),
    rotation: Quaternion.Euler(0, 30, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(mushrooms_07)
mushrooms_07.setParent(scene)
//add bubbles

export let bubbles = new Entity()
bubbles.addComponent(new GLTFShape('models/bubbles.glb'))
bubbles.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(bubbles)
bubbles.setParent(scene)
//add water_fountain

export let water_fountain = new Entity()
water_fountain.addComponent(new GLTFShape('models/water_fountain.glb'))
water_fountain.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(water_fountain)
water_fountain.setParent(scene)


//add plants_stage

export let plants_stage = new Entity()
plants_stage.addComponent(new GLTFShape('models/plants_stage.glb'))
plants_stage.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(plants_stage)
plants_stage.setParent(scene)

// //add stars

// export let stars = new Entity()
// stars.addComponent(new GLTFShape('models/stars.glb'))
// stars.addComponent(
//   new Transform({
//     position: new Vector3(48, 0, 64),
//     rotation: Quaternion.Euler(0, 90, 0),
//     scale: new Vector3(1, 1, 1),
//   })
// )
// engine.addEntity(stars)
// stars.setParent(scene)


// // //add fireworks_01

// export let fireworks_01 = new Entity()
// fireworks_01.addComponent(new GLTFShape('models/firework_01.glb'))
// fireworks_01.addComponent(
//   new Transform({
//     position: new Vector3(48, 0, 64),
//     rotation: Quaternion.Euler(0, 90, 0),
//     scale: new Vector3(1,1,1)
//   })
// )
// engine.addEntity(fireworks_01)

// // //add firework_02

// export let firework_02 = new Entity()
// firework_02.addComponent(new GLTFShape('models/firework_01.glb'))
// firework_02.addComponent(
//   new Transform({
//     position: new Vector3(48, 0, 98),
//     rotation: Quaternion.Euler(0, 90, 0),
//     scale: new Vector3(1,1,1)
//   })
// )
// engine.addEntity(firework_02)

// // //add firework_03

// export let firework_03 = new Entity()
// firework_03.addComponent(new GLTFShape('models/firework_02.glb'))
// firework_03.addComponent(
//   new Transform({
//     position: new Vector3(48, 0, 64),
//     rotation: Quaternion.Euler(0, 90, 0),
//     scale: new Vector3(1,1,1)
//   })
// )
// engine.addEntity(firework_03)

// // //add firework_04

// export let firework_04 = new Entity()
// firework_04.addComponent(new GLTFShape('models/firework_02.glb'))
// firework_04.addComponent(
//   new Transform({
//     position: new Vector3(48, 0, 122),
//     rotation: Quaternion.Euler(0, 90, 0),
//     scale: new Vector3(1,1,1)
//   })
// )
// engine.addEntity(firework_04)

export let manager = new FestivalManagement()
manager.checkTime()

executeTask(async () => {
  if (await isPreviewMode()) {
    Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, () => {
      log('postion', Camera.instance.position)
    })
  }
})
