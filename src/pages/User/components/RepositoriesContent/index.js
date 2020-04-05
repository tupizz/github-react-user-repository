import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

import { FiFolder, FiStar } from 'react-icons/fi';

import {
  RepositoryWrapper,
  RepositoryItem,
  ItemHeader,
  WrapperLoading,
} from './styles';

import { CardWrapper } from '../../../../shared/components/shared-styles';

export default function RepositoriesContent({ userRepositories }) {
  return (
    <CardWrapper>
      <h3>Repositórios ({userRepositories.length})</h3>
      {userRepositories.length ? (
        <RepositoryWrapper>
          {userRepositories.map((repository) => (
            <RepositoryItem key={repository.id}>
              <ItemHeader>
                <FiFolder />
                <a href={repository.url}>
                  <span>{repository.name}</span>
                </a>
              </ItemHeader>

              <p>{repository.description}</p>

              <div className="stars-count">
                <FiStar />
                {repository.startsCount}
              </div>
            </RepositoryItem>
          ))}
        </RepositoryWrapper>
      ) : (
        <WrapperLoading>
          <ContentLoader
            speed={1}
            width={500}
            height={120}
            viewBox="0 0 500 120"
            backgroundColor="#f3f3f3"
            foregroundColor="#d5ffe5"
          >
            <rect x="20" y="0" rx="3" ry="3" width="220" height="100" />
            <rect x="260" y="0" rx="3" ry="3" width="220" height="100" />
          </ContentLoader>

          <ContentLoader
            speed={1}
            width={500}
            height={120}
            viewBox="0 0 500 120"
            backgroundColor="#f3f3f3"
            foregroundColor="#d5ffe5"
          >
            <rect x="20" y="0" rx="3" ry="3" width="220" height="100" />
            <rect x="260" y="0" rx="3" ry="3" width="220" height="100" />
          </ContentLoader>

          <ContentLoader
            speed={1}
            width={500}
            height={120}
            viewBox="0 0 500 120"
            backgroundColor="#f3f3f3"
            foregroundColor="#d5ffe5"
          >
            <rect x="20" y="0" rx="3" ry="3" width="220" height="100" />
            <rect x="260" y="0" rx="3" ry="3" width="220" height="100" />
          </ContentLoader>
        </WrapperLoading>
      )}
    </CardWrapper>
  );
}

RepositoriesContent.propTypes = {
  userRepositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      startsCount: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      language: PropTypes.string,
      createdAt: PropTypes.string,
    })
  ),
};

RepositoriesContent.defaultProps = {
  userRepositories: [],
};
