const LandingPage = ({ color }) => {
  console.log('I am in the component', color);
  return <h1>Landing</h1>;
};

LandingPage.getInitialProps = async (context) => {
  console.log('LANDING PAGE!');
  return { color: 'red' };
};

export default LandingPage;
