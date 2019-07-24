import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { selectCategory } from '../../redux/order/reducer';
import MenuItem from '../../components/menu-item';

const Menu = ({ category }) => {
  const { title, items } = category;
  return (
    <div className="menu">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.menuId)(state)
});

export default connect(mapStateToProps)(Menu);
