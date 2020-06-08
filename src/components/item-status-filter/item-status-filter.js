import React from 'react';

const filterButtons = [
	{ name: 'all', label: 'All' },
	{ name: 'active', label: 'Active' },
	{ name: 'done', label: 'Done' }
	];
const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {
const buttons = filterButtons.map(({name, label}) => {
	const isActive = name === filter;
	const classN = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
	return <button key={name} type="button" onClick={() => onFilterChange(name)} className={classN}>{label}</button>;
});
  return <div className="btn-group">{ buttons }</div>;
};
export default ItemStatusFilter;
