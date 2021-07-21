import { connect } from 'react-redux';

import useInput from '../../hooks';
import { authOperations } from '../../redux/auth';

const RegisterView = ({ onRegister }) => {
  const name = useInput('');
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    onRegister(user);
  };

  return (
    <div>
      <h1>RegisterView</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name.value} onChange={name.onChange} />
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

const mapDispatchToProps = dispatch => ({
  onRegister: data => {
    console.log(data);
    return dispatch(authOperations.register(data));
  },
});

export default connect(null, mapDispatchToProps)(RegisterView);
