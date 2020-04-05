import React from 'react';
import PropTypes from 'prop-types';
import { FiFolder, FiStar } from 'react-icons/fi';

import { RepositoryWrapper, RepositoryItem, ItemHeader } from './styles';
import { CardWrapper } from '../../../../shared/components/shared-styles';

export default function RepositoriesContent({ userRepositories }) {
  return (
    <CardWrapper>
      <h3>Repositórios</h3>
      <RepositoryWrapper>
        {userRepositories.map((repository) => (
          <RepositoryItem key={repository.id}>
            <ItemHeader>
              <FiFolder />
              <span>{repository.name}</span>
            </ItemHeader>

            <p>{repository.description}</p>

            <div className="stars-count">
              <FiStar />
              {repository.startsCount}
            </div>
          </RepositoryItem>
        ))}
      </RepositoryWrapper>
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
