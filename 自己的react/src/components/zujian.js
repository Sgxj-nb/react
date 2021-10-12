// 子组件
import React, { Component } from 'react';

class Binfo extends Component {
  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 我是子组件里面定义的方法
  addshowinfo() {
    console.log('我是子组件我被调用了');
  }

  // 子组件点击事件
  addpassword(e) {
    this.props.name(e.target.value);
  }
  render() {
    return (
      <div>
        <div>我是子组件啊实打实大苏打</div>
        {/* 子组件通过this.props来接到父组件传递过来的值 */}
        <div>{this.props.txt}</div>

        {/* 
        子组件调取父组件的函数需把这个指写成一个函数的形式,
        在利用props来完成父组件方法的调取 
        */}
        <button
          onClick={() => {
            this.props.addshowa();
          }}
        >
          点击
        </button>

        {/* 子组件传值去子组件 */}
        <div>
          <div>xxx</div>
          <div onClick={this.props.toFatherValue.bind(this, '88888')}>
            我是子组件我要获取子组件方法
          </div>
        </div>
      </div>
    );
  }
}

export default Binfo;
