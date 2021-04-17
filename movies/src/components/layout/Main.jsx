import { Component } from "react"
import { Movies } from "../Movies";
import { Preloader } from "../Preloader";
import { Search } from "../Search";

const API_KEY = process.env.REACT_APP_API_KEY;


class Main extends Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(r => r.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  searchHandle = (request, type) => {
    this.setState({ loading: true })
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${request}${type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then(r => r.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }


  render() {
    const { movies, loading } = this.state;
    return <main className='container content'>
      <Search s={this.searchHandle} />
      {
        loading ?
          <Preloader />
          : <Movies movies={movies} />
      }

    </main>
  }

}

export { Main }