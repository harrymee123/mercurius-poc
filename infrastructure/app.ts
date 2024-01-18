#!/usr/bin/env node

import 'source-map-support/register';

import { ApiStack } from './stacks/api'
import { App } from 'aws-cdk-lib';
import { Construct } from 'constructs';

class MercuriusPoc extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new ApiStack(scope)
  }
}

const app = new App();

new MercuriusPoc(app, 'poc-app');

