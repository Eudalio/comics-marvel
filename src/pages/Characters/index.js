import React, { useCallback, useEffect, useState } from 'react';
import { IoArrowDownCircle } from 'react-icons/io5';
import api from '../../services/api';

import Header from '../../components/Header';
import Content from '../../components/Content';

import { Container, ButtonMore } from './styles'

function Characters() {
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    async function loadData() {
      await api.get(`/characters`)
        .then(response => {
          setCharacters(response.data.data.results)
          localStorage.setItem("flag", "characters")

        })
        .catch(err => console.log(err))
    }
    loadData()
  }, [])

  const handleLoadMore = useCallback(async () => {
    const offset = characters && characters.length;
    await api.get('/characters', {
      params: {
        offset,
      }
    })
      .then(response => {
        setCharacters([...characters, ...response.data.data.results])
      })
      .catch(err => console.log(err))
  }, [characters])
  
  return (
    <Container>
      <Header />
      <Content dados={characters} />
      <ButtonMore>
        <IoArrowDownCircle onClick={handleLoadMore} size={30} color="#000"  />
        <p onClick={handleLoadMore}>Load More</p>
        <IoArrowDownCircle onClick={handleLoadMore} size={30} color="#000"  />
      </ButtonMore>
    </Container>
  );
}

export default Characters;