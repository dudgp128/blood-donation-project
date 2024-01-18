import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  z-index: 10;
  width: calc(100vw - 50px);
  background-color: white;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;

  & > a > .red-cross {
    width: 174px;
  }

  & > div.blood_truth {
    border: solid 1px black;
    align-self: center;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    gap: 12px;

    & > img.em_blood_mark {
      width: 11px;
      height: 16px;
      align-self: center;
    }
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <a href="https://www.bloodinfo.net/knrcbs/main.do">
        <img className="red-cross" src="/img_src/red-cross.svg" alt="logo" />
      </a>
      <div className="blood_truth">
        <img
          className="em_blood_mark"
          src="./img_src/em_blood_mark.png"
          alt="em_blood_mark"
        />
        <span>헌혈에 대한 오해와 진실</span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
