import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
`;
const Page = () => {
  return (
    <PageWrapper>
      <h1>Gangadhar Mullapudi</h1>
      <h2>Sr Software Engineer</h2>
      <h3>Technologies</h3>
      <div>
        <h4>Front End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Nextjs</li>
        </ul>
      </div>
    </PageWrapper>
  );
};

export default Page;
