import firebase from "firebase";
import EventEmitter from "eventemitter3";
import { Card } from "../types";
import shuffled from "../shuffled";
import Repository from "./repository";

const app = () => {
  const config = {
    apiKey: "AIzaSyC3l2TGLPC_iyOCNuDN-qZBCxzv5FaT8qE",
    authDomain: "bingo-24372.firebaseapp.com",
    databaseURL: "https://bingo-24372.firebaseio.com",
    projectId: "bingo-24372",
    storageBucket: "bingo-24372.appspot.com",
    messagingSenderId: "262294683137"
  };
  return firebase.initializeApp(config);
};

export class FirebaseRepository implements Repository {
  emitter: EventEmitter;
  cards: Card[];
  index: number;

  cardsRef: firebase.database.Reference;
  indexRef: firebase.database.Reference;

  constructor() {
    this.emitter = new EventEmitter();
    this.cards = [];
    this.index = -1;

    const db = app().database();
    this.cardsRef = db.ref("cards");
    this.indexRef = db.ref("index");

    this.cardsRef.on("value", snapshot => {
      console.log("cards value");
      this.cards = snapshot!.val();
      this.emitAll();
    });

    this.indexRef.on("value", snapshot => {
      this.index = snapshot!.val();
      this.emitAll();
    });
  }

  async shuffle(cards: Card[]) {
    this.cardsRef.set(shuffled(cards));
    this.indexRef.set(-1);
  }

  async next() {
    this.indexRef.set(this.index + 1);
  }

  load() {
    // なにもしない
  }

  on(event: string, listener: Function) {
    this.emitter.on(event, listener as any);
  }

  get history() {
    return this.cards.slice(0, this.index + 1);
  }

  get card() {
    return this.cards[this.index];
  }

  get stock() {
    return this.cards.slice(this.index + 1);
  }

  emitAll() {
    this.emitter.emit("stockchanged", this.stock);
    this.emitter.emit("historychanged", this.history);
    this.emitter.emit("cardchanged", this.card);
  }
}

const repository = new FirebaseRepository();
export default repository;
