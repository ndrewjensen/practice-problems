export const notes =
  `Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`
/* 
export const formattedExample = [{
  items: [79, 98],
  operation (items: number[]) {
   items.map(item => Math.floor((item * 19)/3))
  }
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3 }

monkey 1:
  items: [54, 65, 75, 74],
  operation (old) {
    old + 6

      }:number    Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

monkey 2:
  items: [79, 60, 97],
  operation (old:number) {
    old * ol
  }d
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

monkey 3:
  items: [74],
  operation (old) {
    old + 3

      }:number    Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`
]
 */