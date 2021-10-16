//add lights_top

import resources from 'src/resources'
import { Synced } from './syncable'

export let tentacles = new Synced(
  resources.models.tentacles,
  false,
  resources.transforms.tentacles,
  'TL_Neutral'
)

// tentacles.playAnimation('TL_Neutral')

export let lights_columns = new Synced(
  resources.models.lightsColumns,
  true,
  resources.transforms.lightsColumns
)

export let lights_back = new Synced(
  resources.models.lightsBack,
  false,
  resources.transforms.lightsBack
)
lights_back.playAnimation('Light_01_Action')

export let lights_top = new Synced(
  resources.models.lightsTop,
  false,
  resources.transforms.lightsTop
)
lights_top.playAnimation('SL_V01')
lights_top.stopAllAnimations()

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
  new GLTFShape('models/firework_01.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64 + 33),
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
  new GLTFShape('models/firework_03.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64 + 92 - 35),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)

/// Names of other artists

export let an_3lau = new Synced(
  new GLTFShape('models/an_3lau.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
export let an_amber = new Synced(
  new GLTFShape('models/an_amber_van_day.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
export let an_benji = new Synced(
  new GLTFShape('models/an_benji_patterson.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
export let an_nina = new Synced(
  new GLTFShape('models/an_nina_nesbitt.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
export let an_rac = new Synced(
  new GLTFShape('models/an_rac.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
export let an_wombats = new Synced(
  new GLTFShape('models/an_the_wombats.glb'),
  true,
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(1, 1, 1),
  })
)
