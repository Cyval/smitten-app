import { compose, merge } from 'react-komposer';
import ForgotPasswordForm from './ForgotPasswordForm';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer(props, onData) {
  onData(null, {});
}

const depsToPropsMapper = (context, actions) => ({
  context: context,
  forgotPassword: actions.forgot_password.forgotPassword
});

export default merge(compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper))(ForgotPasswordForm);
