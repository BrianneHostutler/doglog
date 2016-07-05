import React from 'react';
import {mount} from 'react-mounter'

import {MainLayout} from './layouts/MainLayout.jsx';
//by having default in App.jsx, whatever imports this file, you don't need to use curly brackets when importing it
import MessagesWrapper from './messages/MessagesWrapper.jsx';
import About from './About.jsx';
import MessageDetail from './messages/MessageDetail.jsx';
import Account from './accounts/myAccount.jsx';
import AddPet from './addpet.jsx';
import Home from './home.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content : (<Home />)
    })
  }
});

FlowRouter.route('/log', {
  action() {
    mount(MainLayout, {
      content : (<MessagesWrapper />)
    })
  }
});

FlowRouter.route('/account', {
  action() {
    mount(MainLayout, {
      content : (<Account />)
    })
  }
});

FlowRouter.route('/addpet', {
  action() {
    mount(MainLayout, {
      content : (<AddPet />)
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
