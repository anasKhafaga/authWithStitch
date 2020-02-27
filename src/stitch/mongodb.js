import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import {app} from "./app";
import { dbase } from '../keys';

const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  'mongodb-atlas'
);

const db = mongoClient.db(dbase)

export {db};