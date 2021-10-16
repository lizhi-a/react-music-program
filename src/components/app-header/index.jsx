import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from '@/services/local-data.js'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

export default memo(function WMAppHeader() {

  // 业务代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )

    }
    else
      return <a href={item.link}>{item.title}</a>
  }

  // 返回的 jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className=" sprite_01 title">森屿Music</a>
          {/* <a href="#/" className="logo sprite_01">网易云音乐</a> */}
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
