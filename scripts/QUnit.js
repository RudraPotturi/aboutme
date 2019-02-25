function tot(s1,s2,s3,s4,s5)
{
    if (typeof s1 === "string" && typeof s2 === "string" && typeof s3 === "string" && typeof s4 === "string" && typeof s5 === "string") {
        return null;
    }  else if (s1 <= 0 || s2 <= 0 || s3 <= 0 || s4 <= 0 || s5 <= 0) {
        return 0;
    } else {
        return (s1+s2+s3+s4+s5);
    }    
}

QUnit.module(" Validation ")
 
 QUnit.test("validations", function (assert) {
    assert.equal(tot(2,2,2,2,2), 10, "Returns expected output.");
    assert.equal(tot("","","","",""), null, "Returns null when values are not passed.");
    assert.equal(tot("first","second","third","fourth","fifth"), null, "Returns null when strings are passed.");
    assert.equal(tot(2,-2,3,4,1), 0, "Returns zero if any of the values are negative.");
    assert.equal(tot("12345", "add23", "abc123","123from","east456"), null, "Returns null when a number is passed with a string.");
 }); 