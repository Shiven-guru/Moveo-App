import React, { Component } from 'react'
import {getMovies} from './MovieService'
export default class Movies extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movies:getMovies(),
            currSearchText:'',
            filterMovies:getMovies()

        }
    }

    onDelete=(id)=>{
      let filterArr = this.state.movies.filter(movieObj=>{
        return movieObj._id!=id
      }
      )
      this.setState({
        movies:filterArr
      })
    }
    handleChange(e)=>{
      let val = e.target.value;
    }
    render() {
        return (
            <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <h1>Hello</h1>
                </div>
                <div className='col-9'>
                   <input onChange={this.handleChange} type='text'></input>
                   <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
        this.state.movies.map(movieObj=>(
            <tr scope='row'>
              <td>{movieObj.title}</td>
              <td>{movieObj.genre.name}</td>
              <td>{movieObj.numberInStock}</td>
              <td>{movieObj.dailyRentalRate}</td>
              <td><button onClick={()=>this.onDelete(movieObj._id)} type="button" class="btn btn-danger">Delete</button></td>  
            </tr>
        ))
    }
  </tbody>
</table> 
                </div>
            </div>
            </div>
        )
    }
}