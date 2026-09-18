import styled from "styled-components";

const Card = styled.article`
  padding: 30px 0 28px;
  border-bottom: 1px solid #ddd3c5;
`;

const Number = styled.div`
  color: #b2a99d;
  font-family: Georgia, serif;
  font-size: 10px;
`;

const Word = styled.div`
  margin-top: 3px;
  color: #167565;
  font-family: Georgia, serif;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.035em;
`;

const MeaningArea = styled.div`
  margin-top: 20px;
`;

const Meaning = styled.div`
  min-height: 28px;
  color: #172c49;
  font-size: 18px;
  font-weight: 850;
`;

const HiddenMeaning = styled.div`
  width: 135px;
  height: 22px;
  border-radius: 4px;
  background: repeating-linear-gradient(
    -45deg,
    #ebe4d9,
    #ebe4d9 4px,
    #e3dbcf 4px,
    #e3dbcf 8px
  );
`;

const Phrase = styled.div`
  display: inline-block;
  margin-top: 15px;
  padding: 8px 10px;
  background: #efe8da;
  color: #477161;
  font-size: 12px;
  font-weight: 800;
`;

const Example = styled.div`
  margin-top: 15px;
  color: #504c46;
  font-family: Georgia, serif;
  font-size: 15px;
  line-height: 1.65;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  min-height: 44px;
  border: 1px solid ${({ $learned }) => ($learned ? "#167565" : "#d2c8ba")};
  border-radius: 5px;
  background: ${({ $learned }) => ($learned ? "#167565" : "transparent")};
  color: ${({ $learned }) => ($learned ? "#fff" : "#645e55")};
  font-size: 11px;
  font-weight: 850;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export default function WordCard({
  item,
  index,
  isMeaningVisible,
  isLearned,
  onToggleMeaning,
  onToggleLearned,
}) {
  return (
    <Card>
      <Number>{String(index + 1).padStart(2, "0")}</Number>
      <Word>{item.word}</Word>

      <MeaningArea>
        {/* <Meaning>{isMeaningVisible ? item.meaning : <HiddenMeaning />}</Meaning> */}
        <Meaning>{item.meaning}</Meaning>
        <Phrase>{item.phrase}</Phrase>
        <Example>{item.example}</Example>
      </MeaningArea>

      <Actions>
        <ActionButton onClick={onToggleMeaning}>
          {isMeaningVisible ? "뜻 가리기" : "뜻 보기"}
        </ActionButton>
        <ActionButton $learned={isLearned} onClick={onToggleLearned}>
          {isLearned ? "✓ 암기 완료" : "암기 체크"}
        </ActionButton>
      </Actions>
    </Card>
  );
}
