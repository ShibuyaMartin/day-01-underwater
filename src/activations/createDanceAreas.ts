import * as utils from '@dcl/ecs-scene-utils'
import { hud } from '../builderhud/BuilderHUD'
import { triggerEmote, PredefinedEmote } from '@decentraland/RestrictedActions'
import resources from 'src/resources'
import { isPreviewMode } from '@decentraland/EnvironmentAPI'

export function createDanceAreas() {
  for (let i in resources.transforms.danceAreas) {
    let area = new Entity('dance-' + i)
    area.addComponent(
      new Transform(resources.transforms.danceAreas[i].transform)
    )

    executeTask(async () => {
      if (await isPreviewMode()) {
        area.addComponent(new PlaneShape())
      }
    })

    engine.addEntity(area)
    hud.attachToEntity(area)

    let dsystem = new DanceSystem(resources.transforms.danceAreas[i].type)

    area.addComponent(
      new utils.TriggerComponent(
        new utils.TriggerSphereShape(6.5, new Vector3(0, 3, 0)),
        {
          enableDebug: false,
          onCameraEnter: () => {
            engine.addSystem(dsystem)
          },
          onCameraExit: () => {
            engine.removeSystem(dsystem)
          },
        }
      )
    )
  }
}

export class DanceSystem {
  length = 11
  timer = 2
  routine = null

  routines: PredefinedEmote[] = [
    PredefinedEmote.ROBOT,
    PredefinedEmote.TIK,
    PredefinedEmote.TEKTONIK,
    PredefinedEmote.HAMMER,
    PredefinedEmote.HEAD_EXPLODDE,
    PredefinedEmote.HANDS_AIR,
    PredefinedEmote.DISCO,
    PredefinedEmote.DAB,
  ]

  constructor(routine: string) {
    this.routine = routine
  }

  update(dt: number) {
    //log(dt)

    if (this.timer > 0) {
      this.timer -= dt
    } else {
      this.timer = this.length
      if (this.routine == 'all') {
        let rand = Math.floor(Math.random() * (this.routine.length - 0) + 0)
        triggerEmote({ predefined: this.routines[rand] })
      } else {
        triggerEmote({ predefined: this.routine })
      }
    }
  }
}
