var fb = require('../fizzbuzz');

describe ("A fizzbuzz program", function() {
	
	it ("can count from 1 to 5 and do fizzbuzz replacements", function() {
		expect (fb.count(1,5)).toBe("1 2 3 4 5");
		expect (fb.count(10,15)).tobe("buzz 11 fizz 13 14 fizzbuzz");
	
	});

	it ("can take a number and return 'fizz' if it is a multiple of 3, and any number otherwise", function(){
		expect(fb.fizzer(3)).tobe('fizz');
		expect(fb.fizzer(27)).tobe('fizz');
		expect(fb.fizzer(5)).tobe(5);
		expect(fb.fizzer(17)).tobe(17)
	});

it ("can take a number and return 'buzz' if it is a multiple of 5, and any number otherwise", function(){
		expect(fb.buzzer(5)).tobe('buzz');
		expect(fb.buzzer(25)).tobe('buzz');
		expect(fb.buzzer(3)).tobe(3);
		expect(fb.buzzer(17)).tobe(17);
	});

it ("can take a number and return 'fizzbuzz' if it is a multiple of 15, and any number otherwise", function() {
		expect(fb.fizzbuzzer(15)).tobe('fizzbuzz');
		expect(fb.fizzbuzzer(45)).tobe('fizzbuzz');
		expect(fb.fizzbuzzer(3)).tobe(3);
		expect(fb.fizzbuzzer(17)).tobe(17)
	});

}); 

