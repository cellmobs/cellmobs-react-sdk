
export async function getServerSideProps({ req }) {
  return {
    props: {
      params: {}
    }
  }
}

export default function Health(props) {

  return (
    <div style={{"padding": "20px;"}}>Server is up</div>
  )
}
