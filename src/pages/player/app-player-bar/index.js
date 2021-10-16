import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators'
import { NavLink } from 'react-router-dom';

import { Slider ,message} from 'antd';
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'

export default memo(function WMAppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // redux hooks
  const dispatch = useDispatch()
  const {
    currentSong,
    sequence,
    lyricList,
    playList,
    currentLyricIndex
  } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong']),
    sequence: state.getIn(['player', 'sequence']),
    playList: state.getIn(['player', 'playList']),
    lyricList: state.getIn(['player', 'lyricList']),
    currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
  }), shallowEqual)

  // other hooks
  // 发送网络请求
  useEffect(() => {
    // getSongDetail(167876).then(res=>{
    //   console.log(res)
    // }) 
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  useEffect(() => {
    // 只有切歌或第一次时需要得到src
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong])
  const audioRef = useRef()

  // other handle 其他处理
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  // handle function3
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime
    // 毫秒数
    // 未改变时
    if (!isChanging) {
      setCurrentTime(currentTime * 1000)
      setProgress(currentTime * 1000 / duration * 100)
    }
    // 获取当前歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if (currentTime * 1000 < lyricItem.time) {
        break
      }
    }
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      message.open({
        key:'lyric',
        content: content,
        duration:0
      })
    }
  }

  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) { currentSequence = 0 }
    dispatch(changeSequenceAction(currentSequence))
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  const handleMusicEnded = () => {
    if (sequence === 2) {
      // 单曲循环
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const currentTime = value / 100 * duration / 1000
    setCurrentTime(currentTime * 1000)
    setProgress(value)
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)

    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="prev sprite_playbar"
            onClick={e => changeMusic(-1)}></button>
          <button className="play sprite_playbar"
            onClick={e => playMusic()}></button>
          <button className="next sprite_playbar"
            onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img alt="" src={getSizeImage(picUrl, 35)} />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="singer-name">{currentSong.name}</span>
              <a href="#/">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={0} value={progress}
                onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider"></span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"
              onClick={changeSequence}></button>
            <button className="sprite_playbar btn playlist">{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}
        onTimeUpdate={e => timeUpdate(e)}
        onEnded={e => handleMusicEnded()} />
    </PlaybarWrapper>
  )
})
