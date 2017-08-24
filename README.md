# cs-api-authentication-errors
authentication error message processing

## Install

```
npm install --save-dev ControlSpaceSoftware/cs-api-authentication-errors
```

## Usage

```
import {processError} from 'cs-api-authentication-errors'
const error = {code: 'InternalFailure', message: 'some server message'};
const message = processError(error);
console.log(message);
```
