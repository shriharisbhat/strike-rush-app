import { download } from './assets/';
export const App = (): JSX.Element => {
  console.log('first');
  return (
    <>
      <h1>Hello World</h1>
      <img src={download} />
    </>
  );
};
