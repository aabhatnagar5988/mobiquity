import { AppConstants } from '../../Constants/AppConstants';

const InitialState = {
  users: [],
  isLoading: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case AppConstants.FetchUsers:
      return {
        users: action.payload.data,
        totalPages:action.payload.total_pages,
        isLoading: false,
      };
    case AppConstants.FetchMoreUsers:
      return {
        ...state,
        users:[...state.users, ...action.payload],
        isLoading: false,
      };
    case AppConstants.LoadingAction:
      return {
        ...state,
        isLoading: action.payload,
      };

    case AppConstants.AddUser:
      return {
        ...state,
        isLoading: false,
        userData:action.payload,
      };
    default:
      return state;
  }
};