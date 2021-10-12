import React from 'react';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  doLogin = () => {
    let username = document.querySelector('input[type=text]').value;
    let password = document.querySelector('input[type=password]').value;
    console.log(username, password);
    if (username && password) {
      this.setState({
        login: true
      });
    }
  };

  render() {
    if (this.state.login) {
      return <Redirect to="/home" />;
    } else {
      // alert('登录失败');
      console.log(111);
    }
    return (
      <div>
        <form onSubmit={this.doLogin}>
          账号：
          <input type="text" />
          <br />
          密码：
          <input type="password" />
          <br />
          <input type="submit" value="登录" />
        </form>
      </div>
    );
  }
}

export default Login;
