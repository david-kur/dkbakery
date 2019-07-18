import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const SectionItem = ({ title, size, imageUrl, linkUrl, history, match }) => (
  <div
    className={`${size} section-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default withRouter(SectionItem);
