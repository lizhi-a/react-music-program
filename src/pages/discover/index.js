import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { dicoverMenu } from '@/services/local-data'
// import request from '@/services/request'

import {
  DiscoverWrapper,
  TopMenu
} from './style'

export default memo(function WMDiscover(props) {

  

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item) => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
    </DiscoverWrapper>
  )
})
