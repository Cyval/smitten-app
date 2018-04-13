import { compose, merge } from 'react-komposer';
import SignupForm from './SignupForm';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer(props, onData) {
  console.log(props);
  onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context: context,
  signupDefault: actions.signup.signUpDefault,
  signUpWithFacebook: actions.signup.signUpWithFacebook
});

export default merge(compose(getTrackerLoader(composer)), useDeps(depsToPropsMapper))(SignupForm);
