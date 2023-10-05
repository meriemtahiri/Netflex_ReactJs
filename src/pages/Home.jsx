import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

export default function Home() {
  return (
    <>
    <Main />
    <Row rowID='1' category='Popular' fetchURL={requests.requestPopular} />
    <Row rowID='2' category='UpComing' fetchURL={requests.requestUpcoming} />
    <Row rowID='3' category='Trending' fetchURL={requests.requestTrending} />
    <Row rowID='4' category='Top Rated' fetchURL={requests.requestTopRated} />
    <Row rowID='5' category='Horror' fetchURL={requests.requestHorror} />
    </>
  )
}
