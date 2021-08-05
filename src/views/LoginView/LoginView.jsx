import { connect } from 'react-redux';

import useInput from '../../hooks';
import { authOperations } from '../../redux/auth';

import st from './LoginView.module.css';

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
      <b className={st.title}>Please, log in</b>

      <form className={st.form} onSubmit={handleSubmit}>
        <label className={st.formField}>
          Email
          <input
            className={st.formInput}
            type="email"
            value={email.value}
            required
            placeholder="peter.parker@gmail.com"
            onChange={email.onChange}
          />
        </label>
        <label className={st.formField}>
          Password
          <input
            className={st.formInput}
            type="password"
            value={password.value}
            required
            onChange={password.onChange}
          />
        </label>

        <button className={st.formButton} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

const mdtp = {
  onLogin: authOperations.logIn,
};

export default connect(null, mdtp)(LoginView);

// eslint-disable-next-line no-lone-blocks
{
  /* <div>
  <b className="login-page-call">Please, log in</b>

  <form
    className="login-form"
    autoComplete="off"
    onSubmit={this.handleFormSubmit}
  >
    <label className="login-form-field">
      Email
      <input
        className="login-form-input"
        type="email"
        name="email"
        value={email}
        required
        placeholder="peter.parker@gmail.com"
        onChange={this.handleInputChange}
      />
    </label>

    <label className="login-form-field">
      Password
      <input
        className="login-form-input"
        type="password"
        name="password"
        value={password}
        required
        onChange={this.handleInputChange}
      />
    </label>

    <button className="login-form-button" type="submit">
      Log in
    </button>
  </form>
</div>; */
}
