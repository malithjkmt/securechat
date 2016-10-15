/**
 * Created by Malith on 10/16/2016.
 */
import { Mongo } from 'meteor/mongo';

export const Chats = new Mongo.Collection('chats');
export const Messages = new Mongo.Collection('messages');