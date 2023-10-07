import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Side = styled.nav`
  display: flex;
  align-content: space-between;
  width: 20%;
  padding: 30px 10px;
  background-color: #121220;
`;
const Title = styled.h1`
  font-size: 20px;
  margin-top: 25px;
`;
const ModeBtnWrap = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.accentColor};
  font-size: 20px;
  width: 20%;
  height: 60px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 20px;
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
      <ModeBtnWrap onClick={toggleDarkAtom}>
        {darkAtom ? (
          <FontAwesomeIcon icon={faLightbulb} />
        ) : (
          <FontAwesomeIcon icon={faLightbulb} />
        )}
      </ModeBtnWrap>
    </Side>
  );
}

export default SideComp;
