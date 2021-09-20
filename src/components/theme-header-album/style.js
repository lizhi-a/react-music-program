import styled from "styled-components";

export const HeaderWrapper = styled.div`
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
    .keyword {
      display: flex;

      .item {
        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    line-height: 42px;
  }

`