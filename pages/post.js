import Layout from '../components/Layout'
import Link from 'next/link'
import axios from 'axios'



const Post = (props) => (
  props.show ? 
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium} />
    </Layout>
  : ''
)

Post.getInitialProps = async function(req) {
    const { id } = req.query
    if(id){
      const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
      const show = await res.data

      console.log(`Fetched show id: ${show.id}`)

      return { show }
    }
}


export default Post
