import { h, render } from 'preact';
import { HelloWorld } from './HelloWorld';

render(
        <HelloWorld name="Pot-Pot" />, document.querySelector('#app')
      );
