import Layout from '../components/Layout'
import Link from 'next/link'
import axios from 'axios'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.data.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.data

  console.info(`Show data fetched. Count: ${data.length}`)

  return {
    data: data
  }
}

export default Index