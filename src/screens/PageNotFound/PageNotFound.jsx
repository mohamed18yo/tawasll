import styled from "styled-components";

const DivPageNotFound = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }
button{
    width: 13%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.8rem;
  }
`;
export default function PageNotFound() {
  return (
    <DivPageNotFound>
      <img src="/static/pageNotFound.png" alt="404" />
      <button>
        ${`<<-`}Back to Home  </button>
    </DivPageNotFound>
  );
}
