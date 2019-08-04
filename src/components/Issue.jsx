import React from 'react';

import { ReactComponent as StarIcon } from '../assets/icon-star.svg';

const Issue = ({ date, issues, onClick }) => <section className='issue'>
  <h3 className='issue__date'>{date}</h3>
  {issues.map(({ title, starred, id }, index) => 
    <div className='issue__wrapper' onClick={() => onClick(date, id)} key={index}>
      <p className='issue__title'>{title}</p>
      <StarIcon className={`issue__icon ${starred && 'issue__icon--active'}`} />
    </div>
  )}
</section>;

export default Issue;