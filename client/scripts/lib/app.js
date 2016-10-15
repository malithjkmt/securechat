/**
 * Created by Malith on 10/16/2016.
 */
// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-moment';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules

const App = 'Whatsapp';
import RoutesConfig from '../routes';
import ChatsCtrl from '../controllers/chats.controller';
import CalendarFilter from '../filters/calendar.filter';
import ChatCtrl from '../controllers/chat.controller';

// App
Angular.module(App, [
    'angular-meteor',
    'angularMoment',
    'ionic'
]);

new Loader(App)
    .load(RoutesConfig)
    .load(CalendarFilter)
    .load(ChatCtrl)
    .load(ChatsCtrl);

// Startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
}
else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}