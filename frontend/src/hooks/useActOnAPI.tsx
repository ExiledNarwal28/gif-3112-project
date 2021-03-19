import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import APIService from 'services/APIService';
import { UserContext } from '../context/userContext';
import { clearCookies, readUserFromCookie } from '../util/cookie';

export default function useActOnAPI(method, setData, ...params) {
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);
  const { currentUser, setUser } = useContext(UserContext);
  const history = useHistory();

  const act = (...actParams) => {
    setIsLoading(true);

    APIService[method](...params, ...actParams)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          clearCookies();
          history.push('/login');
        }
        setError(err);
      })
      .finally(() => {
        const loggedUser = readUserFromCookie();
        if (JSON.stringify(loggedUser) !== JSON.stringify(currentUser)) {
          setUser(loggedUser);
        }
        setIsLoading(false);
      });
  };

  return { act, isLoading, error, setError };
}
