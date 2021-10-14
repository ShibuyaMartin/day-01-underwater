import {
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
      lights_columns.hide()
      lights_back.hide()
      lights_top.hide()
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
      tentacles.playAnimation('TL_Rise', true)
      break
    case 'TL_VO1':
      tentacles.playAnimation('TL_VO1')
      break
    case 'TL_VO2':
      tentacles.playAnimation('TL_VO2')
      break
    case 'TL_VO3':
      tentacles.playAnimation('TL_VO3')
      break
    case 'TL_VO4':
      tentacles.playAnimation('TL_VO4')
      break
    case 'TL_VO5':
      tentacles.playAnimation('TL_VO5')
      break
    case 'TL_VO6':
      tentacles.playAnimation('TL_VO6')
      break
    case 'TL_VO7':
      tentacles.playAnimation('TL_VO7')
      break
    case 'Smoke_Neutral':
      smoke.playAnimation('Smoke_Neutral')
      break

    case 'Smoke_V01':
      smoke.playAnimation('Smoke_V01')
      break

    case 'Smoke_V02':
      smoke.playAnimation('Smoke_V02')
      break

    case 'Smoke_V02':
      smoke.playAnimation('Smoke_V02')
      break

    case 'Lights_01_Action':
      lights_back.playAnimation('Lights_01_Action')
      break

    case 'Lights_02_Action':
      lights_back.playAnimation('Lights_02_Action')
      break

    case 'Lights_03_Action':
      lights_back.playAnimation('Lights_03_Action')
      break

    case 'Beat_V01':
      lights_columns.playAnimation('Beat_V01')
      break

    case 'Beat_V02':
      lights_columns.playAnimation('Beat_V02')
      break

    case 'Beat_V03':
      lights_columns.playAnimation('Beat_V03')
      break

    case 'Beat_V04':
      lights_columns.playAnimation('Beat_V04')
      break

    case 'SL_V01':
      lights_columns.playAnimation('SL_V01')
      break

    case 'SL_V02':
      lights_columns.playAnimation('SL_V02')
      break

    case 'SL_V03':
      lights_columns.playAnimation('SL_V03')
      break

    case 'SL_V04':
      lights_columns.playAnimation('SL_V04')
      break

    case 'Nina_Logo_Action':
      nina_logo.playAnimation('Nina_Logo_Action', true)
      break

    case 'Welcome_Action':
      nina_welcome.playAnimation('Welcome_Action', true)
      break

    case 'Hearts_Action':
      nina_hearts.playAnimation('Hearts_Action', true)
      break

    case 'Emojis_Action':
      nina_emojis.playAnimation('Emojis_Action', true)
      break

    case 'circleBubbles':
      //TODO
      break

    // TODO:
    // fireworks
    // other artist names

    case 'randomL2L3':
      randomizer([`L2`, `L3`], 8)
      break

    case 'randomL4L5':
      randomizer([`L4`, `L5`], 8)
      break

    case 'randomL6L7':
      randomizer([`L6`, `L7`], 8)
      break

    case 'artist0':
      break

    case 'artist1':
      break

    case 'artist2':
      break

    case 'artist3':
      break

    case 'artist4':
      break

    case 'artist5':
      break

    case 'artist6':
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
