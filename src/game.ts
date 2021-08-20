//MAIN STAGE DAY UNDERWATER

export let underwater_stage = new Entity()
underwater_stage.addComponent(new GLTFShape('models/underwater_stage.glb'))
underwater_stage.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(underwater_stage)

//LIGHT SYSTEM

//octopus lights
export let light_01 = new Entity()
light_01.addComponent(new GLTFShape('models/light_01.glb'))
light_01.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(light_01)

// back lights

export let lights_back = new Entity()
lights_back.addComponent(new GLTFShape('models/lights_back.glb'))
lights_back.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(lights_back)


//add water colums & lights

export let columns_water = new Entity()
columns_water.addComponent(new GLTFShape('models/columns_water.glb'))
columns_water.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(columns_water)

export let lights_colums = new Entity()
lights_colums.addComponent(new GLTFShape('models/lights_colums.glb'))
lights_colums.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(lights_colums)


//add fish A

export let fishA = new Entity()
fishA.addComponent(new GLTFShape('models/fishA.glb'))
fishA.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(fishA)

//add fish B

export let fishB = new Entity()
fishB.addComponent(new GLTFShape('models/fishB.glb'))
fishB.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(fishB)


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
engine.addEntity(fewo)