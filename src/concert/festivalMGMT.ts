
import * as utils from '@dcl/ecs-scene-utils'
import { createDanceAreas } from 'src/activations/createDanceAreas'

import resources from "src/resources"
import { LiveScreen } from "./liveScreen"



export class FestivalManagement{

    liveScreens:LiveScreen[] = []
    stage:Entity

    lights:Entity
    lightsBack:Entity
    lightsColumns:Entity
    waterColumns:Entity

    fishA:Entity
    fishB:Entity


constructor(){

    this.createStage()
    this.createEnvironment()
    this.createActivations()
    this.createScreens()
}

createStage(){

    this.stage = new Entity()
    this.stage.addComponent(resources.models.stage)
    this.stage.addComponent(resources.transforms.stage)
    engine.addEntity(this.stage)


    //LIGHT SYSTEM
    //octopus lights
    this.lights = new Entity()
    this.lights.addComponent(resources.models.lights)
    this.lights.addComponent(resources.transforms.lights)
    engine.addEntity(this.lights)

    this.lights.addComponent(new Animator())
    for(let i = 0; i < resources.animationStates.lights.length; i++){
        this.lights.getComponent(Animator).addClip(new AnimationState(resources.animationStates.lights[i]))
        this.lights.getComponent(Animator).getClip(resources.animationStates.lights[i]).stop()
    }

    // back lights
    this.lightsBack = new Entity()
    this.lightsBack.addComponent(resources.models.lightsBack)
    this.lightsBack.addComponent(resources.transforms.lightsBack)
    engine.addEntity(this.lightsBack)

    this.lightsBack.addComponent(new Animator())
    for(let i = 0; i < resources.animationStates.lightsBack.length; i++){
        this.lightsBack.getComponent(Animator).addClip(new AnimationState(resources.animationStates.lightsBack[i]))
        this.lightsBack.getComponent(Animator).getClip(resources.animationStates.lightsBack[i]).stop()
    }

    //add water colums & lights
    this.lightsColumns = new Entity()
    this.lightsColumns.addComponent(resources.models.lightsColumns)
    this.lightsColumns.addComponent(resources.transforms.lightsColumns)
    engine.addEntity(this.lightsColumns)

    this.lightsColumns.addComponent(new Animator())
    for(let i = 0; i < resources.animationStates.lightsColumns.length; i++){
        this.lightsColumns.getComponent(Animator).addClip(new AnimationState(resources.animationStates.lightsColumns[i]))
        this.lightsColumns.getComponent(Animator).getClip(resources.animationStates.lightsColumns[i]).stop()
    }


    this.waterColumns = new Entity()
    this.waterColumns.addComponent(resources.models.waterColumns)
    this.waterColumns.addComponent(resources.transforms.waterColumns)
    engine.addEntity(this.waterColumns)

    this.waterColumns.addComponent(new Animator())
    for(let i = 0; i < resources.animationStates.waterColumns.length; i++){
        this.waterColumns.getComponent(Animator).addClip(new AnimationState(resources.animationStates.waterColumns[i]))
        this.waterColumns.getComponent(Animator).getClip(resources.animationStates.waterColumns[i]).stop()
    }

}

createActivations(){
    createDanceAreas()
}

createEnvironment(){

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

createScreens(){

    for(let i in resources.transforms.screens){
        this.liveScreens.push(new LiveScreen("screen-"+i, resources.transforms.screens[i]))
    }

}

showVideoFeeds(showAll:boolean, allFeed?: string, screens?:LiveScreen[], feeds?:string[]){

    if(showAll){
        let newTexture = new VideoTexture(new VideoClip(allFeed))
        for(let i = 0; i < this.liveScreens.length; i++){
            this.liveScreens[i].setVideoFeed(newTexture, true)
        }
    }
}

checkTime(){

    //for testing, delay 5 seconds
    let delay = new Entity()
    engine.addEntity(delay)
    delay.addComponent(new utils.Delay(5000,()=>{
        this.activateScene()
    }))
}

activateScene(){

    //show videos
    this.activateScreens()

    //play lights
    this.playLights()

    //activate environment
    this.activateEnvironment()
}

activateScreens(){
    this.showVideoFeeds(true, "https://dclteam.s3.us-west-1.amazonaws.com/ko5.mp4")

    for(let i in resources.transforms.screens){
        this.liveScreens[i].getComponent(Transform).scale = new Vector3(resources.transforms.screens[i].scale.x, resources.transforms.screens[i].scale.y, resources.transforms.screens[i].scale.z)
    }
}

playLights(){

    this.lights.getComponent(Animator).getClip(resources.animationStates.lights[0]).play()
    this.lightsColumns.getComponent(Animator).getClip(resources.animationStates.lightsColumns[0]).play()
    this.lightsBack.getComponent(Animator).getClip(resources.animationStates.lightsBack[0]).play()
    this.waterColumns.getComponent(Animator).getClip(resources.animationStates.waterColumns[0]).play()

}

activateEnvironment(){
    this.fishA.getComponent(Transform).scale.setAll(1)
    this.fishB.getComponent(Transform).scale.setAll(1)
}
    
}