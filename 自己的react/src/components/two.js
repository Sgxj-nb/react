import React from 'react';
import Zinfo from './zujian'; // 引入子组件
// import { Redirect } from 'react-router-dom';
class two extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zuL: '组件传值',
      sta: '', // 接受子组件传递过来的参数
      ceshi: 'xxxxxxxxxxx'
    };
  }

  // 接口路由传递过来的参数
  quetinfo() {
    if (this.props.location.state) {
      console.log(this.props.location.state);
    }
  }

  // 父组件调取子组件方法
  showinfo(res) {
    this.Zinfo.addshowinfo();
  }

  // 子组件调取我
  showifnoawdwa() {
    console.log('我是父组件我被子组件调用了');
  }
  // 获取父组件的值
  toFatherValue(e) {
    console.log('我是', e);
    this.setState({
      childValue: e
    });
  }

  // 渲染的生命周期
  componentDidMount() {
    let zhi = this.state.ceshi;
    this.setState({
      zhis: zhi
    });
  }

  // 跳转界面
  addtiaozhuan() {
    this.props.history.push('/alzj');
  }
  render() {
    this.quetinfo();
    // this.showinfoa();
    return (
      <div>
        <div>{this.zhis}</div>
        <div>我是第三个界面</div>
        {/* 父组件传值去子组件 */}
        <Zinfo
          onRef={(ref) => {
            this.Zinfo = ref;
          }}
          txt={this.state.zuL}
          addshowa={this.showifnoawdwa}
          toFatherValue={this.toFatherValue.bind(this)}
        ></Zinfo>
        {/* 调取子组件的方法 */}
        <div>
          <button onClick={this.showinfo.bind(this)}>我是调取子组件方法</button>
        </div>

        {/* 跳转到另外的组件界面 */}
        <div>
          <button onClick={this.addtiaozhuan.bind(this)}>跳转到组件界面</button>
        </div>
      </div>
    );
  }
}

export default two;
