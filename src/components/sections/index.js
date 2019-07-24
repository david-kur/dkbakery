import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import SectionItem from './section-item';
import { selectSections } from '../../redux/sections/reducer';

const Sections = ({ sections }) => (
  <div className="sections">
    {sections.map(({ id, ...props }) => (
      <SectionItem key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  sections: selectSections(state)
});

export default connect(mapStateToProps)(Sections);
