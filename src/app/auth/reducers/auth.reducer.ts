import * as AuthActions from '../actions/auth.actions';
import { AuthState } from './auth.state';
import { AuthService } from '@shared/services';

export const initialState: AuthState = {
  isLoggedIn: !!AuthService.getAuthToken(),
  user: {}
};

export function AuthReducer(state = initialState, action: AuthActions.AuthUnion) {

  switch (action.type) {
    case AuthActions.AuthActionsTypes.LOGIN: {
      return state;
    }

    case AuthActions.AuthActionsTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    }

    case AuthActions.AuthActionsTypes.LOGIN_FAILED: {
      return {
        ...state,
        ...action.payload
      };
    }

    case AuthActions.AuthActionsTypes.GET_CURRENT_USER: {
      return state.user;
    }

    case AuthActions.AuthActionsTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      };
    }

    default:
      return state;
  }
}
