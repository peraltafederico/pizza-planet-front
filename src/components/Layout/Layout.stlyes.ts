import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  padding: 65px 40px 10px;
  overflow-x: auto;
  flex-wrap: wrap;
  height: calc(100% - 65px);
  box-sizing: border-box;

  & > div {
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: center;
    margin: 0 15px 45px;
    flex-wrap: wrap;

    & > a {
      margin-right: 70px;
      margin-bottom: 70px;
    }
  }
`
