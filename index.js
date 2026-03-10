/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const core = require('@actions/core');

const setup = require('./lib/setup-tofu');
const { getErrorMessage, getErrorDetail } = require('./lib/error-utils');

(async () => {
  try {
    await setup();
  } catch (error) {
    const message = getErrorMessage(error);
    core.debug(getErrorDetail(error));
    core.setFailed(message);
  }
})();
