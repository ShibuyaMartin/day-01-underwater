import * as utils from '@dcl/ecs-scene-utils'
import { createDanceAreas } from 'src/activations/createDanceAreas'

import resources from 'src/resources'
import { LiveScreen } from './liveScreen'

export class FestivalManagement {
  liveScreens: LiveScreen[] = []
  stage: Entity
  videoMat = new Material()

  lights: Entity
  lightsBack: Entity
  lightsColumns: Entity
  waterColumns: Entity

  fishA: Entity
  fishB: Entity

  constructor() {
    this.createStage()
    this.createEnvironment()
    this.createActivations()
    this.createScreens()
  }

  createStage() {
    this.stage = new Entity()
    this.stage.addComponent(resources.models.stage)
    this.stage.addComponent(resources.transforms.stage)
    engine.addEntity(this.stage)

    this.waterColumns = new Entity()
    this.waterColumns.addComponent(resources.models.waterColumns)
    this.waterColumns.addComponent(resources.transforms.waterColumns)
    engine.addEntity(this.waterColumns)

    // this.waterColumns.addComponent(new Animator())
    // for (let i = 0; i < resources.animationStates.waterColumns.length; i++) {
    //   this.waterColumns
    //     .getComponent(Animator)
    //     .addClip(new AnimationState(resources.animationStates.waterColumns[i]))
    //   this.waterColumns
    //     .getComponent(Animator)
    //     .getClip(resources.animationStates.waterColumns[i])
    //     .stop()
    // }
  }

  createActivations() {
    createDanceAreas()
  }

  createEnvironment() {
    // JP FISHES

    //add fish A
    this.fishA = new Entity()
    this.fishA.addComponent(resources.models.fishA)
    this.fishA.addComponent(resources.transforms.fishA)
    engine.addEntity(this.fishA)

    //add fish B
    this.fishB = new Entity()
    this.fishB.addComponent(resources.models.fishB)
    this.fishB.addComponent(resources.transforms.fishB)
    engine.addEntity(this.fishB)
  }

  createScreens() {
    texture: VideoTexture
    const circle = new Texture('src/concert/images/circle_mask.png')

    this.videoMat = new Material()
    this.videoMat.alphaTexture = circle
    this.videoMat.emissiveIntensity = 3
    this.videoMat.emissiveColor = Color3.White()
    this.videoMat.roughness = 0
    this.videoMat.specularIntensity = 1
    this.videoMat.transparencyMode = 2

    for (let i in resources.transforms.screens) {
      this.liveScreens.push(
        new LiveScreen(
          'screen-' + i,
          resources.transforms.screens[i],
          this.videoMat
        )
      )
    }
  }

  //   showVideoFeeds(
  //     showAll: boolean,
  //     allFeed?: string,
  //     screens?: LiveScreen[],
  //     feeds?: string[]
  //   ) {
  //     if (showAll) {
  //       let newTexture = new VideoTexture(new VideoClip(allFeed))
  //       for (let i = 0; i < this.liveScreens.length; i++) {
  //         this.liveScreens[i].setVideoFeed(newTexture)
  //       }
  //     }
  //   }

  checkTime() {
    //for testing, delay 5 seconds
    let delay = new Entity()
    engine.addEntity(delay)
    delay.addComponent(
      new utils.Delay(5000, () => {
        this.activateScene()
      })
    )
  }

  activateScene() {
    //show videos
    this.activateScreens()

    //activate environment
    this.activateEnvironment()
  }

  activateScreens() {
    // this.showVideoFeeds(
    //   true,
    //   'https://dclteam.s3.us-west-1.amazonaws.com/ko5.mp4'
    // )

    for (let i in resources.transforms.screens) {
      this.liveScreens[i].getComponent(Transform).scale = new Vector3(
        resources.transforms.screens[i].scale.x,
        resources.transforms.screens[i].scale.y,
        resources.transforms.screens[i].scale.z
      )
    }
  }

  activateEnvironment() {
    this.fishA.getComponent(Transform).scale.setAll(1)
    this.fishB.getComponent(Transform).scale.setAll(1)
  }
}
