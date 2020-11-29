import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import FolderSidebar from './components/FolderSidebar'
import NoteList from './components/NoteList'
import NoteNav from './components/NoteNav'
import NotePage from './components/NotePage'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes
    }
  }

  handleUpdateNotes = (folderId) => {
    console.log( 'notes updated', folderId)
    const newNotes = this.props.dummyStore.notes.filter(note => note.folderId === folderId)
    this.setState({
      notes: newNotes
    })
  }

  render() {
    return (
      <div className='app__container'>
        <div className='header'>
          <header>
            <Header />
          </header>
        </div>
        <hr/>
        <div className='content'>
          <nav>
            <Switch>
              <Route exact path='/'>
                <FolderSidebar updateNotes={this.handleUpdateNotes}/>
              </Route>
              <Route path='/folder/:folderId'>
                <FolderSidebar updateNotes={this.handleUpdateNotes}/>
              </Route>
              <Route path='/notes/:noteId' component={NoteNav}>
              </Route>
            </Switch>
          </nav>
          <main>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route 
                path='/folder/:folderId'
                render={() => <NoteList notes={this.state.notes}/>}
              />
              <Route path='/notes/:noteId' component={NotePage}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;