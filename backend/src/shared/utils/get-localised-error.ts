import { LocalizedErrorMessages } from '../error/error-messages';

export const getLocalizedMessage = (statusCode: number, lang: string) => {
  return {
    statusCode: statusCode,
    message: LocalizedErrorMessages[statusCode][lang],
  };
};
