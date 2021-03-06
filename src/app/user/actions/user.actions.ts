import { Action } from '@ngrx/store';

export enum UserActionTypes {
  GET_CURRENT_USER = '[User Page] Get Current User',
  GET_ORDER = '[Order Page] Get Order',
  GET_USER_SUCCESS = '[User API] Get User Success',
  GET_ORDER_SUCCESS = '[Order API] Get Order Success',
  GET_USER_FAILED = '[User API] Get User Failed',
  GET_ORDER_FAILED = '[Order API] Get Order Failed',
  GET_SELECTED_SECTION = '[User Page] Get Selected Section',
  SET_SELECTED_SECTION = '[Section Effect] Set Selected Section'
}

export class GetUser implements Action {
  readonly type = UserActionTypes.GET_CURRENT_USER;
}

export class GetOrder implements Action {
  readonly type = UserActionTypes.GET_ORDER;

  constructor(public payload: string) {
  }
}

export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_SUCCESS;

  constructor(public payload: { user: any }) {
  }
}

export class GetOrderSuccess implements Action {
  readonly type = UserActionTypes.GET_ORDER_SUCCESS;

  constructor(public payload: { order: any }) {
  }
}

export class GetUserFailed implements Action {
  readonly type = UserActionTypes.GET_USER_FAILED;
}

export class GetOrderFailed implements Action {
  readonly type = UserActionTypes.GET_ORDER_FAILED;
}

export class GetSelectedSection implements Action {
  readonly type = UserActionTypes.GET_SELECTED_SECTION;

  constructor(public payload: string) {
  }
}

export class SetSelectedSection implements Action {
  readonly type = UserActionTypes.SET_SELECTED_SECTION;

  constructor(public payload: any) {
  }
}

export type UserUnion =
  GetUser
  | GetUserSuccess
  | GetOrder
  | GetOrderSuccess
  | GetUserFailed
  | GetOrderFailed
  | GetSelectedSection
  | SetSelectedSection;
