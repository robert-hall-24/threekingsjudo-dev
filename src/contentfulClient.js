import { createClient } from 'contentful'

const client = createClient({
  space: 'n9skkm3ettfm',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'KLkOMmkEdwLmAsv_VLJ45SUi435alwb-E8fjWKisHrQ',
})

client
  .getEntry('7A5BMwtn4UvI0Rn5LBnnYf')
  .then((entry) => console.log(entry))
  .catch(console.error)

export default client
