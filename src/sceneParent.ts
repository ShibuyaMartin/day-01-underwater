export let scene = new Entity()
scene.addComponent(
  new Transform({
    position: new Vector3(0, 0, 8 * 16),
    rotation: Quaternion.Euler(0, 90, 0),
  })
)
engine.addEntity(scene)
