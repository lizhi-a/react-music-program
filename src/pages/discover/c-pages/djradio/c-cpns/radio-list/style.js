
import styled from 'styled-components'

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -40px;
  margin-bottom: 20px;
`

export const ListContent = styled.div`
  flex: 1;
  width: 900px;
  padding-left:40px;
  padding-right:40px;
  display: flex;
  justify-content: space-between;
`

export const RadioList = styled.div`
  display: inline-block;
  width: 426px;

  .playUl{
    width:426px;
    /* height: 600px; */
    border: 1px solid #e2e2e2;
    border-top: none;

    li{
      width: 424px;
      padding: 10px 0;
      background: #fff;
    }

    li:nth-child(2n){
      background: #f7f7f7;
    }

    li:hover{
      background-color: #e2e2e2;
      .tag{
        color:#555;
      }
    }

    .rank{
      display: inline-block;
      width:12px;
      text-align:center;
      line-height: 40px;
      height:40px;
      vertical-align: top;
      margin-left: 20px;
      color:#333;
    }
    .top{
      color:#C10D0C;
      font-weight: 800;
    }

    .headImgCover{
      display: inline-block;
      width:40px;
      height:40px;
      line-height: 40px;
      vertical-align: top;
      margin-left: 20px;

      .headImg{
        width:40px;
        height:40px;
        line-height: 40px;
      }
    }
    

    .info{
      width: 254px;
      display: inline-block;
      margin-left:10px;

      .info_title{
        display: inline-block;
        width: 254px;
        overflow: hidden;
        color: #333;
        cursor: pointer;
      }

      .info_name{
        line-height: 20px;
        color: #999;
        cursor: pointer;
        white-space: nowrap;
        font-size:14px;
      }

      .top_title{
        width:300px;
      }
    }

    .tag{
      width:62px;
      text-align:center;
      display: inline-block;
      position: relative;
      top: -16px;
      overflow: hidden;
      color: #999;
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      padding: 0 6px;
      margin-left: 20px;
      border: 1px solid #999;
      vertical-align: middle;
      text-decoration:none;
    }

  }

`
