import { useEffect, useState } from 'react';

import api from '../../shared/services/api';

const delay = (ms) => new Promise((_) => setTimeout(_, ms));

export function useUserOnPageLoad({ username }) {
  const [userData, setUserData] = useState(null);
  const [userRepositories, setUserRepositories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getClients() {
      try {
        await delay(1000);

        const [responseUserData, responseUserRepositories] = await Promise.all([
          api.get(`/users/${username}`),
          api.get(`/users/${username}/repos?per_page=200`),
        ]);

        setError(null);

        const userRepositoriesFromResponse = responseUserRepositories.data.map(
          (repository) => {
            const sanitizedRepository = {
              id: repository.id,
              name: repository.name,
              startsCount: repository.stargazers_count,
              description: repository.description,
              url: repository.html_url,
              language: repository.language,
              createdAt: repository.created_at,
            };

            return sanitizedRepository;
          }
        );

        setUserRepositories(
          userRepositoriesFromResponse.sort((a, b) =>
            a.startsCount > b.startsCount ? -1 : 1
          )
        );

        const {
          login,
          avatar_url,
          html_url,
          name,
          location,
          bio,
          followers,
          following,
        } = responseUserData.data;

        setUserData({
          login,
          name,
          location,
          bio,
          followers,
          following,
          avatarUrl: avatar_url,
          htmlUrl: html_url,
        });
      } catch (err) {
        setUserData(null);
        setUserRepositories([]);
        setError({
          message: 'Usuário não encontrado',
        });
      }
    }

    getClients();
  }, []);

  return { userData, userRepositories, error };
}
