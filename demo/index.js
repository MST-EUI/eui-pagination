/*
* annotation like `placeholder begin *** and
* placeholder end ***` is required for generate eui manual, please keep it
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Code } from '@mistong/eui';

/* placeholder begin eui style */
import '@mistong/eui/dist/index.css';
/* placeholder end eui style */

/* placeholder begin src */
import Pagination from '../src';
/* placeholder end src */

import './index.scss';

/* placeholder begin class */
class DemoComponent extends React.Component {
  render() {
    const basedStyleCode = `import { Pagination } from '@mistong/eui';

<Pagination
  total={100}
  pageSize={10}
/>
`;
    const withJumpToPageCode = `import { Pagination } from '@mistong/eui';

<Pagination
  total={100}
  pageSize={10}
  style={{ margin: '30px 0' }}
  defaultCurrent={2}
  showQuickJumper={{ goButton: <button>Go</button> }}
/>
`;
    const miniModeCode = `import { Pagination } from '@mistong/eui';

<Pagination
  total={100}
  style={{ margin: '30px 0' }}
  defaultCurrent={2}
  simple
/>
`;

    const noBorderModeCode = `import { Pagination } from '@mistong/eui';

<Pagination
  showQuickJumper
  total={100}
  style={{ margin: '30px 0' }}
  defaultCurrent={2}
  size="small"
/>
`;

    return (
      <div className="eui-pagination-demo">
        <div className="eui-pagination-demo-content">
          <h2>Pagination 分页</h2>
          <p>分页组件</p>
          <h3>代码演示</h3>
          <Code sourceCode={basedStyleCode} buttonText="基础模式">
            <Pagination
              total={100}
              pageSize={10}
            />
          </Code>
          <Code sourceCode={withJumpToPageCode} buttonText="跳转到第 N 页">
            <Pagination
              total={100}
              pageSize={10}
              style={{ margin: '30px 0' }}
              defaultCurrent={2}
              showQuickJumper={{ goButton: <button>Go</button> }}
            />
          </Code>
          <Code sourceCode={miniModeCode} buttonText="极简模式">
            <Pagination
              total={100}
              style={{ margin: '30px 0' }}
              defaultCurrent={2}
              simple
            />
          </Code>
          <Code sourceCode={noBorderModeCode} buttonText="无边框模式">
            <Pagination
              showQuickJumper
              total={100}
              style={{ margin: '30px 0' }}
              defaultCurrent={2}
              size="small"
            />
          </Code>
          <h3>API</h3>
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>defaultCurrent</td>
                <td>默认的当前页数</td>
                <td>Number</td>
                <td>1</td>
              </tr>
              <tr>
                <td>current</td>
                <td>当前页码</td>
                <td>Number</td>
                <td>undefined</td>
              </tr>
              <tr>
                <td>total</td>
                <td>总记录数</td>
                <td>Number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>pageSize</td>
                <td>每页条数</td>
                <td>Number</td>
                <td>10</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>页码改变的回调</td>
                <td>Function(current, pageSize)</td>
                <td>-</td>
              </tr>
              <tr>
                <td>showQuickJumper</td>
                <td>是否可以快速跳转至某页</td>
                <td>Bool / Object</td>
                <td>false</td>
              </tr>
              <tr>
                <td>prefixCls</td>
                <td>样式名前缀</td>
                <td>string</td>
                <td>eui-pagination</td>
              </tr>
              <tr>
                <td>simple</td>
                <td>当添加该属性时，显示为简单分页</td>
                <td>Object</td>
                <td>null</td>
              </tr>
              <tr>
                <td>size</td>
                <td>尺寸</td>
                <td>string</td>
                <td>samll</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
/* placeholder end class */

/* placeholder begin ReactDOM */
ReactDOM.render(
  <DemoComponent />,
  document.getElementById('app'),
);
/* placeholder end ReactDOM */
