# cs-api-authentication-errors
authentication error message processing

## Install

```
npm install --save ControlSpaceSoftware/cs-api-authentication-errors
```

## Usage

```
import {processError} from 'cs-api-authentication-errors'
const error = {code: 'InternalFailure', message: 'some server message'};
const message = processError(error);
console.log(message); // output follows
{
     "code": "InternalFailure",
     "message": "The request processing has failed because of an unknown error, exception or failure.",
     "error": {
          "code": "InternalFailure",
          "message": "some server message"
     }
}
```


```
import {validateUserInput} from 'cs-api-authentication-errors'
const userInput = {};
const requiredFields = \['name', 'email', 'password', 'newPassword', 'code'];
const result = validateUserInput(requiredFields, userInput);
console.log(result); // output follows
{
     "code": "UserInputValidationMessages",
     "messages": [
          {
               "code": "UserInputMissingName",
               "message": "Your name is required.",
               "error": {
                    "field": "name"
               }
          },
          {
               "code": "UserInputMissingEmail",
               "message": "Your account email address is required.",
               "error": {
                    "field": "email"
               }
          },
          {
               "code": "UserInputMissingPassword",
               "message": "Your account password is required.",
               "error": {
                    "field": "password"
               }
          },
          {
               "code": "UserInputMissingNewPassword",
               "message": "A new password is required.",
               "error": {
                    "field": "newPassword"
               }
          },
          {
               "code": "UserInputMissingCode",
               "message": "The confirmation code we sent to you is required.",
               "error": {
                    "field": "code"
               }
          }
     ]
}


```

