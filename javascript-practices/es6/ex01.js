/** let: Block Scope의 변수 **/

try {
    if (true) {
        let i = 20;
        var j = 10;
    }

    /** let,var의 차이 : j는 출력되나 i는 오류 **/
    console.log(j);
    console.log(i);

} catch (e) {
    console.error('[오류]' + e);
}

// cf. var의 함수 범위
try {
    let f = function () {
        var m = 20;
    }
    f();

    console.log(m);
} catch (e) {
    console.error('[오류]' + e);
}



