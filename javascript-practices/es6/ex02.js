
/** const: Block Scpoe의 상수 **/
try {
    if (true) {
        const num = 10;
    }
    console.log(num);

} catch (e) {
    console.error("[error]" + e);
}

//2. 대입(Assigment) 에러

try {
    const o = {};
    o.name = '둘리'; // 에러 X

    o = 10;         // 에러 O

} catch (e) {
    console.error("[error]" + e);
}