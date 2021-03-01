import { useEffect, useState } from 'react';
import { User, UserQueryParams } from 'types/users';
import useFetchFromAPI from 'hooks/useFetchFromAPI';

export default function useGetUsers(queryParams: UserQueryParams) {
  const [users, setUsers] = useState<User[]>([]);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const { isLoading, error } = useFetchFromAPI(
    'getUsers',
    setUsers,
    queryParams
  );

  useEffect(() => {
    if (users.length > 0) setLoggedUser(users[0]);
  }, [users]);

  return { users, loggedUser, isLoading, error };
}
