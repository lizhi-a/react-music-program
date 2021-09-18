import React, { memo } from 'react'
// import { connect, useDispatch } from 'react-redux'

import WMTopBanner from './c-cpns/top-banners'
import WMHotRecommend from './c-cpns/hot-recommend'
import WMNewAlbum from './c-cpns/new_album'
import WMRecommendRanking from './c-cpns/recommend-ranking'
import WMUserLogin from './c-cpns/user-login'
import WMHotAnchor from './c-cpns/hot-anchor'
import WMSettleSinger from './c-cpns/settle-singer'

import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content
} from './style'

function WMRecommend(props) {

  return (
    <RecommendWrapper>
      <WMTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <WMHotRecommend />
          <WMNewAlbum />
          <WMRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <WMUserLogin />
          <WMHotAnchor />
          <WMSettleSinger />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(WMRecommend)

// function WMRecommend(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>WMRecommend:{topBanners.length}</h2>
//     </div>
//   )
// }

// // 从redux拿数据
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction()) 
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(WMRecommend))