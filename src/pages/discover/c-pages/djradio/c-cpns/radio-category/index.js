import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getRadioCategoryAction } from '../../store/actionCreators'
import { CategoryWrapper, CategoryContent, CategoryItemImage } from './style'

export default memo(function WMRadioCategory() {

  // redux hooks
  const dispatch = useDispatch()
  const { categories } = useSelector(state => ({
    categories: state.getIn(['djRadio', 'categories'])
  }), shallowEqual)
  // console.log(categories)

  // other hooks
  useEffect(() => {
    dispatch(getRadioCategoryAction())
  }, [dispatch])

  return (
    <CategoryWrapper>
      <CategoryContent>
        <div className="category-page">
          {
            categories.map((item, index) => {
              return (
                <div key={item.id}
                  className="category-item">
                  <CategoryItemImage className="image"
                    imgUrl={item.picWebUrl}></CategoryItemImage>
                  <span>{item.name}</span>
                </div>
              )
            })

          }
        </div>
      </CategoryContent>
    </CategoryWrapper>
  )
})
