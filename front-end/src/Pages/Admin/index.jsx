import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

import API_URL from '../../API/API_URL';
import { fetchInformationFromLocalstorage } from '../../Service/LocalSotorage';

import testsId from '../../tests/data-testid';

export default function Admin() {
  const [token] = useState(
    () => fetchInformationFromLocalstorage('user').token,
  );

  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const fetchedUsers = await axios.get(`${API_URL}user`, {
      headers: { Authorization: token },
    });

    setUsers(fetchedUsers.data);
  }, [token]);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}user/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, token]);

  return (
    <>
      <h1>Admin</h1>

      <div>
        {users.map((user) => (
          <div key={ user.id }>
            <p data-testid={ testsId[70] }>{user.id}</p>
            <p data-testid={ testsId[71] }>{user.name}</p>
            <p data-testid={ testsId[72] }>{user.email}</p>
            <p data-testid={ testsId[73] }>{user.role}</p>
            <button
              type="button"
              data-testid={ testsId[74] }
              onClick={ () => handleDelete(user.id) }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
