import { render } from 'react-dom';
import { App } from './App';

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    __meta: {
      VERSION: string;
      BUILD_MODE: string;
    };
  }
}

window.__meta = {
  VERSION: __LAST_COMMIT__,
  BUILD_MODE: __BUILD_MODE__
};

const root: HTMLElement = document.getElementById('root') as HTMLElement;
render(<App />, root);
