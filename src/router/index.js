import React from 'react'
import { Redirect } from 'react-router-dom'

import WMDiscover from '@/pages/discover';
import WMFriend from '@/pages/friend';
import WMMine from '@/pages/mine';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to='/discover' />
    }
  },
  {
    path: '/discover',
    component: WMDiscover,
  },
  {
    path: '/friend',
    component: WMFriend,
  },
  {
    path: '/mine',
    component: WMMine,
  },
]

export default routes
