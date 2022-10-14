const err = {
  // Sign in
  'auth/invalid-email': 'Email or password is incorrect',
  'auth/wrong-password': 'Email or password is incorrect',

  // Sign up
  'auth/email-already-in-use': 'Email address is already registered',

  // Forget password
  'auth/user-not-found': 'User not found'
}

const getErrorMessage = (errorCode) => {
  return err[errorCode] || 'Maybe there was something wrong'
}

export default getErrorMessage
