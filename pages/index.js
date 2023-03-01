import Search from '@/components/Search'
import Head from 'next/head'
import styled from 'styled-components'

const HomeStyled = styled.div`
  h1{
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    margin-bottom: 30px;
  }
`



export default function Home() {
  return (
    <> 
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyled>
        <h1>Weather App</h1>
      </HomeStyled>
      <Search />
    </>
  )
}
