import styled from "styled-components";

const Cover = styled.section`
  min-height: 100dvh;
  background: #153865;
  color: #fff8e8;
  padding: max(55px, env(safe-area-inset-top)) 28px
    max(34px, env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background: #ff6437;
    top: -105px;
    right: -90px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 160px;
    height: 160px;
    border: 28px solid rgba(255,255,255,.06);
    border-radius: 50%;
    bottom: -80px;
    left: -70px;
  }
`;

const Top = styled.div`position: relative; z-index: 2;`;
const Bottom = styled.div`position: relative; z-index: 2;`;
const Edition = styled.div`
  color:#ff7248; font-size:11px; font-weight:900; letter-spacing:.16em;
`;
const Title = styled.h1`
  margin:35px 0 0; font-size:clamp(65px,20vw,88px); line-height:.83;
  letter-spacing:-.075em; font-weight:950;
`;
const Number = styled.div`
  margin-top:38px; font-family:Georgia,serif; font-size:17px; opacity:.65;
`;
const Subtitle = styled.h2`
  margin:5px 0 0; color:#ff6437; font-size:25px; line-height:1.05;
  letter-spacing:-.04em;
`;
const Description = styled.p`
  margin-top:24px; color:#dbe4ef; font-size:14px; line-height:1.8;
`;
const Category = styled.div`
  margin-bottom:19px; color:#aebdd0; font-size:10px; letter-spacing:.08em;
  font-weight:800;
`;
const Start = styled.button`
  width:100%; height:58px; border:none; border-radius:5px; background:#ff6437;
  color:white; font-size:14px; font-weight:900; letter-spacing:.04em;
  box-shadow:5px 5px 0 #fff1cf; cursor:pointer;
  &:active { transform:translate(3px,3px); box-shadow:2px 2px 0 #fff1cf; }
`;

export default function CoverPage({ onStart }) {
  return (
    <Cover>
      <Top>
        <Edition>CABIN CREW INTERVIEW EDITION</Edition>
        <Title>JIHYE'S<br />VOCA</Title>
        <Number>500</Number>
        <Subtitle>INTERVIEW<br />WORDS</Subtitle>
        <Description>
          외항사 면접에서 바로 꺼내 쓰는<br />
          서비스 · 안전 · 팀워크 · 가치관<br />
          핵심 영어 단어
        </Description>
      </Top>
      <Bottom>
        <Category>VERBS · NOUNS · ADJECTIVES · ADVERBS</Category>
        <Start onClick={onStart}>START STUDY →</Start>
      </Bottom>
    </Cover>
  );
}
