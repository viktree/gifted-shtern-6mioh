import * as React from 'react';
import { render } from 'react-dom';

import * as dotenv from 'dotenv';

import App from './App';

dotenv.config();

const rootElement = document.getElementById('root');
render(<App />, rootElement);
