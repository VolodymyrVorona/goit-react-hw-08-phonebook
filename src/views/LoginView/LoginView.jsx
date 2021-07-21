import { connect } from 'react-redux';

import useInput from '../../hooks';
import { authOperations } from '../../redux/auth';

const LoginView = ({ onLogin }) => {
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email: email.value,
      password: password.value,
    };

    onLogin(user);
  };

  return (
    <div>
      <h1>LoginView</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email.value} onChange={email.onChange} />
        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
        />

        <button type="submit">SEND EMAIL</button>
      </form>
    </div>
  );
};

const mdtp = {
  onLogin: authOperations.logIn,
};

export default connect(null, mdtp)(LoginView);
