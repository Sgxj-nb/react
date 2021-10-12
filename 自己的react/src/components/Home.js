import React from 'react';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.out = this.out.bind(this);
    this.add = this.add.bind(this);
    this.state = {};
  }

  // 返回上一级
  out() {
    this.props.history.goBack();
  }
  // 跳转界面
  add() {
    this.props.history.push({
      pathname: '/two',
      state: { name: 'xxx', code: 'xxxx' }
    });
  }
  render() {
    return (
      <div>
        <div onClick={this.out}>返回上与各界面</div>
        <br></br>
        <div>我是首页界面</div>
        <br></br>
        <div onClick={this.add}>我要跳转到其他界面</div>
        <br></br>
      </div>
    );
  }
}

export default Home;
