import React from 'react';
import reactDom from 'react-dom';
// import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { HookApp } from './HookApp';

reactDom.render(<CounterWithCustomHook />, document.getElementById('root'));