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
  luna: {
    artist: 'The Luna Tapes',
    eventId: 11160,
    image: 'https://dclteam.s3.us-west-1.amazonaws.com/luna.png',
    length: 665,
    link: 'https://player.vimeo.com/external/636387134.m3u8?s=8d2d2cc45364010f9964edcdad4088adeb4877b1',
    played: false,
    startTime: 1634850000,
  },
}
