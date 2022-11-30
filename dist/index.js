"use strict";
// const double = (target: number | string) => {
//     if (typeof target === "number") {
//         return target * 2
//     } else {
//         return target.repeat(2)
//     }
// }
// console.log(double(2))
// console.log(double("Hello World"))
/*
 *　文と式の違い
 * 文(sentence)は Typescriptプログラミングの基本的な構成単位
 * 文は前から実行される
 */
// const greeting = "Hello,"; // こいつも文
// const target = "World!"; // これも文
// console.log(greeting + target); // これも文
/*
 * 式
 * "Hello"や "World!"は、文字列リテラルという種類の式
 * 変数宣言を分解する
 * const 変数名 = 式(文字列リテラル);
 *
 * greeting + targetも式です。
 * greetingやtargetと言った変数名も式です。
 * +演算子を分解する
 * 式(変数名) + 式(変数名)
 * 式は組み合わせて複雑な指揮を作ることができる
 */
// const greeting = "Hello,";
// const target = greeting;
// Hello,Helloと表示される
// console.log(greeting + target);
// const greeting = "Hello,";
// const text = greeting + "World";
// // Hello,Worldと表示される
// console.log(text);
/*
 * 文と式は結果の有無で区別する
 * 文と式の決定的に違うのは結果があるかどうか
 * 式には結果があります。文には結果がありません。
 *
 * 式は一般的に何らかの計算を表します。
 * greeting + target　は、変数greetingとtargetの中身を結合するという計算を行い、その結果が式になる
 *
 * const greeting = "Hello"
 * と言ったような文は変数greetingを作成するという文だが、何らかの計算を行っているわけではないので式ではない
 */
// const i = 2
// // 3行でif文という文
// if (i < 10) {
//     console.log("iは10未満です"); // 文の中に存在する文
// }
/*
 * 文はさらに二種類に分類される
 * 1. 宣言(declaration)
 * 2. その他
 *
 * const から始まる文の正式名称は、[変数宣言]である。
 * 違いがあるかどうかというとない
 */
/*
 * 式文　式の後にセミコロンを書く文です。
 * 例: console.log(greeting + target);
 *
 * 関数文 console.log()の部分は式なのです
 * 関数が式なのは関数は一般的に返り値という結果を伴います。
 * ただし、console.log()のように返り値を持たない。
 * 厳密にはundefinedを返している
 *
 * 式文の挙動は、与えられた式を実行するだけというものです。
 */
// console.log(console.log("Hello"));
// const greeting: string = "Hello";
// const target: string = 123;
// console.log(greeting + target);
// let greeting: string, target: string;
// greeting = "Hello,";
// // target = "World!";
// console.log(greeting + target);
/*
 * letを避けて、プログラミングを読む人の負担を減らそう
 * この二つの違いは変数の再代入が可能かどうか
 * letは、変数への代入が可能である一方、constはできない
 *
 * 普通に書けば9割以上はconstで宣言されます。
 * 極力constを使うべきです。letが絶対に必要だと思われる場面以外でletを使わない
 * letを使うと読む人に負担がかかるから。
 * constでなくletを使うということはこの変数はあとで再代入されますよという意思表示をしているということになります
 * いつその変数に代入するのか目を光らせておかなければならない
 */
/*
 * Javascriptのデータ型はプリミティブ型とオブジェクトの二つに分類できます
 * プリミティブ(Primitive)は原始的なという意味。
 * 7種類
 * 1. 文字列
 * 2. 数値
 * 3. 真偽値
 * 4. BigInt
 * 5. null
 * 6. undefined
 * 7. symbol
 *
 * オブジェクトはプリミティブを組み合わせてできたものです。
 */
// const width1 = 5;
// const width2 = 8;
// const height: number = 3;
// const areaTriangle = (width1 + width2) * height / 2;
// 19.5が表示される
// console.log(areaTriangle);
// number型では、小数と整数の区別がない
// console.log(3.5 * 2);
/*
 * リテラルとは何か?
 * 何らかの値を生み出すための式のこと
 * 数値リテラル
 * 文字列リテラル ...etc
 * "Hello" 5, -2 3.5とか
 */
// const binary = 0b1010; // 2進数
// 2進数は先頭に0bをつけます
// const octal = 0o755 // 8進数
// 8進数は先頭に0oをつけます
// const hexadecimal = 0xff // 16進数
// 16進数は先頭に0xをつけます
// 10 493 255と表示される
// console.log(binary, octal, hexadecimal);
// これらのリテラルは小数を使うことはできません。整数のみサポートされています
// 指数表示リテラル
// 1の後ろに0が8こつくよ!
// const big = 1e8;
// 4の前に0が5こつくよ!
// const small = 4e-5;
// 100,000,000 , 0.00004と表示される
// console.log(big, small)
// eの前に小数をおく事も可能
// 小数点が3つ移動するはず
// const test = 1.23e3
// // 1230と表示される
// console.log(test);
// 数値の区切りとして_を利用する
// const million =  1_000_000;
// 1000000と表示される
// console.log(million);
// 9007199254740992と表示される
// console.log(9007199254740993);
// 0.30000000000000004と表示される
// console.log(0.1 + 0.2);
/*
 * Typescriptの数値はIEEE754倍精度浮動小数点です。
 * 他の言語で言うところのdouble型です。
 * 浮動小数点です
 *
 * １. 数値(仮数部)の精度が53ビットである
 * 有限のデータ長で数値を表す以上限界があるが、それは2e53であるということ
 * 9007199254740993は2e53+1なので限界を超えてしまっている。
 *
 * 2. 計算誤差
 * 有限精度の浮動小数点を使っている以上、それに由来する計算誤差が発生する
 * これを許容できない場合は、任意精度計算ライブラリを導入するなどの対応が必要になる
 *
 */
// BigIntを使って解決?
// 9007199254740992n
// console.log(BigInt(9007199254740993));
//
//
// // https://github.com/MikeMcl/bignumber.js/
// // bignumberという外部ライブラリで解決
// import BigNumber from "bignumber.js";
//
// const decimal_1 = BigNumber(0.1);
// // 0.3が表示される
// console.log(decimal_1.plus(0.2));
// .は小数点と区別できないため構文Errorになる
// const str5 = 5.toString();
// console.log(str5)
// 回避方法
// const str5 = 5.0.toString();
// const fiveString = 5..toString();
// const fiveStr = (5).toString();
//
// console.log(str5);
// console.log(fiveString);
// console.log(fiveStr)
/*
 * ES2020から追加されたBigInt
 * 任意精度を表す整数
 * numberには53ビットの制限があるが、BigIntにはない
 * 計算速度はnumberの方が早いのでnumberでいい場合はnumberを使おう
 */
// const bigNum = (123n + 645n) * 3n
// console.log(bigNum)
// BigInt型はあくまで整数の型なので小数になる際は0に近いほうに丸められます。
// 2n
// console.log(7n / 3n);
// BigInt型とnumber型は一緒に使えません
// const mixNum = 333n + 1;
// const square2_53 = 9007199254740992
// console.log(9007199254740993)
// console.log(BigInt(square2_53) + 1n);
/*
 * templateリテラル
 * 1. 改行が有効
 * 2. 式展開ができる
 */
// const message = `Hello,
// World!`;
// /*
//  * Hello,
//  * World!
//  */
// console.log(message);
//
// const message2 = "Hello,\nWorld!";
// /*
//  * Hello,
//  * World!
//  */
// console.log(message2);
/*
 * 真偽値
 * trueとfalseの2種類だけの値からなる
 */
// // 真偽値リテラル true false
// const no: boolean = false;
// const yes: boolean = true;
// // true false
// console.log(yes, no)
/*
 * nullやundefinedというプリミティブ
 *
 */
// const n: null = null;
// const u: undefined = undefined;
//
// console.log(n, u);
/*
 * DOMを操作する時以外はundefinedを使うべき
 * undefinedの方がサポートが手厚いから
 */
// import {createInterface} from "readline";
//
// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.question('文字列を入力してください:', (line) => {
//     console.log(`${line}が入力されました`);
//     rl.close()
// })
// rl.question('数値を入力してみてください. 1000を足します',(line) => {
//     const num = Number(line);
//     console.log(`${num+ 1000}です`);
//     rl.close()
// })
// 1
// console.log(Number('01'));
// // 1
// console.log(Number(true));
// // 0
// console.log(Number(false));
// // 0
// console.log(Number(''));
// // 0
// console.log(Number(null));
// // NaN
// console.log(Number(undefined));
// // NaN
// console.log(Number('あ'));
// BigInt　NaNがなくランタイムErrorになる
// console.log(BigInt(undefined));
// // TypeError: Cannot convert undefined to a BigInt
// console.log(BigInt('あ'));
// console.log(BigInt(1.5));
/*
* DOMを操作する時以外はundefinedを使うべき
* undefinedの方がサポートが手厚いから
*/
// import {createInterface} from "readline";
//
// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.question('文字列を入力してください:', (line) => {
//     console.log(`${line}が入力されました`);
//     rl.close()
// })
// rl.question('数値を入力してみてください. 1000を足します',(line) => {
//     const num = Number(line);
//     console.log(`${num+ 1000}です`);
//     rl.close()
// })
// 1
// console.log(Number('01'));
// // 1
// console.log(Number(true));
// // 0
// console.log(Number(false));
// // 0
// console.log(Number(''));
// // 0
// console.log(Number(null));
// // NaN
// console.log(Number(undefined));
// // NaN
// console.log(Number('あ'));
// BigInt　NaNがなくランタイムErrorになる
// console.log(BigInt(undefined));
// // TypeError: Cannot convert undefined to a BigInt
// console.log(BigInt('あ'));
// console.log(BigInt(1.5));
// const addResult = 1024 + 314 + 500;
// console.log(addResult); // 1838らしい
// const discounted = addResult * 0.7;
// console.log(discounted); // 1286.6らしい
//
// const sqrt2 = 2 ** 0.5;
// console.log(sqrt2); // 1.4142135623730951らしい
// console.log(sqrt2 - 1); // 0.41421356237309515らしい
//
// console.log(18 / 12); // 1.5
// console.log(18n / 12n); // 1n
// console.log(18 % 12); // 6
// console.log(18n % 12n); // 6n
// const str123 = '123';
// // 124
// console.log(+str123 + 1);
// let foo = 10;
// foo ++;
// // 11
// console.log(foo);
// -- foo;
// // 10
// console.log(foo);
// import {createInterface} from "readline";
//
// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
//
// rl.question('名前を入力して下さい', (name) => {
//     console.log('こんにちは' + name + 'さん');
//     rl.close()
// })
// appleの方が小さいのでtrueになる aの方が辞書を引いた時に先に出る
// console.log('apple' < 'orange');
// import {createInterface} from "readline";
//
// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
//
// rl.question('パスワードを入力してください', (password) => {
//     if (password === 'hogehoge') {
//         console.log('ようこそ')
//     } else {
//         console.log('だれ？')
//     }
//     rl.close();
// })
/*
 * == !==は原則として使わない.
 * === !===を使おう!!!!!
 *
 * ただし、 == を使っていいケースがある
 * x == null
 * これはnullとundefinedを許容します。
 * x === null || x === undefinedと書くよりも冗長じゃなくていいね
 */
// const n = null;
// const u = undefined;
// // true
// console.log(n == null);
// // true
// console.log(u == null);
/*
 * NANに注意しよう。
 * NANが入った比較は、常にfalseになる
 */
// const nan = Number(undefined);
// const isNan = Number.isNaN(nan);
// console.log(isNan);
// const t = true;
// const f = false;
//
// console.log(t && t); //true
// console.log(t && f); //false
// console.log(f && f); //false
//
// console.log(t || t); //true
// console.log(t || f); //true
// console.log(f || f); //false
// import {createInterface} from "readline";
//
// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.question('数値を数値を入力して下さい', (line) => {
//         const num = Number(line);
//         if (!Number.isNaN(num)) {
//             console.log(`${num}はNANではありません`);
//         }
//         if (0 <= num && num < 100) {
//             console.log(`${num}は0以上100未満です`);
//         } else {
//             console.log(`${num}は0以上100未満ではありません`);
//         }
//         rl.close();
//     }
// )
// rl.question('名前を入力して下さい', (name) => {
//     const displayName = name || '名無し';
//     console.log(`ようこそ、${displayName}さん`);
//     rl.close();
// })
// console.log(null ?? 'こんにちは');
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);
