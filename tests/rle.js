'use strict';

QUnit.module('Тестируем функцию rle', function () {
    QUnit.test('rle обрабатывает строку с повторяющимися символами', function (assert) {
        assert.strictEqual(rle('+++'), '+3', "rle('+++') === '+3'");
        assert.strictEqual(rle('AAAB'), 'A3B', "rle('AAAB') === 'A3B'");
        assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4', "rle('BCCDDDAXXXX') === 'BC2D3AX4'");
        assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4',
            "rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD') === 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'");
    });
    QUnit.test('rle обрабатывает пустую строку', function (assert) {
        assert.strictEqual(rle(''), '', "rle('') === ''");
    });
    QUnit.test('rle обрабатывает строку с числами', function (assert) {
        assert.strictEqual(rle('111111'), '16', "rle('111111') === '16'");
    });
    QUnit.test('rle корректно обрабатывает строку с одним символом', function (assert) {
        assert.strictEqual(rle('A'), 'A', "rle('A') === 'A'");
    });
    // assert.throws проверяет, что функция rle(123) выбрасывает искл.
    QUnit.test('rle корректно обрабатывает не строковые входные данные', function (assert) {
        let f = () => { rle(123);};
        assert.throws(f, Error, "rle(123) выбрасывает исключение");
    });

    QUnit.test('rle обрабатывает new String', function (assert) {
        assert.strictEqual(rle(new String('aaa')), 'a3', "rle(new String('aaa') === 'a3'");
    });

});

