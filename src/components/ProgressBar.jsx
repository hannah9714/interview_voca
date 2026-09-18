import styled from "styled-components";

const Track = styled.div`
  height: 4px;
  background: #e9e1d4;
  border-radius: 100px;
  overflow: hidden;
  margin-top: -18px;
  margin-bottom: 35px;
`;

const Fill = styled.div`
  width: ${({ $percent }) => `${$percent}%`};
  height: 100%;
  background: #1b7867;
  transition: width 0.3s ease;
`;

export default function ProgressBar({ percent }) {
  return (
    <Track>
      <Fill $percent={percent} />
    </Track>
  );
}
