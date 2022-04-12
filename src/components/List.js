import React, { Component } from 'react'

export default class List extends Component {
  constructor(){
      super()
      this.state = {
          superHeroes: []

      }
  }

  componentDidMount() {
      console.log('Componente montado');
  }

  getSuperHeroes = async () => {
      const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'
      const resp = await fetch(url)
    //   const data = await resp.json()
    //   const {results} = data
        const {results} = await resp.json()

        this.setState({
            superHeroes: results
        })

      console.log(results);
  }


    render() {
    return (
      <div>List</div>
    )
  }
}
