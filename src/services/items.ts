import { DATA } from '@mockups/data';
import { TItem, TItemFormValues } from '@types';

const wait = (n: number) => new Promise(resolve => setTimeout(resolve, n));

export const fetchItems = async (): Promise<TItem[]> => {
  await wait(2000);
  return DATA;
};

export const addItem = async (values: TItemFormValues): Promise<TItem> => {
  await wait(2000);
  return {
    ...values,
    id: new Date().toISOString(),
  };
};
