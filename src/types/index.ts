export enum EStatus {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export type TItem = {
  id: string;
  title: string;
  description: string;
  imageURL: string;
};

export type TItemFormValues = Pick<TItem, 'title' | 'description' | 'imageURL'>;
