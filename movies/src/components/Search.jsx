import { Component } from "react";

class Search extends Component {

  state = {
    search: '',
    type: 'all',
  }

  searchEnter = (e) => {
    if (e.key === 'Enter')
      this.props.s(this.state.search, this.state.type);
  }

  searchButton = (e) => {
    this.props.s(this.state.search, this.state.type);
  }

  filterHandle = (e) => {
    this.setState(() => ({ type: e.target.dataset.type }), () => {
      this.props.s(this.state.search, this.state.type)
    }
    )

  }

  render() {
    return <div className="row">
      <div className="input-field col s12">
        <input
          placeholder="Search..."
          type="search"
          className="validate"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyPress={(e) => this.searchEnter(e)}
        />
        <button class="btn-flat search-btn"
          onClick={(e) => this.searchButton(e)}
        >FIND</button>
      </div>
      <label>
        <input
          name="type"
          type="radio"
          data-type="all"
          onChange={this.filterHandle}
          checked={this.state.type === 'all'}
        />
        <span>All Types</span>
      </label>
      <label>
        <input
          name="type"
          type="radio"
          data-type="movie"
          onChange={this.filterHandle}
          checked={this.state.type === 'movie'}
        />
        <span>Movies</span>
      </label>
      <label>
        <input
          name="type"
          type="radio"
          data-type="series"
          onChange={this.filterHandle}
          checked={this.state.type === 'series'}
        />
        <span>Series</span>
      </label>
    </div>
  }
}

export { Search }