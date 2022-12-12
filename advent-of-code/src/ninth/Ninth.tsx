/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { moves } from "./ninth-input";

interface KnotNode {
  val: string;
  x: number;
  y: number;
  prev: KnotNode | null;
  next: KnotNode | null;
  positions: Set<string>;
  diffx: number;
  diffy: number;
}

class KnotNode {
  constructor(
    val: string,
    x = 0,
    y = 0,
    prev: KnotNode | null = null,
    next: KnotNode | null = null,
  ) {
    this.val = val;
    this.x = x;
    this.y = y;
    this.prev = prev;
    this.next = next;
    this.positions = new Set(["0,0"]);
    this.diffx = 0;
    this.diffy = 0;
  }
}

/* unused 
enum Direction {
  Up = "U",
  Down = "D",
  Left = "L",
  Right = "R",
} */

export default function Ninth(): JSX.Element {
  const head = new KnotNode("head", 0, 0, null, null);
  const a = new KnotNode("a", 0, 0, head, null);
  const b = new KnotNode("b", 0, 0, a, null);
  const c = new KnotNode("c", 0, 0, b, null);
  const d = new KnotNode("d", 0, 0, c, null);
  const e = new KnotNode("e", 0, 0, d, null);
  const f = new KnotNode("f", 0, 0, e, null);
  const g = new KnotNode("g", 0, 0, f, null);
  const h = new KnotNode("h", 0, 0, g, null);
  const tail = new KnotNode("tail", 0, 0, h, null);
  head.next = a;
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  g.next = h;
  h.next = tail;

  function processMove(knot: KnotNode | null): void {
    if (!knot) {
      return;
    }
    knot.diffx = knot.prev!.x - knot.x;
    knot.diffy = knot.prev!.y - knot.y;

    if (Math.abs(knot.diffx) > 1 && Math.abs(knot.diffy) === 0) {
      knot.x += knot.diffx / 2;
    } else if (Math.abs(knot.diffy) > 1 && Math.abs(knot.diffx) === 0) {
      knot.y += knot.diffy / 2;
    } else if (Math.abs(knot.diffx) > 1 && Math.abs(knot.diffy) === 1) {
      knot.x += knot.diffx / 2;
      knot.y += knot.diffy;
    } else if (Math.abs(knot.diffy) > 1 && Math.abs(knot.diffx) === 1) {
      knot.y += knot.diffy / 2;
      knot.x += knot.diffx;
    } else if (Math.abs(knot.diffy) > 1 && Math.abs(knot.diffx) > 1) {
      knot.y += knot.diffy / 2;
      knot.x += knot.diffx / 2;
      knot.positions.add(`${knot.x},${knot.y}`);
    } else if (knot.diffx <= 1 && knot.diffy <= 1) {
      knot.positions.add(`${knot.x},${knot.y}`);
    }
    knot.positions.add(`${knot.x},${knot.y}`);
    processMove(knot.next);
    return;
  }

  for (const move of moves) {
    const dir = move.split(" ")[0];
    const dist = Number(move.split(" ")[1]);
    for (let i = 1; i <= dist; i++) {
      if (dir === "R") {
        head.x++;
      } else if (dir === "L") {
        head.x--;
      } else if (dir === "U") {
        head.y++;
      } else if (dir === "D") {
        head.y--;
      }
      head.positions.add(`${head.x},${head.y}`);
      processMove(head.next);
    }
  }

  /*  Part 1 Code before refactoring as classes and Nodes
  
  let hx = 0;
  let hy = 0;
  let tx = 0;
  let ty = 0;
  let diffx = 0;
  let diffy = 0;

  for (const move of moves) {
    const dir = move.split(" ")[0];
    const dist = Number(move.split(" ")[1]);
    for (let i = 1; i <= dist; i++) {
      if (dir === "R") {
        hx ++;
      } else if (dir === "L") {
        hx --;
      } else if (dir === "U") {
        hy ++;
      } else if (dir === "D") {
        hy --;
      }
      diffx = hx - tx;
      diffy = hy - ty;
      
      if (Math.abs(diffx) > 1 && Math.abs(diffy) === 0) {
        tx += diffx / 2;
      } else if (Math.abs(diffy) > 1 && Math.abs(diffx) === 0) {
        ty += diffy / 2;
      } else if (Math.abs(diffx) > 1 && Math.abs(diffy) === 1) {
        tx += diffx / 2;
        ty += diffy;
      } else if (Math.abs(diffy) > 1 && Math.abs(diffx) === 1) {
        ty += diffy / 2;
        tx += diffx;
      }
      console.log("dir,dist",dir,dist);
      console.log("hx,hy",hx,hy);
      console.log("tx,ty",tx,ty);
      positions.add(`${tx},${ty}`);
    } 
  }
  */
  //  console.log(head)

  return (
    <div className='Ninth card-body'>
      <h5 className='card-title'>December 9th: Rope Bridge</h5>
      <p className='card-text'>
        Count of locations the second knot has visited: {a.positions.size}.
      </p>
      <p className='card-text'>
        Count of locations the tail knot has visited: {tail.positions.size}.
      </p>
    </div>
  );
}
