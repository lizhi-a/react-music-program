import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  padding:10px;
  .title{
    font-weight:700;
    font-size:16px;
  }

  .anchor{
    width:210px;
    height:62px;
    margin:10px;

    .image{
      margin-right:10px;
      vertical-align: top;
    }

    .info{
      display: inline-block;
      width:130px;
      height:40px;

      .name{
        color: #333;
        font-size:15px;
        font-weight: 800;
      }
      .context{
        margin-top:10px;
        color: #666;
      }
    }
  }
`
