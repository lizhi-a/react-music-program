import React, { memo } from 'react'
// import { renderRoutes } from "react-router-config";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import WMAppHeader from '@/components/app-header'
import WMAppFooter from '@/components/app-footer'
import WMDiscover from '@/pages/discover';
import WMFriend from '@/pages/friend';
import WMMine from '@/pages/mine';
import WMRecommend from '@/pages/discover/c-pages/recommend'
import WMRanking from '@/pages/discover/c-pages/ranking'
import WMSongs from '@/pages/discover/c-pages/songs'
import WMDjradio from '@/pages/discover/c-pages/djradio'
import WMArtist from '@/pages/discover/c-pages/artist'
import WMAlbum from '@/pages/discover/c-pages/album'
import WMPlayer from '@/pages/player'

import WMAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <WMAppHeader />
          <Switch>
            <Route path="/discover" component={WMDiscover} >
              <WMDiscover />
              <Switch>
                <Route path="/discover/recommend" component={WMRecommend} />
                <Route path="/discover/ranking" component={WMRanking} />
                <Route path="/discover/songs" component={WMSongs} />
                <Route path="/discover/djradio" component={WMDjradio} />
                <Route path="/discover/artist" component={WMArtist} />
                <Route path="/discover/album" component={WMAlbum} />
                <Route path="/discover/player" component={WMPlayer} />
                <Redirect to="/discover/recommend" />
              </Switch>

            </Route>
            <Route path="/mine" component={WMMine} />
            <Route path="/friend" component={WMFriend} />
            <Redirect to="/discover" />
          </Switch>
          <WMAppFooter />
          <WMAppPlayerBar />
        </HashRouter>
      </Provider>
    </div>
  )
})

