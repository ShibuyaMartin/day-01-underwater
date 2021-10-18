import { subs3Lau } from './subtitle-files/merge3lau'
import { racSubs } from './subtitle-files/mergeRac'
import { MiyaSubs } from './subtitle-files/MergeBPM_MIYA_MIYA'
import { NinaSubs } from './subtitle-files/mergedNina'

export type showType = {
  link: string
  subs?: string
  startTime?: number
  length?: number
  artist: string
}

export const subtitlesList = [
  MiyaSubs,
  MiyaSubs,
  MiyaSubs,
  racSubs,
  subs3Lau,
  NinaSubs,
]

export let FAKING_LOCALLY: boolean = true

export const shows: any = {
  deadmau5: {
    link: `https://player.vimeo.com/external/616165133.m3u8?s=b904d959337c905551285b3fbd7325bc077638d7`,
    subs: racSubs,
    startTime: 1633650252,
    length: 47,
  },
  nina: { link: 'videos/NinaNesbitt720.mp4' },
  test: {
    link: 'videos/OliverResumeBPMTest.mp4',
    subs: NinaSubs,
    startTime: 1633650252,
    length: 15,
  },
}
