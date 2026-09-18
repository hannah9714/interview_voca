import styled from "styled-components";
import BottomNavigation from "../components/BottomNavigation";
import ProgressBar from "../components/ProgressBar";
import {
  Page, TopBar, BackButton, Progress, ContentsLabel, ContentsTitle,
} from "../styles/layout";

const Chapter = styled.section`
  padding: 26px 0 20px;
  border-top: 1px dashed #aaa094;
  &:last-of-type { border-bottom: 1px dashed #aaa094; }
`;
const ChapterTop = styled.div`
  display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;
`;
const Part = styled.div`
  color:#ff6437; font-size:10px; font-weight:900; letter-spacing:.1em;
`;
const ChapterTitle = styled.h2`
  margin:4px 0 0; color:#153865; font-size:25px; line-height:1; letter-spacing:-.04em;
`;
const Korean = styled.div`color:#527869; font-size:12px; font-weight:800;`;
const Description = styled.div`margin-top:6px; color:#948c81; font-size:11px;`;
const DayButton = styled.button`
  width:100%; display:grid; grid-template-columns:66px 1fr 18px; align-items:center;
  gap:8px; padding:14px 3px; border:none; border-bottom:1px solid #eee6da;
  background:transparent; color:#262626; text-align:left; cursor:pointer;
  &:active { background:#f5ecdd; }
`;
const DayLabel = styled.span`color:#153865; font-size:11px; font-weight:900;`;
const DayTitle = styled.span`font-size:13px; font-weight:600;`;
const Arrow = styled.span`color:#b4aa9d; font-size:17px;`;

export default function ContentsPage({
  chapters, learnedCount, totalWords, progressPercent, openDay, setScreen,
}) {
  return (
    <>
      <Page>
        <TopBar>
          <BackButton onClick={() => setScreen("cover")}>← COVER</BackButton>
          <Progress>{learnedCount} / {totalWords} LEARNED</Progress>
        </TopBar>
        <ProgressBar percent={progressPercent} />
        <ContentsLabel>CABIN CREW INTERVIEW VOCA</ContentsLabel>
        <ContentsTitle>Contents</ContentsTitle>

        {chapters.map((chapter) => (
          <Chapter key={chapter.id}>
            <ChapterTop>
              <div>
                <Part>{chapter.part}</Part>
                <ChapterTitle>{chapter.title}</ChapterTitle>
                <Description>{chapter.description}</Description>
              </div>
              <Korean>{chapter.korean}</Korean>
            </ChapterTop>

            {chapter.days.map((day) => (
              <DayButton key={day.day} onClick={() => openDay(day)}>
                <DayLabel>DAY {String(day.day).padStart(2, "0")}</DayLabel>
                <DayTitle>{day.title}</DayTitle>
                <Arrow>›</Arrow>
              </DayButton>
            ))}
          </Chapter>
        ))}
      </Page>
      <BottomNavigation screen="contents" setScreen={setScreen} />
    </>
  );
}
