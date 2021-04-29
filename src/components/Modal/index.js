import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import { CSSModal, Thumbnail, Details, Description } from './styles';

function Modal({dados}) {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(localStorage.getItem("flag"))

  useEffect(() => {
    async function loadData() {
      await api.get(`/comics/${dados.id}/characters`)
        .then(response => {
          setCharacters(response.data.data.results)
        })
        .catch(err => console.log(err))
    }
    loadData()
  }, [dados])

  return (
    <CSSModal>
      <Thumbnail>
        <img src={`${dados.thumbnail.path}.${dados.thumbnail.extension}`} alt="Imagem" />
      </Thumbnail>
      <Details>
        <h3>{dados.title ? dados.title : dados.name}</h3>
        <h4>{characters.length > 0 ? 'Elenco:' : ''}</h4>
        {page === 'characters'
        ? <span>
          {`Comics: ${dados.comics.available} | 
          Events: ${dados.events.available} | 
          Series: ${dados.series.available} | 
          Stories: ${dados.stories.available}`}
          </span>
        : characters.map((character, posicao) => (
          <span key={posicao}>{posicao === characters.length-1 ? character.name : `${character.name} | `}</span>
        ))}
      </Details>
      <Description>
        <p>{dados.description}</p>
      </Description>
    </CSSModal>
  );
}

export default Modal;