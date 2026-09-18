import styled from "styled-components";
import BottomNavigation from "../components/BottomNavigation";
import {
  Page, TopBar, BackButton, Progress, ContentsLabel, ContentsTitle,
} from "../styles/layout";

const Empty = styled.div`
  padding:70px 20px; text-align:center; color:#9b9287;
`;
const EmptyIcon = styled.div`font-size:35px; margin-bottom:13px;`;
const EmptyTitle = styled.div`color:#153865; font-weight:900; font-size:16px;`;
const EmptyDescription = styled.div`margin-top:7px; font-size:12px; line-height:1.6;`;
const Item = styled.div`padding:20px 0; border-bottom:1px solid #e2d9cc;`;
const Word = styled.div`
  color:#167565; font-family:Georgia,serif; font-size:26px; font-weight:700;
`;
const Meaning = styled.div`
  margin-top:5px; color:#172c49; font-size:13px; font-weight:700;
`;
const Phrase = styled.div`margin-top:8px; color:#8b8277; font-size:11px;`;

export default function LearnedPage({
  learnedWords, learnedCount, goContents, setScreen,
}) {
  return (
    <>
      <Page>
        <TopBar>
          <BackButton onClick={goContents}>← CONTENTS</BackButton>
          <Progress>{learnedCount} WORDS</Progress>
        </TopBar>
        <ContentsLabel>MY VOCABULARY</ContentsLabel>
        <ContentsTitle>Learned</ContentsTitle>

        {learnedWords.length === 0 ? (
          <Empty>
            <EmptyIcon>✓</EmptyIcon>
            <EmptyTitle>아직 암기한 단어가 없어요</EmptyTitle>
            <EmptyDescription>
              DAY를 선택하고 외운 단어에<br />암기 체크를 눌러보세요.
            </EmptyDescription>
          </Empty>
        ) : (
          learnedWords.map((item) => (
            <Item key={item.key}>
              <Word>{item.word}</Word>
              <Meaning>{item.meaning}</Meaning>
              <Phrase>{item.phrase}</Phrase>
            </Item>
          ))
        )}
      </Page>
      <BottomNavigation screen="learned" setScreen={setScreen} />
    </>
  );
}
