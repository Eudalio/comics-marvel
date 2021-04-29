import React, { useCallback, useEffect, useState } from 'react';
import { IoArrowDownCircle } from 'react-icons/io5';

import api from '../../services/api';

import Header from '../../components/Header';
import Content from '../../components/Content';

import { Container, ButtonMore } from './styles'

function Series() {
  const [series, setSeries] = useState([])
  
  useEffect(() => {
    async function loadData() {
      await api.get(`/series`)
        .then(response => {
          setSeries(response.data.data.results)
          localStorage.setItem("flag", "series")
        })
        .catch(err => console.log(err))
    }
    loadData()
  }, [])

  const handleLoadMore = useCallback(async () => {
    const offset = series && series.length;
    await api.get('/series', {
      params: {
        offset,
      }
    })
      .then(response => {
        setSeries([...series, ...response.data.data.results])
      })
      .catch(err => console.log(err))
  }, [series])
  
  return (
    <Container>
      <Header />
      <Content dados={series} />
      <ButtonMore>
        <IoArrowDownCircle onClick={handleLoadMore} size={30} color="#000"  />
        <p onClick={handleLoadMore}>Load More</p>
        <IoArrowDownCircle onClick={handleLoadMore} size={30} color="#000"  />
      </ButtonMore>
    </Container>
  );
}

export default Series;