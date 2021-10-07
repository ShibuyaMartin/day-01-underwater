export default {

    models:{
        stage: new GLTFShape('models/underwater_stage.glb'),
        lights: new GLTFShape('models/lights_tentacles.glb'),
        lightsBack: new GLTFShape('models/lights_back.glb'),
        lightsColumns: new GLTFShape('models/lights_colums.glb'),
        waterColumns: new GLTFShape('models/columns_water.glb'),
        fishA: new GLTFShape('models/fishA.glb'),
        fishB: new GLTFShape('models/fishB.glb')
    },

    transforms:{
        stage: new Transform({position: new Vector3(48, 0, 64), rotation: Quaternion.Euler(0, 90, 0)}),

        lights:  new Transform({position: new Vector3(48, 0, 64),rotation: Quaternion.Euler(0, 90, 0)}),
        lightsBack:  new Transform({position: new Vector3(48, 0, 64),rotation: Quaternion.Euler(0, 90, 0)}),
        lightsColumns:   new Transform({position: new Vector3(48, 0, 64),rotation: Quaternion.Euler(0, 90, 0)}),

        waterColumns:   new Transform({position: new Vector3(48, 0, 64), rotation: Quaternion.Euler(0, 90, 0)}),

        fishA:   new Transform({position: new Vector3(48, 0, 64), rotation: Quaternion.Euler(0, 90, 0), scale: Vector3.Zero()}),
        fishB:   new Transform({position: new Vector3(48, 0, 64), rotation: Quaternion.Euler(0, 90, 0) ,scale: Vector3.Zero()}),

        screens:[ 
        {position: new Vector3(16,22.8,64), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(26,26,1)},

        {position: new Vector3(26.3,26.5+6.5,21.9), rotation: Quaternion.Euler(15,60,0), scale: new Vector3(11.9,11.8,-7)},
        {position: new Vector3(29.7,10.4+1.2,28.5), rotation: Quaternion.Euler(0,60,0), scale: new Vector3(15.1,15.4,1)},
        {position: new Vector3(44.4,21.5,19.2), rotation: Quaternion.Euler(22.912,42.537,358.212), scale: new Vector3(7.5,7.5,1)},
        {position: new Vector3(27.8,21.8+2.5,34.9), rotation: Quaternion.Euler(12.998,58.974,359.769), scale: new Vector3(6.8,6.7,-7)},

        {position: new Vector3(26.3,26.5+6.5,106.1), rotation: Quaternion.Euler(15,120,360), scale: new Vector3(11.9,11.8,-7)},
        {position: new Vector3(29.7,10.4+1.2,99.5), rotation: Quaternion.Euler(0,120,0), scale: new Vector3(15.1,15.4,1)},
        {position: new Vector3(44.4,21.5,108.8), rotation: Quaternion.Euler(22.912,137.463,358.212), scale: new Vector3(7.5,7.5,1)},
        {position: new Vector3(27.8,21.8+2.5,93.1), rotation: Quaternion.Euler(12.998,121.026,359.769), scale: new Vector3(6.8,6.7,-7)}
        ],
    },
/*
        danceAreas:[
            {transform: {position: new Vector3(50,1,24), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(11,10,1)}, type: "robot"},
            {transform: {position: new Vector3(79,1,43), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(11,10,1)}, type: "tik"},
            {transform: {position: new Vector3(78,1,62), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(11,10,1)}, type: "tektonik"},
            {transform: {position: new Vector3(68,1,95), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(11,10,1)}, type: "hammer"},
            {transform: {position: new Vector3(47,1,103), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(11,10,1)}, type: "headexplode"},
            {transform: {position: new Vector3(73,20,55), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(11,10,1)}, type: "handsair"},
            {transform: {position: new Vector3(72,20,70), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(11,10,1)}, type: "disco"},
            {transform: {position: new Vector3(76,1,80), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(11,10,1)}, type: "dab"},
            {transform: {position: new Vector3(52,1,63), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(18,33,5)}, type: "all"}
        ]
    },

*/
    animationStates:{
        lights: ["TL_Neutral","TL_Rise","TL_V01","TL_V02","TL_V03","TL_V04","TL_V05","TL_V06","TL_V07"],
        lightsBack: ["Light_01_Action","Light_02_Action","Light_03_Action"],
        lightsColumns: ["Beat_V01_20fps", "Beat_V02", "Beat_V03_20pfs", "Beat_V04_20pfs"],
        waterColumns: ["WaterColumn_Action"]
    }
    }
