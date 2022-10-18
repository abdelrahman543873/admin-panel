export enum Lang {
  EN = 'EN',
  AR = 'AR',
}

export type IErrorMessage = {
  [k: number]: {
    [Lang.AR]: string;
    [Lang.EN]: string;
  };
};
