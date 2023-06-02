import styled from 'styled-components';

type Props = {}

const StyledHeader = styled.div`
  width: 100%;
  height: 52px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  li {
    color: white;
  }
`;


const Header = (props: Props) => {
  return (
    <StyledHeader>
        Header
    </StyledHeader>
  )
}

export default Header;
