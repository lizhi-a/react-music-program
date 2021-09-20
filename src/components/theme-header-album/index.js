import React, { memo } from 'react'

import { HeaderWrapper } from './style'

export default memo(function WMThemeHeaderAlbum(props) {
  const { title, isMore = false, keywords = [] } = props

  function RenderMore() {
    if (isMore) {
      return (
        <div className="right">
          <a href="todo">更多 &gt;</a>
        </div>
      )
    }
    return ''
  }

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                    <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <RenderMore />
    </HeaderWrapper>
  )
})
