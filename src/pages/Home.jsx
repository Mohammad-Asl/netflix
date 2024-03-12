import React from 'react'
import Requests from '../Requests'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
  return (
    <div>
        <Main />

        <Row rowID='1' title='Upcoming' fetchURL={Requests.requestUpcoming}/>
        <Row rowID='2' title='Popular' fetchURL={Requests.requestPopular}/>
        <Row rowID='3' title='Top Rated' fetchURL={Requests.requestTopRated}/>
        <Row rowID='4' title='Trending' fetchURL={Requests.requestTrending}/>
        <Row rowID='5' title='Horror' fetchURL={Requests.requestHorror}/>
    </div>
  )
}

export default Home