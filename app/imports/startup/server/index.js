// Import server startup through a single index entry point

import './fixtures.js';
import './register-api.js';
import accounts from './accounts-config';
import slingshot from './slingshot-config';

accounts();
slingshot();