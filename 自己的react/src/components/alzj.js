import React from 'react';
import './css/index.css';
// 生命周期界面
class alzj extends React.Component {
  constructor(props) {
    super(props);
    // 返回解决this指向问题
    this.add = this.add.bind(this);
    this.addinfo = this.addinfo.bind(this);
    this.addj = this.addj.bind(this);
    this.queinfolist = this.queinfolist.bind(this);
    this.addinfoaaa = this.addinfoaaa.bind(this);
    this.state = {
      info: new Date(),
      a: 'xxx',
      num: 0,
      list: [
        { name: 'xxxx', info: 'aaaa' },
        { name: 'xxxx', info: 'aaaa' }
      ],
      xuanze: '',
      shuzu: [
        { name: '第一个' },
        { name: '第二个' },
        { name: '第三个' },
        { name: '第四个' },
        { name: '第五个' }
      ],
      numssss: 0
    };
  }
  // 返回上一级界面
  add() {
    this.props.history.goBack();
  }

  // 跟新声明周期
  addinfo() {
    this.setState((state, props) => ({
      a: 'xxxxxxxxxasdasd'
    }));
  }

  // 点击加1
  addj() {
    this.setState((state, props) => ({
      num: ++state.num
    }));
  }

  // 测试数组渲染
  queinfolist(e, index) {
    console.log(e, index);
    this.setState({
      xuanze: e.name + e.info + index
    });
  }

  // 点击变色
  addinfoaaa(res, index) {
    console.log(res, index);
    this.setState({
      numssss: index
    });
  }

  // 渲染第一次
  componentDidMount() {}
  // 卸载和摧毁数据
  componentWillUnmount() {
    /**
     * @一般会用于
     * setTimeout,setInterval removeEventListener warning
     */
  }
  render() {
    return (
      <div>
        <div onClick={this.add}>返回上一界面</div>
        <div>这是一个声明周期的了解的界面</div>

        {/* 一个很普通的跟新方式 */}
        <div>
          <div>{this.state.info.toLocaleDateString()}</div>
          <div>
            <button onClick={this.addinfo}>点击跟新视图</button>
          </div>
          <div>{this.state.a}</div>
        </div>

        {/* 点击数字++ */}
        <div>
          <div>
            <button onClick={this.addj}>加法</button>
          </div>
          <div>{this.state.num}</div>
        </div>

        {/* 数组的呈现 */}
        <div>
          <div className="infoaaw">循环点击选中</div>
          <div>
            {this.state.list.map((res, index) => {
              return (
                <div key={index} className="info">
                  <div>{res.name}</div>
                  <div>{res.info}</div>
                  <div onClick={() => this.queinfolist(res, index)}>ssss</div>
                </div>
              );
            })}
          </div>
          <div>我选择的是{this.state.xuanze}</div>
        </div>

        {/* 点击选中变色 */}
        <div>
          <div>
            {this.state.shuzu.flatMap((res, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => this.addinfoaaa(res, index)}
                    className={this.state.numssss === index ? 'iaaaa' : ''}
                  >
                    {res.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default alzj;
