import styled from "@emotion/styled"

export const Nav = styled.div(({
  marginLeft: 1,
  color: 'white',
  background: 'black',
  padding: 1,
  height: 2,
  display: 'flex',
  alignItems: 'center',
}))

export const PageBody = styled("div")`
  width: 100%;
  height: 100%;
  padding: 2em;
`

export const TabHead = styled("div")`
  border-bottom: 1px solid black;
  display: flex;
  background: black;
`

export const TabContainer = styled("div")`
  width: 100%;
  height: 100%;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
`

export const TabBody = styled(PageBody)`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
`

export const Tab = styled("div")`
  padding: 1em;
  background: ${({ selected }) => (selected ? "grey" : "black")};
  * {
    color: white;
  }
`