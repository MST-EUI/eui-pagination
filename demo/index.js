import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from '../src/index';

import './demo.scss';

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <Pagination
          total={100}
          pageSize={10}
        />

        <Pagination
          total={100}
          pageSize={10}
          style={{ margin: '30px 0' }}
          defaultCurrent={2}
          showQuickJumper={{ goButton: <button>Go</button> }}
        />

        <Pagination
          total={100}
          style={{ margin: '30px 0' }}
          defaultCurrent={2}
          simple
        />

        <Pagination
          showQuickJumper
          total={100}
          style={{ margin: '30px 0' }}
          defaultCurrent={2}
          size="small"
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
