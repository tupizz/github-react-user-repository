import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

import { NumberAnalyticRow } from './styles';
import { CardWrapper } from '../../../../shared/components/shared-styles';

export default function UserContent({ userData }) {
  const buildLoadingPlaceholder = () => (
    <CardWrapper>
      <ContentLoader
        speed={1}
        height={350}
        viewBox="0 0 150 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#d5ffe5"
      >
        <circle cx="75" cy="66" r="50" />
        <rect x="0" y="134" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="154" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="174" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="194" rx="2" ry="2" width="140" height="10" />
        <rect x="5" y="234" rx="0" ry="0" width="50" height="47" />
        <rect x="80" y="234" rx="0" ry="0" width="50" height="47" />
      </ContentLoader>
    </CardWrapper>
  );

  return userData ? (
    <CardWrapper>
      <img src={userData.avatarUrl} alt={userData.name} />
      <h5>{userData.name}</h5>
      <span>{userData.location}</span>
      <p>{userData.bio}</p>

      <NumberAnalyticRow>
        <div>
          <span>{userData.followers}</span>
          <span>seguidores</span>
        </div>
        <div>
          <span>{userData.following}</span>
          <span>seguindo</span>
        </div>
      </NumberAnalyticRow>
    </CardWrapper>
  ) : (
    buildLoadingPlaceholder()
  );
}

UserContent.propTypes = {
  userData: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    avatarUrl: PropTypes.string,
    htmlUrl: PropTypes.string,
  }),
};

UserContent.defaultProps = {
  userData: null,
};
