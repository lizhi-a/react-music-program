import styled from 'styled-components';

export const SongWrapper = styled.div`

  .song-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* justify-content:center; */

    .songItem{
      margin-right: 50px !important;
      margin-left: 10px;
    }
  }

  .paging{
    margin-top: 40px;
    text-align: center;
  }
`