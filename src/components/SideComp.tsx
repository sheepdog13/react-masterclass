import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

const Side = styled.nav`
  display: flex;
  position: fixed;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: center;
  width: 20%;
  height: 100%;
  padding: 24px 40px;
  background-color: ${(props) => props.theme.sideBarColor};
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;
const ModeBtn = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.modeBtnColor};
  font-size: 25px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  a {
  }
`;
function SideComp() {
  const [darkAtom, setDarkAtom] = useRecoilState(isDarkAtom);

  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Side>
      <Link to="/">
        <Title>SHEEP FINACE</Title>
      </Link>
      <ModeBtn onClick={toggleDarkAtom}>
        {darkAtom ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </ModeBtn>
    </Side>
  );
}

export default SideComp;
