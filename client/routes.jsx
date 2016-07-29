import React from 'react';
import {mount} from 'react-mounter'
import {MainLayout} from './layouts/MainLayout.jsx';
import {HomeLayout} from './layouts/HomeLayout.jsx';
import Calender from './calender.jsx';
import MessagesWrapper from './messages/MessagesWrapper.jsx';
import MessageDetail from './messages/MessageDetail.jsx';
import Account from './accounts/myAccount.jsx';
import Home from './home.jsx';
import About from './About.jsx';

FlowRouter.route('/', {
    action: function(params) {
        Tracker.autorun(function() {
            if (!Meteor.userId()) {
              mount(HomeLayout, {
                content: (<Home />)
              });
            } else {
              mount(MainLayout, {
                content:  (<About />)
              });
            }
        });
      }
});


FlowRouter.route('/log', {
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            mount(HomeLayout, {
              content: (<Home />)
            });
          } else {
            mount(MainLayout, {
              content:  (<MessagesWrapper />)
            });
          }
      });
    }
});

FlowRouter.route('/account', {
  action: function(params) {
      Tracker.autorun(function() {
          if (!Meteor.userId()) {
            mount(HomeLayout, {
              content: (<Home />)
            });
          } else {
            mount(MainLayout, {
              content:  (<Account />)
            });
          }
      });
    }
});
