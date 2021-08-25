export default {

    models:{
        stage: new GLTFShape('models/underwater_stage.glb'),
        lights: new GLTFShape('models/light_01.glb'),
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
        {position: new Vector3(15,22.8,64), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(23.1,23.1,1)},

        {position: new Vector3(26.3,26.5,21.9), rotation: Quaternion.Euler(15,60,0), scale: new Vector3(11.9,11.8,-7)},
        {position: new Vector3(29.7,10.4,28.5), rotation: Quaternion.Euler(0,60,0), scale: new Vector3(15.1,15.4,1)},
        {position: new Vector3(44.4,21.5,19.2), rotation: Quaternion.Euler(22.912,42.537,358.212), scale: new Vector3(7.5,7.5,1)},
        {position: new Vector3(27.8,21.8,34.9), rotation: Quaternion.Euler(12.998,58.974,359.769), scale: new Vector3(6.8,6.7,-7)},

        {position: new Vector3(26.3,26.5,106.1), rotation: Quaternion.Euler(15,120,360), scale: new Vector3(11.9,11.8,-7)},
        {position: new Vector3(29.7,10.4,99.5), rotation: Quaternion.Euler(0,120,0), scale: new Vector3(15.1,15.4,1)},
        {position: new Vector3(44.4,21.5,108.8), rotation: Quaternion.Euler(22.912,137.463,358.212), scale: new Vector3(7.5,7.5,1)},
        {position: new Vector3(27.8,21.8,93.1), rotation: Quaternion.Euler(12.998,121.026,359.769), scale: new Vector3(6.8,6.7,-7)}
        ]
    },

    animationStates:{
        lights: ["Lights_Tentacles_01","Lights_Tentacles_02","Lights_Tentacles_03","Lights_Tentacles_04"],
        lightsBack: ["Light_01_Action","Light_02_Action","Light_03_Action"],
        lightsColumns: ["ArmatureAction"],
        waterColumns: ["Armature.003Action"]
    }
}