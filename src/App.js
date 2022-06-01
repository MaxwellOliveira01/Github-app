import React, { Component } from "react";
import AppContent from "./components/app-content";

import ajax from '@fdaciuk/ajax'

class App extends Component {

  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      searchingData: false
    }
  }

  handleSearch(e) {
    const URL = "https://api.github.com/users/";
    const username = e.target.value;

    if(e.key === 'Enter') {

        this.setState({ searchingData: true });

        ajax().get( URL + username )
        .then((result) => {
            this.setState({
              userinfo: {
                login: result.login,
                username: result.name,
                bio: result.bio,
                repos: result.public_repos,
                picture: result.avatar_url,
                followers: result.followers,
                following: result.following
              },
              repos: [],
              starred: []
            })
        }).always(() => {

            this.setState({ searchingData: false });

        });
    }
  }

  getRepos(rep) {
    return (e) => { //this function will be executed on button
      const URL = "https://api.github.com/users/";
      ajax().get(URL + this.state.userinfo.login + '/' + rep)
      .then((result) => {
        this.setState({
          [rep]: result.map((r) => { //[rep] means repos in this.state if rep === 'repos' and starred otherwise
            return {
              name: r.name,
              link: r.html_url
            }
          })
        })
      })
    }
  }

  render(){
    return (
      <AppContent
      userinfo = {this.state.userinfo}
      repos = {this.state.repos}
      starred = {this.state.starred}
      searchingData = {this.state.searchingData}
      handleSearch = {(e) => this.handleSearch(e)}
      getRepos = {this.getRepos('repos')}
      getStarred = {this.getRepos('starred')}
      />
    )
  }

}

export default App;
