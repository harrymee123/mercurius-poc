#!/usr/bin/env node

import 'source-map-support/register';

import { ApiStack } from './stacks/api'
import { App } from 'aws-cdk-lib';

new ApiStack(new App())

