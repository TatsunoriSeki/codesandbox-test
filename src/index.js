// //テンプレート文字列
// const name = "佐藤";
// const age = 28;

// //従来の方法
// const message1 = name + "です。" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数
//従来の方法
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("test"));

//単一式は波括弧やreturnを省略できる
const func2 = (str) => {
  return str;
};
console.log(func2("test2"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(2, 3));
