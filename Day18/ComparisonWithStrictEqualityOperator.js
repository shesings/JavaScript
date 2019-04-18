// Setup

// three equal signs = strict
function testStrict(val) {
    if (val===7) { // val === '7' will not work/pass here
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);