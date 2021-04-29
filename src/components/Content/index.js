import React from 'react';

import Card from '../Card';
import CardList from '../CardList';

import { CSSContent } from './styles';

function Content({dados = []}) {
  return (
    <CSSContent>
      <CardList>
        {dados.map(item => (
          <Card key={Math.random()} value={item} />
        ))}
      </CardList>
    </CSSContent>
  );
}

export default Content;