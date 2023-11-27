export enum Routes {
  List = 'List',
  Add = 'Add',
  Detail = 'Detail',
}

export type AppNavigationParamList = {
  [Routes.List]: undefined;
  [Routes.Add]: undefined;
  [Routes.Detail]: {
    itemId: string;
  };
};
