import React, { useCallback, useEffect, useState } from 'react';
import { IoArrowDownCircle } from 'react-icons/io5';

import api from '../../services/api';

import Header from '../../components/Header';
import Content from '../../components/Content';

import { Container, ButtonMore } from './styles'

function Events() {
  const [events, setEvents] = useState([])
  
  useEffect(() => {
    async function loadData() {
      await api.get(`/events`)
        .then(response => {
          setEvents(response.data.data.results)
          localStorage.setItem("flag", "events")
        })
        .catch(err => console.log(err))
    }
    loadData()
  }, [])

  const handleLoadMore = useCallback(async () => {
    const offset = events && events.length;
    await api.get('/events', {
      params: {
        offset,
      }
    })
      .then(response => {
        setEvents([...events, ...response.data.data.results])
      })
      .catch(err => console.log(err))
  }, [events])
  
  return (
    <Container>
      <Header />
      <Content dados={events} />
      <ButtonMore>
        <IoArrowDownCircle onClick={handleLoadMore} size={30} color="#000"  />
        <p onClick={handleLoadMore}>Load More</p>
        <IoArrowDownCircle onClick={handleLoadMore} size={30} color="#000"  />
      </ButtonMore>
    </Container>
  );
}

export default Events;