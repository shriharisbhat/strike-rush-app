import { download } from './assets/';
export const App = (): JSX.Element => {
  return (
    <>
      <h1>Hello World</h1>
      <img src={download} />
    </>
  );
};
