import styled from "styled-components";
import BottomNavigation from "../components/BottomNavigation";
import ProgressBar from "../components/ProgressBar";
import WordCard from "../components/WordCard";
import { Page, TopBar, BackButton, Progress } from "../styles/layout";

const Header = styled.div`
  padding-bottom: 19px;
  border-bottom: 3px solid #153865;
`;
const Number = styled.div`
  color: #ff6437;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.14em;
`;
const Heading = styled.h1`
  margin: 6px 0 0;
  color: #153865;
  font-size: 29px;
  line-height: 1.25;
  letter-spacing: -0.045em;
`;
const Amount = styled.div`
  margin-top: 8px;
  color: #9b9287;
  font-size: 10px;
  font-weight: 800;
`;

export default function DayPage({
  selectedDay,
  learned,
  showMeaning,
  learnedCount,
  totalWords,
  progressPercent,
  toggleMeaning,
  toggleLearned,
  goContents,
  setScreen,
}) {
  return (
    <>
      <Page>
        <TopBar>
          <BackButton onClick={goContents}>← CONTENTS</BackButton>
          <Progress>
            {learnedCount} / {totalWords} LEARNED
          </Progress>
        </TopBar>
        <ProgressBar percent={progressPercent} />

        <Header>
          <Number>DAY {String(selectedDay.day).padStart(2, "0")}</Number>
          <Heading>{selectedDay.title}</Heading>
          <Amount>{selectedDay.words.length} WORDS</Amount>
        </Header>

        {selectedDay.words.map((item, index) => {
          const key = `${selectedDay.day}-${index}`;
          return (
            <WordCard
              key={key}
              item={item}
              index={index}
              isMeaningVisible={!!showMeaning[key]}
              isLearned={!!learned[key]}
              onToggleMeaning={() => toggleMeaning(selectedDay, index)}
              onToggleLearned={() => toggleLearned(selectedDay, index)}
            />
          );
        })}
      </Page>
      <BottomNavigation screen="day" setScreen={setScreen} />
    </>
  );
}
