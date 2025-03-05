import { Wrapper } from './shared/Wrapper';

const Home = () => {
  return (
    <Wrapper>
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
      <div>
        <h4>Back End</h4>
        <ul>
          <li>Nodejs</li>
          <li>Express</li>
        </ul>
      </div>
      <div>
        <h4>Database</h4>
        <ul>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Home;
