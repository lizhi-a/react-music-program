
import { getSongDetail, getLyric } from '@/services/player.js'
import { parseLyric } from '@/utils/parse-lyric'
import { getRandomNumber } from '@/utils/math-utils'

import * as actionTypes from './constants'

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})
const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRICS_LIST,
  lyricList
})

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const sequence = getState().getIn(['player', 'sequence'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    switch (sequence) {
      // 随机操作
      case 1:
        let randomIndex = getRandomNumber(playList.length)
        // let randomIndex = Math.floor(Math.random() * playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
          // randomIndex = Math.floor(Math.random() * playList.length)
        }
        currentSongIndex = randomIndex
        break;
      // 顺序操作、循环播放
      default: {
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
      }
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 请求歌词
    dispatch(getLyricAction(currentSong.id))
  }
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据ids查找playList中有没有这首歌
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(song => ids === song.id)

    // 2.判断是否找到歌曲
    // 找到歌曲
    let song
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))

      // 3.请求改歌曲的歌词
      if (!song) return
      dispatch(getLyricAction(song.id))
    }
    // 没有找到歌曲
    else {
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0]
        if (!song) return

        // 1.将新请求的数据添加到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))

        // 3.请求改歌曲的歌词
        if (!song) return
        dispatch(getLyricAction(song.id))
      })
    }

  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}
