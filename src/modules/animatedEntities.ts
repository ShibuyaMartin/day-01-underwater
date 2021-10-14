//add lights_top

import resources from 'src/resources'
import { Synced } from './syncable'

export let tentacles = new Synced(
  resources.models.tentacles,
  true,
  resources.transforms.tentacles
)

tentacles.playAnimation('TL_Neutral')

export let lights_columns = new Synced(
  resources.models.lightsColumns,
  true,
  resources.transforms.lightsColumns
)

export let lights_back = new Synced(
  resources.models.lightsBack,
  true,
  resources.transforms.lightsBack
)

export let lights_top = new Synced(
  resources.models.lightsTop,
  true,
  resources.transforms.lightsTop
)

export let smoke = new Synced(
  resources.models.smoke,
  true,
  resources.transforms.smoke
)

export let nina_logo = new Synced(
  new GLTFShape('models/nina_logo.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

export let nina_welcome = new Synced(
  new GLTFShape('models/nina_welcome.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

export let nina_hearts = new Synced(
  new GLTFShape('models/nina_hearts.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

export let nina_emojis = new Synced(
  new GLTFShape('models/nina_emojis.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

export let fireworkCenterL = new Synced(
  new GLTFShape('models/firework_01.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

export let fireworkCenterR = new Synced(
  new GLTFShape('models/firework_02.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

export let fireworkL = new Synced(
  new GLTFShape('models/firework_03.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

export let fireworkR = new Synced(
  new GLTFShape('models/firework_04.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

/// Names of other artists
