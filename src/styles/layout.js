import styled from "styled-components";

export const AppBackground = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
`;

export const Phone = styled.main`
  width: 100%;
  max-width: 430px;
  min-height: 100dvh;
  background: #fffaf0;
  position: relative;
  overflow-x: hidden;

  @media (min-width: 431px) {
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.12);
  }
`;

export const Page = styled.section`
  min-height: 100dvh;
  padding: max(25px, env(safe-area-inset-top)) 22px
    calc(105px + env(safe-area-inset-bottom));
`;

export const TopBar = styled.header`
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const BackButton = styled.button`
  border: none;
  background: transparent;
  color: #153865;
  padding: 8px 4px 8px 0;
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
`;

export const Progress = styled.div`
  color: #938b80;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
`;

export const ContentsLabel = styled.div`
  color: #ff6437;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.14em;
`;

export const ContentsTitle = styled.h1`
  margin: 7px 0 36px;
  color: #153865;
  font-family: Georgia, serif;
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -0.045em;
`;
