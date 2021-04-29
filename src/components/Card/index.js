import React from 'react';
import { CustomDialog } from 'react-st-modal';

import Modal from '../Modal';

import { CSSCard } from './styles';

function CustomDialogContent({dados}) {
  return (
    <Modal dados={dados} />
  );
}

function Card({value: item}) {
  const openModal = async () => {
    await CustomDialog(<CustomDialogContent dados={item} />, {
      title: 'Details',
      showCloseIcon: true,
    });
  }

  return (
    <CSSCard onClick={openModal}>
        <div id="img">
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Imagem" />
        </div>
        <h2>{item.title ? item.title : item.name}</h2>
    </CSSCard>
  );
}

export default Card;