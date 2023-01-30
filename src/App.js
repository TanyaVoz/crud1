import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PostsMainView } from './components/PostsMainView';
import { NewPost } from './components/NewPost';
import { EditPost } from './components/EditPost';
import { PostWithButtons } from './components/Buttons';
import { PostsProvider } from './components/PostsContext';
import './App.css';


function App() {

  return(
    <PostsProvider>
     <Router>
       <Route path="/" exact component={PostsMainView} />
       <Switch>
         <Route path="/posts/new" exact component={NewPost} />
         <Route path="/posts/:id" exact component={PostWithButtons} />
       </Switch>
       <Switch>
         <Route path="/posts/:id/edit" exact component={EditPost} />
       </Switch>
     </Router>
    </PostsProvider>
  )
};

export default App;
