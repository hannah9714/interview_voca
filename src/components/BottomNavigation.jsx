import styled from "styled-components";

const BottomNav = styled.nav`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px 12px calc(8px + env(safe-area-inset-bottom));
  background: rgba(255, 250, 240, 0.96);
  border-top: 1px solid #ded5c8;
  backdrop-filter: blur(12px);
  z-index: 100;
`;

const NavButton = styled.button`
  min-height: 49px;
  border: none;
  background: transparent;
  color: ${({ $active }) => ($active ? "#153865" : "#a39b90")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const NavIcon = styled.div`
  font-size: 18px;
  line-height: 1;
`;

const NavText = styled.div`
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.06em;
`;

export default function BottomNavigation({ screen, setScreen }) {
  const move = (target) => {
    setScreen(target);
    window.scrollTo({ top: 0 });
  };

  return (
    <BottomNav>
      <NavButton $active={screen === "cover"} onClick={() => move("cover")}>
        <NavIcon>⌂</NavIcon><NavText>HOME</NavText>
      </NavButton>
      <NavButton $active={screen === "contents"} onClick={() => move("contents")}>
        <NavIcon>☰</NavIcon><NavText>DAYS</NavText>
      </NavButton>
      <NavButton $active={screen === "learned"} onClick={() => move("learned")}>
        <NavIcon>✓</NavIcon><NavText>LEARNED</NavText>
      </NavButton>
    </BottomNav>
  );
}
