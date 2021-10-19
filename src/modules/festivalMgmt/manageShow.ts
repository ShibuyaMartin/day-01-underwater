import {
  an_3lau,
  an_benji,
  an_colours,
  an_nina,
  an_rac,
  an_tapes,
  fireworkCenterL,
  fireworkCenterR,
  fireworkL,
  fireworkR,
  lights_back,
  lights_columns,
  lights_top,
  nina_emojis,
  nina_hearts,
  nina_logo,
  nina_welcome,
  smoke,
  tentacles,
} from '../animatedEntities'
import * as utils from '@dcl/ecs-scene-utils'

// Default beats per minute of show
export let BPM = 120

export enum STAGE_IDS {
  WORLD,
  EVOLUTION,
}
export const STAGE_ID = STAGE_IDS.EVOLUTION

let tentaclesOut: boolean = false
// NOTE: STOPALL, PAUSEALL and default must always exist

/// Run actions
export function runAction(action: string) {
  switch (action) {
    case 'STOPALL':
      runAction('PAUSEALL')
      if (RandomizerSystem._instance) {
        RandomizerSystem._instance.active = false
      }
      if (tentacles.hasComponent(utils.Delay)) {
        tentacles.removeComponent(utils.Delay)
      }
      tentaclesOut = false
      tentacles.playAnimation('TL_Neutral')
      break
    case 'PAUSEALL':
      //   tentacles.stopAllAnimations()
      if (!tentaclesOut) {
        tentacles.playAnimation('TL_Neutral')
      }

      lights_back.playAnimation('Lights_01_Action')
      lights_top.playAnimation('SL_V01')
      //   lights_top.stopAllAnimations()
      lights_columns.hide()
      smoke.hide()
      fireworkCenterL.hide()
      fireworkCenterR.hide()
      fireworkL.hide()
      fireworkR.hide()

      nina_logo.hide()
      nina_welcome.hide()
      nina_hearts.hide()
      nina_emojis.hide()
      break

    case 'TL_Rise':
      tentaclesOut = true
      tentacles.playAnimation('TL_Rise', true, 2.5)
      if (tentacles.hasComponent(utils.Delay)) {
        tentacles.removeComponent(utils.Delay)
      }
      tentacles.addComponentOrReplace(
        new utils.Delay(2500, () => {
          tentacles.playAnimation('TL_V01', false, 0, BPM / 120)
        })
      )
      break
    case 'TL_V01':
      tentaclesOut = true
      tentacles.playAnimation('TL_V01', false, 0, BPM / 120)
      break
    case 'TL_V02':
      tentaclesOut = true
      tentacles.playAnimation('TL_V02', false, 0, BPM / 120)
      break
    case 'TL_V03':
      tentaclesOut = true
      tentacles.playAnimation('TL_V03', false, 0, BPM / 120)
      break
    case 'TL_V04':
      tentaclesOut = true
      tentacles.playAnimation('TL_V04', false, 0, BPM / 120)
      break
    case 'TL_V05':
      tentaclesOut = true
      tentacles.playAnimation('TL_V05', false, 0, BPM / 120)
      break
    case 'TL_V06':
      tentaclesOut = true
      tentacles.playAnimation('TL_V06', false, 0, BPM / 120)
      break
    case 'TL_V07':
      tentaclesOut = true
      tentacles.playAnimation('TL_V07', false, 0, BPM / 120)
      break

    case 'TL_Neutral':
      tentaclesOut = false
      tentacles.playAnimation('TL_Neutral', true)
      break
    case 'Smoke_Neutral':
      smoke.playAnimation('Smoke_Neutral')
      break

    case 'Smoke_V01':
      smoke.playAnimation('Smoke_V01', false, 0, BPM / 120)
      break

    case 'Smoke_V02':
      smoke.playAnimation('Smoke_V02', false, 0, BPM / 120)
      break

    case 'Light_01_Action':
      lights_back.playAnimation('Light_01_Action', false, 0, BPM / 120)
      break

    case 'Light_02_Action':
      lights_back.playAnimation('Light_02_Action', false, 0, BPM / 120)
      break

    case 'Light_03_Action':
      lights_back.playAnimation('Light_03_Action', false, 0, BPM / 120)
      break

    case 'Beat_V01':
      lights_columns.playAnimation('Beat_V01', false, 0, BPM / 120)
      break

    case 'Beat_V02':
      lights_columns.playAnimation('Beat_V02', false, 0, BPM / 120)
      break

    case 'Beat_V03':
      lights_columns.playAnimation('Beat_V03', false, 0, BPM / 120)
      break

    case 'Beat_V04':
      lights_columns.playAnimation('Beat_V04', false, 0, BPM / 120)
      break

    case 'SL_V01':
      lights_top.playAnimation('SL_V01', false, 0, BPM / 120)
      break

    case 'SL_V02':
      lights_top.playAnimation('SL_V02', false, 0, BPM / 120)
      break

    case 'SL_V03':
      lights_top.playAnimation('SL_V03', false, 0, BPM / 120)
      break

    case 'SL_V04':
      lights_top.playAnimation('SL_V04', false, 0, BPM / 120)
      break

    case 'Nina_Logo_Action':
      nina_logo.playAnimation('Nina_Logo_Action', true, 0, BPM / 120)
      break

    case 'Welcome_Action':
      nina_welcome.playAnimation('Welcome_Action', true, 0, BPM / 120)
      break

    case 'Hearts_Action':
      nina_hearts.playAnimation('Hearts_Action', true, 0, BPM / 120)
      break

    case 'Emojis_Action':
      nina_emojis.playAnimation('Emojis_Action', true, 0, BPM / 120)
      break

    case 'circleBubbles':
      //TODO
      break

    case 'fireworkCenterL':
      fireworkCenterL.playAnimation('Play', true, 0, BPM / 120)
      break

    case 'fireworkCenterR':
      fireworkCenterR.playAnimation('Play', true, 0, BPM / 120)
      break

    case 'fireworkR':
      fireworkR.playAnimation('Play', true, 0, BPM / 120)
      break

    case 'fireworkL':
      fireworkL.playAnimation('Play', true, 0, BPM / 120)
      break

    case 'fireworkAll':
      fireworkCenterL.playAnimation('Play', true, 0, BPM / 120)
      fireworkCenterR.playAnimation('Play', true, 0, BPM / 120)
      fireworkR.playAnimation('Play', true, 0, BPM / 120)
      fireworkL.playAnimation('Play', true, 0, BPM / 120)
      break

    case 'TL_rdm1':
      randomizer([`TL_V01`, `TL_V02`, `TL_V03`], 8)
      break
    case 'TL_rdm2':
      randomizer([`TL_V04`, `TL_V05`, `TL_V06`, `TL_V07`], 8)
      break
    case 'TL_rdm3':
      randomizer(
        [`TL_V01`, `TL_V02`, `TL_V03`, `TL_V04`, `TL_V05`, `TL_V06`, `TL_V07`],
        8
      )
      break
    case 'Smoke_rdm':
      randomizer([`Smoke_V01`, `Smoke_V02`], 8)
      break
    case 'Beat_rdm1':
      randomizer([`Beat_V01`, `Beat_V02`], 8)
      break

    case 'Beat_rdm2':
      randomizer([`Beat_V03`, `Beat_V04`], 8)
      break
    case 'Beat_rdm3':
      randomizer([`Beat_V01`, `Beat_V02`, `Beat_V03`, `Beat_V04`], 8)
      break

    case 'SL_rdm1':
      randomizer([`SL_V01`, `SL_V02`], 8)
      break
    case 'SL_rdm2':
      randomizer([`SL_V03`, `SL_V04`], 8)
      break
    case 'SL_rdm3':
      randomizer([`SL_V01`, `SL_V02`, `SL_V03`, `SL_V04`], 8)
      break

    // TODO:
    // fireworks

    // case 'randomL2L3':
    //   randomizer([`L2`, `L3`], 8)
    //   break

    // case 'randomL4L5':
    //   randomizer([`L4`, `L5`], 8)
    //   break

    // case 'randomL6L7':
    //   randomizer([`L6`, `L7`], 8)
    //   break

    case 'artist0':
      an_3lau.hide()
      an_tapes.hide()
      an_benji.hide()
      an_nina.hide()
      an_rac.hide()
      an_colours.hide()
      break

    case 'artist1':
      an_3lau.hide()
      an_tapes.appear()
      an_benji.hide()
      an_nina.hide()
      an_rac.hide()
      an_colours.hide()
      break

    case 'artist2':
      an_3lau.hide()
      an_tapes.hide()
      an_benji.appear()
      an_nina.hide()
      an_rac.hide()
      an_colours.hide()
      break

    case 'artist3':
      an_3lau.hide()
      an_tapes.hide()
      an_benji.hide()
      an_nina.hide()
      an_rac.hide()
      an_colours.appear()
      break

    case 'artist4':
      an_3lau.hide()
      an_tapes.hide()
      an_benji.hide()
      an_nina.hide()
      an_rac.appear()
      an_colours.hide()
      break

    case 'artist5':
      an_3lau.appear()
      an_tapes.hide()
      an_benji.hide()
      an_nina.hide()
      an_rac.hide()
      an_colours.hide()
      break

    case 'artist6':
      an_3lau.hide()
      an_tapes.hide()
      an_benji.hide()
      an_nina.appear()
      an_rac.hide()
      an_colours.hide()
      break

    case 'artist7':
      break

    default:
      // check if starts with BPM
      if (action.substring(0, 3) == 'BPM') {
        // Change BPM
        BPM = parseFloat(action.substring(3))
        if (RandomizerSystem._instance) {
          RandomizerSystem._instance.reset()
        }

        log('SET BPM TO ', BPM)
      }

      break
  }
}

//let currentAnim = 1

// const input = Input.instance

// input.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
//   //step to next ID
//   currentAnim += 1

//   log('Playing Anim L' + (currentAnim - 1))

//   runAction('state'.concat(currentAnim.toString()))
// })

//// RANDOMIZER

export function randomizer(animations: string[], beats = 8) {
  RandomizerSystem.createAndAddToEngine()
  RandomizerSystem._instance.events = animations
  RandomizerSystem._instance.start()
}

export class RandomizerSystem implements ISystem {
  static _instance: RandomizerSystem | null = null

  timer: number = 0
  beats: number = 8
  events: string[]
  lastPlayed: number | null = null

  active: boolean = false

  static createAndAddToEngine(): RandomizerSystem {
    if (this._instance == null) {
      this._instance = new RandomizerSystem()
      engine.addSystem(this._instance)
    }
    return this._instance
  }

  private constructor() {
    RandomizerSystem._instance = this
  }

  update(dt: number) {
    if (!this.active) return

    this.timer += dt
    if (this.timer > (BPM / 60) * this.beats) {
      this.timer = 0
      this.playRandomAction()
    }
  }
  start() {
    this.active = true
    this.timer = 0
    this.playRandomAction()
  }
  playRandomAction() {
    let randomIndex = Math.floor(Math.random() * this.events.length)
    // log('New random animation ', randomIndex, this.events[randomIndex])
    if (this.lastPlayed && this.lastPlayed == randomIndex) {
      return
    } else if (this.lastPlayed) {
      runAction('PAUSEALL')
    }
    runAction(this.events[randomIndex])
    this.lastPlayed = randomIndex
  }
  stop() {
    this.active = false
    if (this.lastPlayed) {
      runAction('STOPALL')
    }
  }
  reset() {
    if (this.active) {
      this.timer = 0
      if (this.lastPlayed) {
        // make sure any looping animations go with the new BPM
        runAction(this.events[this.lastPlayed])
      }
    }
  }
}
