//add lights_top

import resources from 'src/resources'

export let lights_top = new Entity()
lights_top.addComponent(new GLTFShape('models/lights_top.glb'))
lights_top.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
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
    scale: new Vector3(1, 1, 1),
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
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(smoke)

//LIGHT SYSTEM
//octopus lights
let lights = new Entity()
lights.addComponent(resources.models.lights)
lights.addComponent(resources.transforms.lights)
engine.addEntity(lights)

lights.addComponent(new Animator())
for (let i = 0; i < resources.animationStates.lights.length; i++) {
  lights
    .getComponent(Animator)
    .addClip(new AnimationState(resources.animationStates.lights[i]))
  lights
    .getComponent(Animator)
    .getClip(resources.animationStates.lights[i])
    .stop()
}

// back lights
let lightsBack = new Entity()
lightsBack.addComponent(resources.models.lightsBack)
lightsBack.addComponent(resources.transforms.lightsBack)
engine.addEntity(lightsBack)

lightsBack.addComponent(new Animator())
for (let i = 0; i < resources.animationStates.lightsBack.length; i++) {
  lightsBack
    .getComponent(Animator)
    .addClip(new AnimationState(resources.animationStates.lightsBack[i]))
  lightsBack
    .getComponent(Animator)
    .getClip(resources.animationStates.lightsBack[i])
    .stop()
}
