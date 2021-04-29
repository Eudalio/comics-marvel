import React from 'react';

import { CSSCardList } from './styles';

function CardList({children}) {
  return (
    <CSSCardList>
        {children}
    </CSSCardList>
  );
}

export default CardList;