const p = require('./index');

test('Format Phone', () => {
    expect(p.formatPhone("1323286502")).toBe("(153) 158-9353");
});

test('Format Phone 2', () => {
    expect(p.formatPhone("132-3286502")).toBe("(153) 158-9353");
});

test('Format Phone 3', () => {
    expect(p.formatPhone("132-328-6502")).toBe("(153) 158-9353");
});

