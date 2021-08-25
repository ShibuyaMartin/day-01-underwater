import { LiveScreen } from "./liveScreen"



export class FestivalManagement{

    liveScreens:LiveScreen[] = []


constructor(){

    this.createScreens()
    this.showVideoFeeds(true, "https://dclteam.s3.us-west-1.amazonaws.com/313200.mp4")
}

createScreens(){

    //main stage
    this.liveScreens.push(new LiveScreen("screen1", {position: new Vector3(15,22.8,64), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(23.1,23.1,1)}))

    //stage left
    this.liveScreens.push(new LiveScreen("screen2", {position: new Vector3(26.3,26.5,21.9), rotation: Quaternion.Euler(15,60,0), scale: new Vector3(11.9,11.8,-7)}))
    this.liveScreens.push(new LiveScreen("screen3", {position: new Vector3(29.7,10.4,28.5), rotation: Quaternion.Euler(0,60,0), scale: new Vector3(15.1,15.4,1)}))
    this.liveScreens.push(new LiveScreen("screen4", {position: new Vector3(44.4,21.5,19.2), rotation: Quaternion.Euler(22.912,42.537,358.212), scale: new Vector3(7.5,7.5,1)}))
    this.liveScreens.push(new LiveScreen("screen5", {position: new Vector3(27.8,21.8,34.9), rotation: Quaternion.Euler(12.998,58.974,359.769), scale: new Vector3(6.8,6.7,-7)}))

    //stage right
    this.liveScreens.push(new LiveScreen("screen6", {position: new Vector3(26.3,26.5,106.1), rotation: Quaternion.Euler(-15,-60,0), scale: new Vector3(11.9,11.8,-7)}))
    this.liveScreens.push(new LiveScreen("screen7", {position: new Vector3(29.7,10.4,99.5), rotation: Quaternion.Euler(0,-60,0), scale: new Vector3(15.1,15.4,1)}))
    this.liveScreens.push(new LiveScreen("screen8", {position: new Vector3(44.4,21.5,108.8), rotation: Quaternion.Euler(-22.912,-42.537,-358.212), scale: new Vector3(7.5,7.5,1)}))
    this.liveScreens.push(new LiveScreen("screen9", {position: new Vector3(27.8,21.8,93.1), rotation: Quaternion.Euler(-12.998,-58.974,-359.769), scale: new Vector3(6.8,6.7,-7)}))

}

showVideoFeeds(showAll:boolean, allFeed?: string){

    if(showAll){
        let newTexture = new VideoTexture(new VideoClip(allFeed))
        for(let i = 0; i < this.liveScreens.length; i++){
            this.liveScreens[i].setVideoFeed(newTexture, true)
        }
    }
}
    
}