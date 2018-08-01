// 永続化するやつ

import EventEmitter from "eventemitter3";

import { Card } from "../types";
import shuffled from "../shuffled";
import Repository from "./repository";

// とりあえず localStorage に保存する
const localStorageRepository = {
  emitter: new EventEmitter(),

  shuffle(cards: Card[]) {
    localStorage.cards = JSON.stringify(shuffled(cards));
    localStorage.index = JSON.stringify(-1);
    this.emitAll();
  },

  next() {
    localStorage.index = JSON.stringify(this.index() + 1);
    this.emitAll();
  },

  load() {
    this.emitAll();
  },

  cards(): Card[] {
    return JSON.parse(localStorage.cards || "[]");
  },

  index(): number {
    return JSON.parse(localStorage.index || "-1");
  },

  on(event: string, listener: Function) {
    this.emitter.on(event, listener as any);
  },

  emitAll() {
    this.emitter.emit("stockchanged", this.stock());
    this.emitter.emit("historychanged", this.history());
    this.emitter.emit("cardchanged", this.card());
  },

  history() {
    return this.cards().slice(0, this.index() + 1);
  },
  card() {
    return this.cards()[this.index()];
  },
  stock() {
    return this.cards().slice(this.index() + 1);
  }
};

const repository: Repository = localStorageRepository;
export default repository;
