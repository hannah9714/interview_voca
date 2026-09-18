import { useMemo, useState } from "react";
import { chapters } from "./data/vocabulary";
import GlobalStyle from "./styles/GlobalStyle";
import { AppBackground, Phone } from "./styles/layout";

import CoverPage from "./pages/CoverPage";
import ContentsPage from "./pages/ContentsPage";
import DayPage from "./pages/DayPage";
import LearnedPage from "./pages/LearnedPage";

function App() {
  const [screen, setScreen] = useState("cover");
  const [selectedDay, setSelectedDay] = useState(null);
  const [showMeaning, setShowMeaning] = useState({});
  const [learned, setLearned] = useState({});

  const allDays = useMemo(
    () => chapters.flatMap((chapter) => chapter.days),
    [],
  );

  const allWords = useMemo(
    () =>
      allDays.flatMap((day) =>
        day.words.map((word, index) => ({
          ...word,
          day: day.day,
          index,
          key: `${day.day}-${index}`,
        })),
      ),
    [allDays],
  );

  const learnedWords = allWords.filter((item) => learned[item.key]);
  const totalWords = allWords.length;
  const learnedCount = learnedWords.length;
  const progressPercent =
    totalWords === 0 ? 0 : Math.round((learnedCount / totalWords) * 100);

  const openDay = (day) => {
    setSelectedDay(day);
    setScreen("day");
    window.scrollTo({ top: 0 });
  };

  const goContents = () => {
    setScreen("contents");
    window.scrollTo({ top: 0 });
  };

  const toggleMeaning = (day, index) => {
    const key = `${day.day}-${index}`;
    setShowMeaning((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleLearned = (day, index) => {
    const key = `${day.day}-${index}`;
    setLearned((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <GlobalStyle />
      <AppBackground>
        <Phone>
          {screen === "cover" && <CoverPage onStart={goContents} />}

          {screen === "contents" && (
            <ContentsPage
              chapters={chapters}
              learnedCount={learnedCount}
              totalWords={totalWords}
              progressPercent={progressPercent}
              openDay={openDay}
              setScreen={setScreen}
            />
          )}

          {screen === "day" && selectedDay && (
            <DayPage
              selectedDay={selectedDay}
              learned={learned}
              showMeaning={showMeaning}
              learnedCount={learnedCount}
              totalWords={totalWords}
              progressPercent={progressPercent}
              toggleMeaning={toggleMeaning}
              toggleLearned={toggleLearned}
              goContents={goContents}
              setScreen={setScreen}
            />
          )}

          {screen === "learned" && (
            <LearnedPage
              learnedWords={learnedWords}
              learnedCount={learnedCount}
              goContents={goContents}
              setScreen={setScreen}
            />
          )}
        </Phone>
      </AppBackground>
    </>
  );
}

export default App;
