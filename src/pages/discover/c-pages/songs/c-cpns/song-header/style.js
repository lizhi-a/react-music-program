import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  height:42px;
  border-bottom: 2px solid #C10D0C;
  padding: 0 5px 4px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 24px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .ant-popover,.ant-popover-placement-bottomLeft {
      box-shadow:0px 0px 3px 3px;
    }

    .songCategoryContent{
      position: absolute;
      top:110%;
      left:-3%;
      width:720px;
      min-height:380px;
      z-index:100;
      background-color: white;
      box-shadow:0px 0px 10px 3px #ccc;
      border:1px solid #ccc;
      padding-top:20px;
      display: none;

      .totalCategory{
        margin-left:12px;
        margin-bottom:10px;
      }
      .songCategoryLine{
        width:100%;
        /* display: flex; */

        .songCategoryTitle{
          width:100px;
          min-height:40px;
          line-height:40px;
          text-align: center;
          vertical-align:top;
          font-weight:900;
          color: #666;
          display:inline-block;
          
        }
        .keyword{
          width: 600px;
          display:inline-block;
          padding-left: 15px;
          margin-bottom: 10px;
          border-left:1px solid #d8d8d8;

          .item {
            display:inline-block;
            line-height:40px;
            cursor: pointer;
            .divider {
              margin: 0 10px;
              color: #ccc;
            }
          }
        }
      }
    }
    .songCategoryContent::before{
			position: absolute;
			display: inline-block;
      content:'';
      top:-20px;
      left:19%;
			width:0px;
			height:0px;
			border:10px solid transparent;
			border-bottom:10px solid white;
    }

  }
  

`