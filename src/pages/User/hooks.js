import { useEffect, useState } from 'react';
import api from '../../services/api';

export function useUserOnPageLoad({ username }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function getClients() {
      const response = await api.get(`/users/${username}`);

      const {
        login,
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        created_at,
        bio,
        followers,
        following,
      } = response.data;

      setUserData({
        login,
        name,
        company,
        blog,
        location,
        bio,
        followers,
        following,
        createdAt: created_at,
        avatarUrl: avatar_url,
        htmlUrl: html_url,
      });
    }
    getClients();
  }, []);

  return userData;
}
