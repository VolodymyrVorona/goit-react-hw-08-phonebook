const getIsAuthenticated = state => state.auth.token;

const getUserEmail = state => state.auth.user.email;

const getUserName = state => state.auth.user.name;

// const getUser = state => state?.auth?.user;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUserEmail,
  getUserName,
  // getUser,
};
