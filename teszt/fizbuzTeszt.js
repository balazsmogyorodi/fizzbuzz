QUnit.module('fizz-buzz', function () {
    QUnit.test('aktErtek', function (assert) {
        assert.ok(aktErtek, "Nincs aktErtek nevű függvény.");
    })


    QUnit.test('n= 3ra jól müködik', function (assert) {
        assert.equal(aktErtek(3), "Fizz");
       
    });
    QUnit.test('n= -3ra jól müködik', function (assert) {
        assert.equal(aktErtek(-3), "Fizz");
      
    });

    QUnit.test('n= 5re jól müködik', function (assert) {
        assert.equal(aktErtek(5), "Buzz");
      
    });

    QUnit.test('n= 2re jól müködik', function (assert) {
        assert.equal(aktErtek(2), "2");
      
    });
    QUnit.test('n= 10re jól müködik', function (assert) {
        assert.equal(aktErtek(10), "Fizz Buzz");
    
    });
    QUnit.test('sorozatra jól müködik', function (assert) {
        assert.equal(sorozat(3), "1,2,Fizz");
    
    });
});