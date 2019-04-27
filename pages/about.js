import axios from 'axios'
import Layout from '../components/Layout'

const handleClick = () => {
  let message = 'ทดสอบ1234';
  console.info(message);
  axios({
    method: 'POST',
    url: 'https://notify-api.line.me/api/notify',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': 'Bearer R9rhTFPV1zwN65oiurzxCDGUd0JAx1GTxU7VvCOtO9k', //token
    },
    params:{
      message: message
    }
  })
  .then(function(res) {
    console.info('Line sendMessage success: '+ JSON.stringify(res.data));
  })
  .catch(function(err) {
    console.warn('Line sendMessage error: ' + JSON.stringify(err.message));
  });

};

export default () => (
  <div>
    <Layout>
      <p> I'm About xD </p>
      <button className="btn btn-primary" onClick={() => handleClick()}>Send Line</button>
    </Layout>
  </div>
)

