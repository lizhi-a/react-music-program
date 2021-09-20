import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom'

import { getSongCategoryAction, getSongListAction } from '../../store/actionCreators'

import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { HeaderWrapper } from './style'

export default memo(function WMSongHeader() {

  // other hooks
  const dispatch = useDispatch()
  const { songCategory, currentCategory = '全部' } = useSelector(state => ({
    songCategory: state.getIn(['songs', 'songCategory']),
    currentCategory: state.getIn(['songs', 'currentCategory'])
  }), shallowEqual)
  const { sub = [], categories = {} } = songCategory

  // function
  var arr0 = [], arr1 = [], arr2 = [], arr3 = [], arr4 = []
  if (sub !== []) {
    sub.map((item, index) => {
      switch (item.category) {
        case 0:
          arr0.push(item)
          break;
        case 1:
          arr1.push(item)
          break;
        case 2:
          arr2.push(item)
          break;
        case 3:
          arr3.push(item)
          break;
        case 4:
          arr4.push(item)
          break;
        default:
          console.log('未识别')
          break;
      }
      return ''
    })
  }
  let categoryObj = {
    0: arr0,
    1: arr1,
    2: arr2,
    3: arr3,
    4: arr4,
  }

  const categoryRef = useRef()
  const changeCategory = function (e) {
    const { innerHTML } = e.target
    dispatch(getSongListAction(innerHTML))
    categoryRef.current.style.display = 'none'
  }

  function showCategory() {
    let { display } = categoryRef.current.style
    if (display === 'none' || display === '') {
      categoryRef.current.style.display = 'block'
    }
    else {
      categoryRef.current.style.display = 'none'
    }
  }

  // redux hooks
  useEffect(() => {
    dispatch(getSongCategoryAction())
  }, [dispatch])

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{currentCategory}</h3>
        <Button icon={<DownOutlined />}
          onClick={showCategory}>选择分类</Button>
        <div className="songCategoryContent"
          ref={categoryRef}>
          <Button className="totalCategory"
            onClick={e => changeCategory(e)}>全部风格</Button>
          {
            [0, 1, 2, 3, 4].map((item) => {
              return (
                <div className="songCategoryLine"
                  key={item}>
                  <p className="songCategoryTitle">{categories[item]}</p>
                  <div className="keyword">
                    {
                      categoryObj[item].map((iten, index) => {
                        return (
                          <div className="item" key={iten.name}>
                            <span href="/todo" onClick={e => changeCategory(e)}>{iten.name}</span>
                            <span className="divider">|</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })

          }

        </div>

      </div>
    </HeaderWrapper>
  )
})
