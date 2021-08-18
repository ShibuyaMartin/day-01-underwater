export let underwater_stage = new Entity()
underwater_stage.addComponent(new GLTFShape('models/underwater_stage.glb'))
underwater_stage.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(underwater_stage)

export let light_01 = new Entity()
light_01.addComponent(new GLTFShape('models/light_01.glb'))
light_01.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(light_01)


export let columns_water = new Entity()
columns_water.addComponent(new GLTFShape('models/columns_water.glb'))
columns_water.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(columns_water)



