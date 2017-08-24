"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {

	// common cognito errors
	"AccessDeniedException": {
		"message": "You do not have sufficient access to perform this action.",
		"statusCode": "400",
		"code": "AccessDeniedException"
	},
	"IncompleteSignature": {
		"message": "The request signature does not conform to AWS standards.",
		"statusCode": "400",
		"code": "IncompleteSignature"
	},
	"InternalFailure": {
		"message": "The request processing has failed because of an unknown error, exception or failure.",
		"statusCode": "500",
		"code": "InternalFailure"
	},
	"InvalidAction": {
		"message": "The action or operation requested is invalid. Verify that the action is typed correctly.",
		"statusCode": "400",
		"code": "InvalidAction"
	},
	"InvalidClientTokenId": {
		"message": "The X.509 certificate or AWS access key ID provided does not exist in our records.",
		"statusCode": "403",
		"code": "InvalidClientTokenId"
	},
	"InvalidParameterCombination": {
		"message": "Parameters that must not be used together were used together.",
		"statusCode": "400",
		"code": "InvalidParameterCombination"
	},
	"InvalidParameterValue": {
		"message": "An invalid or out-of-range value was supplied for the input parameter.",
		"statusCode": "400",
		"code": "InvalidParameterValue"
	},
	"InvalidQueryParameter": {
		"message": "The AWS query string is malformed or does not adhere to AWS standards.",
		"statusCode": "400",
		"code": "InvalidQueryParameter"
	},
	"MalformedQueryString": {
		"message": "The query string contains a syntax error.",
		"statusCode": "404",
		"code": "MalformedQueryString"
	},
	"MissingAction": {
		"message": "The request is missing an action or a required parameter.",
		"statusCode": "400",
		"code": "MissingAction"
	},
	"MissingAuthenticationToken": {
		"message": "The request must contain either a valid (registered) AWS access key ID or X.509 certificate.",
		"statusCode": "403",
		"code": "MissingAuthenticationToken"
	},
	"MissingParameter": {
		"message": "A required parameter for the specified action is not supplied.",
		"statusCode": "400",
		"code": "MissingParameter"
	},
	"OptInRequired": {
		"message": "The AWS access key ID needs a subscription for the service.",
		"statusCode": "403",
		"code": "OptInRequired"
	},
	"RequestExpired": {
		"message": "The request reached the service more than 15 minutes after the date stamp on the request or more than 15 minutes after the request expiration date (such as for pre-signed URLs), or the date stamp on the request is more than 15 minutes in the future.",
		"statusCode": "400",
		"code": "RequestExpired"
	},
	"ServiceUnavailable": {
		"message": "The request has failed due to a temporary failure of the server.",
		"statusCode": "503",
		"code": "ServiceUnavailable"
	},
	"ThrottlingException": {
		"message": "The request was denied due to request throttling.",
		"statusCode": "400",
		"code": "ThrottlingException"
	},
	"ValidationError": {
		"message": "The input fails to satisfy the constraints specified by an AWS service.",
		"statusCode": "400",
		"code": "ValidationError"
	},

	// specific cognito errors
	// AdminGetUser
	// ConfirmForgotPassword
	// AdminInitiateAuth
	// ConfirmSignUp
	// ForgotPassword
	// GetUser
	// GetUserAttributeVerificationCode
	// InitiateAuth
	// ResendConfirmationCode
	// SignUp
	// UpdateUserAttributes
	// VerifyUserAttribute
	"CodeMismatchException": {
		"message": "This exception is thrown if the provided code does not match what the server was expecting.",
		"statusCode": "400",
		"code": "CodeMismatchException"
	},
	"ExpiredCodeException": {
		"message": "This exception is thrown if a code has expired.",
		"statusCode": "400",
		"code": "ExpiredCodeException"
	},
	"InternalErrorException": {
		"message": "This exception is thrown when Amazon Cognito encounters an internal error.",
		"statusCode": "500",
		"code": "InternalErrorException"
	},
	"InvalidLambdaResponseException": {
		"message": "This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.",
		"statusCode": "400",
		"code": "InvalidLambdaResponseException"
	},
	"InvalidParameterException": {
		"message": "This exception is thrown when the Amazon Cognito service encounters an invalid parameter.",
		"statusCode": "400",
		"code": "InvalidParameterException"
	},
	"InvalidPasswordException": {
		"message": "This exception is thrown when the Amazon Cognito service encounters an invalid password.",
		"statusCode": "400",
		"code": "InvalidPasswordException"
	},
	"LimitExceededException": {
		"message": "This exception is thrown when a user exceeds the limit for a requested AWS resource.",
		"statusCode": "400",
		"code": "LimitExceededException"
	},
	"NotAuthorizedException": {
		"message": "This exception is thrown when a user is not authorized.",
		"statusCode": "400",
		"code": "NotAuthorizedException"
	},
	"ResourceNotFoundException": {
		"message": "This exception is thrown when the Amazon Cognito service cannot find the requested resource.",
		"statusCode": "400",
		"code": "ResourceNotFoundException"
	},
	"TooManyFailedAttemptsException": {
		"message": "This exception is thrown when the user has made too many failed attempts for a given action (e.g., sign in).",
		"statusCode": "400",
		"code": "TooManyFailedAttemptsException"
	},
	"TooManyRequestsException": {
		"message": "This exception is thrown when the user has made too many requests for a given operation.",
		"statusCode": "400",
		"code": "TooManyRequestsException"
	},
	"UnexpectedLambdaException": {
		"message": "This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.",
		"statusCode": "400",
		"code": "UnexpectedLambdaException"
	},
	"UserLambdaValidationException": {
		"message": "This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.",
		"statusCode": "400",
		"code": "UserLambdaValidationException"
	},
	"UserNotConfirmedException": {
		"message": "This exception is thrown when a user is not confirmed successfully.",
		"statusCode": "400",
		"code": "UserNotConfirmedException"
	},
	"InvalidSmsRoleAccessPolicyException": {
		"message": "This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.",
		"statusCode": "400",
		"code": "InvalidSmsRoleAccessPolicyException"
	},
	"InvalidSmsRoleTrustRelationshipException": {
		"message": "This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust cognito-idp.amazonaws.com or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.",
		"statusCode": "400",
		"code": "InvalidSmsRoleTrustRelationshipException"
	},
	"InvalidUserPoolConfigurationException": {
		"message": "This exception is thrown when the user pool configuration is invalid.",
		"statusCode": "400",
		"code": "InvalidUserPoolConfigurationException"
	},
	"MFAMethodNotFoundException": {
		"message": "This exception is thrown when Amazon Cognito cannot find a multi-factor authentication (MFA) method.",
		"statusCode": "400",
		"code": "MFAMethodNotFoundException"
	},
	"PasswordResetRequiredException": {
		"message": "This exception is thrown when a password reset is required.",
		"statusCode": "400",
		"code": "PasswordResetRequiredException"
	},
	"UserNotFoundException": {
		"message": "This exception is thrown when a user is not found.",
		"statusCode": "400",
		"code": "UserNotFoundException"
	},
	"AliasExistsException": {
		"message": "This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists.",
		"statusCode": "400",
		"code": "AliasExistsException"
	},
	"CodeDeliveryFailureException": {
		"message": "This exception is thrown when a verification code fails to deliver successfully.",
		"statusCode": "400",
		"code": "CodeDeliveryFailureException"
	},
	"InvalidEmailRoleAccessPolicyException": {
		"message": "This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.",
		"statusCode": "400",
		"code": "InvalidEmailRoleAccessPolicyException"
	},
	"UsernameExistsException": {
		"message": "This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.",
		"statusCode": "400",
		"code": "UsernameExistsException"
	},

	// runtime response errors
	"PasswordLengthValidation": {
		"message": "Passwords must be at least 8 characters long.",
		"code": "PasswordLengthValidation"
	},
	"PasswordNumericValidation": {
		"message": "Passwords must have numeric characters.",
		"code": "PasswordNumericValidation"
	},
	"PasswordUpperCaseValidation": {
		"message": "Passwords must have upper case characters.",
		"code": "PasswordUpperCaseValidation"
	},
	"PasswordSymbolValidation": {
		"message": "Passwords must have symbol characters.",
		"code": "PasswordSymbolValidation"
	},
	"PasswordLowerCaseValidation": {
		"message": "Passwords must have lower case characters.",
		"code": "PasswordLowerCaseValidation"
	},
	"UnknownErrorCode": { "message": "There was an unknown error.", "code": "UnknownErrorCode" },

	// user input validation errors
	"UserInputMissingName": { "message": "Your name is required.", "code": "UserInputMissingName" },
	"UserInputMissingEmail": { "message": "Your account email address is required.", "code": "UserInputMissingEmail" },
	"UserInputMissingCode": {
		"message": "The confirmation code we sent to you is required.",
		"code": "UserInputMissingCode"
	},
	"UserInputMissingPassword": { "message": "Your account password is required.", "code": "UserInputMissingPassword" },
	"UserInputMissingNewPassword": { "message": "A new password is required.", "code": "UserInputMissingNewPassword" }
};