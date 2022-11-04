import { IErrorMessage } from '../interfaces/error-messages-interface';

export const LocalizedErrorMessages: IErrorMessage = {
  600: { EN: 'Unauthorized', AR: 'غير مصرح له' },
  601: { EN: 'invalid brand key value', AR: 'invalid brand key value' },
  602: {
    EN: "this merchant doesn't have a brand key yet , please input integration branKey",
    AR: "this merchant doesn't have a brand key yet , please input integration branKey",
  },
  603: { EN: 'unsupported pos', AR: 'unsupported pos' },
  604: {
    EN: 'this merchant has less pos branches',
    AR: 'this merchant has less pos branches',
  },
  605: {
    EN: 'please update the merchant brand key',
    AR: 'please update the merchant brand key',
  },
  607: {
    EN: "this resource type doesn't exist",
    AR: "this resource type doesn't exist",
  },
  608: {
    EN: 'invalid ratm auth token',
    AR: 'invalid ratm auth token',
  },
  609: {
    EN: 'invalid Marn brand key',
    AR: 'invalid Marn brand key',
  },
};