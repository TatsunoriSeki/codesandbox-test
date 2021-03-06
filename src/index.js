// //const let
// var var1 = "var変数";
// console.log(var1);
// //varは上書き可能
// var1 = "var変数を上書き";
// console.log(var1);
// //var変数は再宣言可能
// var1 = "var変数を再宣言";
// console.log(var1);

// //let は上書き可能、再宣言不可能
// //const は上書きも再宣言も不可能
// //constで定義しtオブジェクトまたはプロパティは変更可能
// const val4 = {
//   name: "a",
//   age: 20
// };
// val4.name = "b";
// val4.addres = "tokyo";
// console.log(val4);

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
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("test"));

// //単一式は波括弧やreturnを省略できる
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("test2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(2, 3));

//分割代入(オブジェクト、配列)
// const myProfile = {
//   name: "佐藤",
//   age: 30
// };
// const message3 = `名前は ${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message3);
// const { name, age } = myProfile;
// const message4 = `名前は ${name}です。年齢は${age}です。`;
// console.log(message4);

// const myProfile = ["スズキ", 35];
// const message5 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message5);

// const [name, age] = myProfile;
// const message6 = `名前は${name}です。年齢は${age}です。`;
// console.log(message6);

//デフォルト値
// const sayHello = (name = "guest") => console.log(`こんにちは${name}さん`);
// sayHello();

//スプレッド構文...
//配列の展開 ...をつけると順番に表示する
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //注意
// const arr8 = arr4;
// arr8[0] = 100;
// //この場合arr4の配列も値が変わってしまうので、元の配列に影響を与えたくないときは、使うときはスプレッド構文を使う
// console.log(arr4);

//mapやfilterを使った配列の処理
// const nameArr = ["sato", "tanaka", "suzuki"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は番目は${nameArr[i]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2); //1つの配列になる

//for文を回したのと同じ結果、mapの中でindexの要素を使いたければ引数を2つ
//nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// console.log(newNumArr[0]);

// const newNameArr = nameArr.map((name) => {
//   if (name === "suzuki") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子
//ある条件 ? 条件がtrueの時 : 条件がfalseの時(if elseのような使い方ができる)
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "範囲内";
// };
// console.log(checkSum(50, 60));

//論理演算子　&& ||
// const flg1 = true;
// const flg2 = false;

// if (flg1 || flg2) {
//   console.log("1か2はtrue");
// }
// if (flg1 && flg2) {
//   console.log("1か2はtrue");
// }

// ||は左側がfalseなら右側を返す
const num99 = null;
const fee = num99 || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num98 = 100;
const fee2 = num98 && "何か設定されました";
console.log(fee2);
