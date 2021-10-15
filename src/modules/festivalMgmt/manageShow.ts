import {
  an_3lau,
  an_amber,
  an_benji,
  an_nina,
  an_rac,
  an_wombats,
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

// NOTE: STOPALL, PAUSEALL and default must always exist

/// Run actions
export function runAction(action: string) {
  switch (action) {
    case 'STOPALL':
      runAction('PAUSEALL')
      if (RandomizerSystem._instance) {
        RandomizerSystem._instance.active = false
      }

      break
    case 'PAUSEALL':
      tentacles.playAnimation('TL_Neutral')
      lights_back.playAnimation('Lights_01_Action')
      lights_top.playAnimation('SL_V01')
      lights_top.stopAllAnimations()
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

    case 'TL_Rise':
      tentacles.playAnimation('TL_Rise', true, 2.5)
      utils.setTimeout(2500, () => {
        runAction('TL_VO1')
      })
      break
    case 'TL_VO1':
      tentacles.playAnimation('TL_VO1', false, 0, BPM / 120)
      break
    case 'TL_VO2':
      tentacles.playAnimation('TL_VO2', false, 0, BPM / 120)
      break
    case 'TL_VO3':
      tentacles.playAnimation('TL_VO3', false, 0, BPM / 120)
      break
    case 'TL_VO4':
      tentacles.playAnimation('TL_VO4', false, 0, BPM / 120)
      break
    case 'TL_VO5':
      tentacles.playAnimation('TL_VO5', false, 0, BPM / 120)
      break
    case 'TL_VO6':
      tentacles.playAnimation('TL_VO6', false, 0, BPM / 120)
      break
    case 'TL_VO7':
      tentacles.playAnimation('TL_VO7', false, 0, BPM / 120)
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

    case 'Smoke_V02':
      smoke.playAnimation('Smoke_V02', false, 0, BPM / 120)
      break

    case 'Lights_01_Action':
      lights_back.playAnimation('Lights_01_Action', false, 0, BPM / 120)
      break

    case 'Lights_02_Action':
      lights_back.playAnimation('Lights_02_Action', false, 0, BPM / 120)
      break

    case 'Lights_03_Action':
      lights_back.playAnimation('Lights_03_Action', false, 0, BPM / 120)
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
      an_amber.hide()
      an_benji.hide()
      an_nina.hide()
      an_rac.hide()
      an_wombats.hide()
      break

    case 'artist1':
      an_3lau.hide()
      an_amber.appear()
      an_benji.hide()
      an_nina.hide()
      an_rac.hide()
      an_wombats.hide()
      break

    case 'artist2':
      an_3lau.hide()
      an_amber.hide()
      an_benji.appear()
      an_nina.hide()
      an_rac.hide()
      an_wombats.hide()
      break

    case 'artist3':
      an_3lau.hide()
      an_amber.hide()
      an_benji.hide()
      an_nina.hide()
      an_rac.hide()
      an_wombats.appear()
      break

    case 'artist4':
      an_3lau.hide()
      an_amber.hide()
      an_benji.hide()
      an_nina.hide()
      an_rac.appear()
      an_wombats.hide()
      break

    case 'artist5':
      an_3lau.appear()
      an_amber.hide()
      an_benji.hide()
      an_nina.hide()
      an_rac.hide()
      an_wombats.hide()
      break

    case 'artist6':
      an_3lau.hide()
      an_amber.hide()
      an_benji.hide()
      an_nina.appear()
      an_rac.hide()
      an_wombats.hide()
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
