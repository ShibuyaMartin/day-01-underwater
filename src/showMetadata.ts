import { subs3Lau } from './subtitle-files/merge3lau'
import { racSubs } from './subtitle-files/mergeRac'
import { NinaSubs } from './subtitle-files/mergedNina'
import { subsBenji } from './subtitle-files/MergeBenjiPatterson'
import { subsColors } from './subtitle-files/MergedCrookedColours'
import { subsTheLuna } from './subtitle-files/mergeTheLuna'

// TODO LUNA TAPES!!

export type showType = {
  link: string
  subs?: string
  startTime?: number
  length?: number
  artist: string
}

export const subtitlesList = [
  subsTheLuna,
  subsBenji,
  subsColors,
  racSubs,
  subs3Lau,
  NinaSubs,
]

export let FAKING_LOCALLY: boolean = false

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
