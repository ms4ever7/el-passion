import React from 'react';

const Tab = props => {
  const { active = false, onClick, imgSrc, issuesCount, children } = props;
  const className = `tab ${active && 'tab--active'}`;

  return <section className={className} onClick={onClick}>
    <div className='tab__wrapper'>
      <img src={imgSrc} className='tab__image' alt=' ' />
      <p className='tab__title'>{children}</p>
    </div>
    <span className='tab__count'>{issuesCount}</span>
  </section>;
}

export default Tab;