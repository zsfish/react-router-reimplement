import React, { Component } from 'react'
import { RouterContext } from './routerContext';
import matchPath from './matchPath';
export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const { location } = context;
            const { path, component, children, render, computedMatch } = this.props;
            const match = computedMatch ? computedMatch : path ? matchPath(location.pathname, this.props) : context.match; // 如果没有path，会返回空值，需要在父级做处理
            const props = { ...context, location, match };
            // const match = location.pathname === path;
            // children component render
            // match children > component > render
            // 不match children(function) > null
            // return match ? React.createElement(component) : null;
            return match 
            ? 
            children ? (typeof children === 'function') ? children(props) : children
            : component ? React.createElement(component, props) :
            render ? render(children) : null
            : typeof children === "function" ? children(props) : null
          }
        }
      </RouterContext.Consumer>
    )
  }
}