import { HeroeList } from '../components'


export const DcPage = () => {
  return (
    <div className="container mt-5">
      <h1>DcComics</h1>
      <hr />

      {<HeroeList publisher="DC Comics" />}
    </div>


  )
}
