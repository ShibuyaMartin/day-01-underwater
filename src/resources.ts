import { PredefinedEmote } from '@decentraland/RestrictedActions'
import { PlaneUVData } from './modules/uvData'

export default {
  models: {
    stage: new GLTFShape('models/underwater_stage.glb'),
    tentacles: new GLTFShape('models/lights_tentacles.glb'),
    lightsBack: new GLTFShape('models/lights_back.glb'),
    lightsColumns: new GLTFShape('models/lights_colums.glb'),
    lightsTop: new GLTFShape('models/lights_top.glb'),
    waterColumns: new GLTFShape('models/columns_water.glb'),
    fishA: new GLTFShape('models/fishA.glb'),
    fishB: new GLTFShape('models/fishB.glb'),
    smoke: new GLTFShape('models/smoke.glb'),
  },

  transforms: {
    stage: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
    }),

    tentacles: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
    }),
    lightsBack: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
    }),
    lightsColumns: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
    }),
    lightsTop: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(1, 1, 1),
    }),
    waterColumns: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
    }),

    fishA: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: Vector3.Zero(),
    }),
    fishB: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: Vector3.Zero(),
    }),

    smoke: new Transform({
      position: new Vector3(48, 0, 64),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(1, 1, 1),
    }),

    screens: [
      {
        position: new Vector3(16, 22.8, 64),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(26, 26, 1),
      },

      {
        position: new Vector3(26.3, 26.5 + 6.5, 21.9),
        rotation: Quaternion.Euler(15, 60, 0),
        scale: new Vector3(11.9, 11.8, -7),
      },
      {
        position: new Vector3(29.7, 10.4 + 1.2, 28.5),
        rotation: Quaternion.Euler(0, 60, 0),
        scale: new Vector3(15.1, 15.4, 1),
      },
      {
        position: new Vector3(44.4, 21.5, 19.2),
        rotation: Quaternion.Euler(22.912, 42.537, 358.212),
        scale: new Vector3(7.5, 7.5, 1),
      },
      {
        position: new Vector3(27.8, 21.8 + 2.5, 34.9),
        rotation: Quaternion.Euler(12.998, 58.974, 359.769),
        scale: new Vector3(6.8, 6.7, -7),
      },

      {
        position: new Vector3(26.3, 26.5 + 6.5, 106.1),
        rotation: Quaternion.Euler(15, 120, 360),
        scale: new Vector3(11.9, 11.8, -7),
      },
      {
        position: new Vector3(29.7, 10.4 + 1.2, 99.5),
        rotation: Quaternion.Euler(0, 120, 0),
        scale: new Vector3(15.1, 15.4, 1),
      },
      {
        position: new Vector3(44.4, 21.5, 108.8),
        rotation: Quaternion.Euler(22.912, 137.463, 358.212),
        scale: new Vector3(7.5, 7.5, 1),
      },
      {
        position: new Vector3(27.8, 21.8 + 2.5, 93.1),
        rotation: Quaternion.Euler(12.998, 121.026, 359.769),
        scale: new Vector3(6.8, 6.7, -7),
      },
      {
        position: new Vector3(115.2, 31.3, 64),
        rotation: Quaternion.Euler(0, 270, 0),
        scale: new Vector3(15.4, 15.4, 1),
      },
    ],

    danceAreas: [
      {
        transform: {
          position: new Vector3(96, 6.17, 27),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(11, 10, 1),
        },
        type: PredefinedEmote.ROBOT,
      },
      {
        transform: {
          position: new Vector3(97, 7.5, 38),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(11, 10, 1),
        },
        type: PredefinedEmote.TIK,
      },
      {
        transform: {
          position: new Vector3(78, 1, 62),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(11, 10, 1),
        },
        type: PredefinedEmote.TEKTONIK,
      },
      {
        transform: {
          position: new Vector3(104, 19.4, 62),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(26, 26, 1),
        },
        type: PredefinedEmote.HAMMER,
      },
      {
        transform: {
          position: new Vector3(98, 8.9, 90),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(11, 10, 1),
        },
        type: PredefinedEmote.HEAD_EXPLODDE,
      },
      {
        transform: {
          position: new Vector3(95, 6.2, 100),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(11, 10, 1),
        },
        type: PredefinedEmote.TIK,
      },

      {
        transform: {
          position: new Vector3(71, 1, 63),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(40, 55, 5),
        },
        type: 'all',
      },
    ],

    animationStates: {
      lights: [
        'TL_Neutral',
        'TL_Rise',
        'TL_V01',
        'TL_V02',
        'TL_V03',
        'TL_V04',
        'TL_V05',
        'TL_V06',
        'TL_V07',
      ],
      lightsBack: ['Light_01_Action', 'Light_02_Action', 'Light_03_Action'],
      lightsColumns: [
        'Beat_V01_20fps',
        'Beat_V02',
        'Beat_V03_20pfs',
        'Beat_V04_20pfs',
      ],
      waterColumns: ['WaterColumn_Action'],
    },
    
  },

  screenUVs: [  
    //center screen 1    
    new PlaneUVData(
      new Vector2(0.258, 0.933),
      new Vector2(0.742, 0.933),
      new Vector2(0.742, 0.067),
      new Vector2(0.258, 0.067),
      
      
    ),

    new PlaneUVData(
      new Vector2(0.032,0.34),
      new Vector2(0.222,0.34),
      new Vector2(0.222,0),
      new Vector2(0.032,0),
    ),

    new PlaneUVData(
      new Vector2(0, 1),
      new Vector2(0.248, 1),
      new Vector2(0.248,0.56),
      new Vector2(0,0.56),
    ),

    new PlaneUVData(
      new Vector2(0,0.56),
      new Vector2(0.128,0.56),
      new Vector2(0.128,0.34),
      new Vector2(0,0.34),
    ),

    new PlaneUVData(
      new Vector2(0.128,0.56),
      new Vector2(0.257,0.56),
      new Vector2(0.257,0.34),
      new Vector2(0.128,0.34),
    ),

    new PlaneUVData(
      new Vector2(1-0.222,0.34),
      new Vector2(1-0.032,0.34),
      new Vector2(1-0.032,0),
      new Vector2(1-0.222,0),
    ),

    new PlaneUVData(
      new Vector2(0.752, 1),
      new Vector2(1, 1),
      new Vector2(1,0.56),
      new Vector2(0.752,0.56),
    ),

    new PlaneUVData(
      new Vector2(0.871, 0.56),
      new Vector2(1, 0.56),
      new Vector2(1, 0.34),
      new Vector2(0.871, 0.34),
    ),

    new PlaneUVData(
      new Vector2(0.871, 0.56),
      new Vector2(0.742, 0.56),
      new Vector2(0.742, 0.34),
      new Vector2(0.871, 0.34),
    ),
     //Back center screen     
     new PlaneUVData(
      new Vector2(0.258, 0.933),
      new Vector2(0.742, 0.933),
      new Vector2(0.742, 0.067),
      new Vector2(0.258, 0.067),
      
      
    ),
  ,
]
}
