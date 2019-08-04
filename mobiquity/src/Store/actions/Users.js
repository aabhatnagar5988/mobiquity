/* eslint-disable prettier/prettier */
import { AppConstants } from "../../Constants/AppConstants";

const getUsersAction = payload => ({
    type: AppConstants.FetchUsers,
    payload,
  });

  const getMoreAction = (payload) => ({
    type: AppConstants.FetchMoreUsers,
    payload,
  });

  const setLoadingAction = payload => ({
    type: AppConstants.LoadingAction,
    payload,
  });

  const addUserAction = payload => ({
    type: AppConstants.AddUser,
    payload,
  });

  export const postUserData = (firstName, lastName, callback) => async dispatch =>{

    
    dispatch(setLoadingAction(true));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
      })
  })

      .then((response) => response.json())
      .then((responseData) => {
          console.log("RESULTS HERE:", responseData)
          dispatch(setLoadingAction(false));  
          dispatch(addUserAction(responseData));  
          callback();
         
  }).catch((error) =>{
  console.error(error);
  dispatch(setLoadingAction(false));
});

  };

  export const getUsersData = (pageNumber) => async dispatch => {
    const url = 'https://reqres.in/api/users?page='+pageNumber;
    dispatch(setLoadingAction(true));
    try {
      const result = await fetch(url).then(res => res.json());
      console.log("Result is", result);
      if (result && result.data && Array.isArray(result.data)) {
          if(pageNumber===1)
          dispatch(getUsersAction({ data: result.data, total_pages:result.total_pages}));
        else {
            dispatch(getMoreAction(result.data));
        }
      } else {
        dispatch(setLoadingAction(false));
      }
    } catch (error) {
      console.log('API Error: ', error);
      dispatch(setLoadingAction(false));
    }
  };

