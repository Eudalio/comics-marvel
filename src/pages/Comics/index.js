import React, { useCallback, useEffect, useState } from 'react';
import { IoArrowDownCircle } from 'react-icons/io5';

import api from '../../services/api';

import Header from '../../components/Header';
import Content from '../../components/Content';

import { Container, ButtonMore } from './styles'

function Quadrinhos() {
  const [quadrinhos, setQuadrinhos] = useState([])
  
  useEffect(() => {
    async function loadData() {
      await api.get(`/comics`)
        .then(response => {
          setQuadrinhos(response.data.data.results)
          localStorage.setItem("flag", "comics")
        })
        .catch(err => console.log(err))
    }
    loadData()
  }, [])

  const handleLoadMore = useCallback(async () => {
    const offset = quadrinhos && quadrinhos.length;
    await api.get('/comics', {
      params: {
        offset,
      }
    })
      .then(response => {
        setQuadrinhos([...quadrinhos, ...response.data.data.results])
      })
      .catch(err => console.log(err))
  }, [quadrinhos])
  
  return (
    <Container>
      <Header />
      <Content dados={quadrinhos} />
      <ButtonMore>
        <IoArrowDownCircle onClick={handleLoadMore} size={30} color="#000"  />
        <p onClick={handleLoadMore}>Load More</p>
        <IoArrowDownCircle onClick={handleLoadMore} size={30} color="#000"  />
      </ButtonMore>
    </Container>
  );
}

export default Quadrinhos;