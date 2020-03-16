import React, { Component } from 'react';
import TheHead from './TheHead';
import TheNav from './TheNav';
import TheFooter from './TheFooter';

class Page extends Component {
  render() {
    return (
      <div className="site">
        <TheHead />
        <TheNav />
        <main className="container">{this.props.children}</main>
        <TheFooter />
        <style jsx>
          {`
            .site {
              display: flex;
              min-height: 100vh;
              flex-direction: column;
            }
            main {
              flex: 1;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Page;
