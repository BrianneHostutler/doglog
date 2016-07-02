import React from 'react';
import {mount} from 'react-mounter'

import {MainLayout} from './layouts/MainLayout.jsx';
//by having default in App.jsx, whatever imports this file, you don't need to use curly brackets when importing it
import MessagesWrapper from './messages/MessagesWrapper.jsx';
import About from './About.jsx';
import MessageDetail from './messages/MessageDetail.jsx';
import Frankie from './Frankie.jsx'


FlowRouter.route('/log', {
  action() {
    mount(MainLayout, {
      content : (<MessageList />)
    })
  }
});

FlowRouter.route('/frankie', {
  action() {
    mount(MainLayout, {
      content : (<Frankie />)
    })
  }
});

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content : (<MessagesWrapper />)
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content : (<About />)
    })
  }
});

FlowRouter.route('/messages/:id', {
  action(params) {
    mount(MainLayout, {
      content : (<MessageDetail id={params.id} />)
    })
  }
});
