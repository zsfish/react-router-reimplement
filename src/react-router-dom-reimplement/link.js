import React, { Component } from 'react';
import { RouterContext } from './routerContext';

export default function Link({to, children, ...restProps}) {
  const context = React.useContext(RouterContext);
  const handleClick = e => {
    e.preventDefault();
    context.history.push(to);
  }
  return (
    <a href={to} {...restProps} onClick={handleClick}>
      {children}
    </a>
  )
}