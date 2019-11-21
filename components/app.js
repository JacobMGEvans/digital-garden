import React, { Component } from 'react';
import { render } from 'react-dom';

export const app = () =>  (<div> Hello World </div>)

render(<app></app>, document.getElementById('root'))
