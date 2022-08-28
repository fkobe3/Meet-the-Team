const Employee = require('../lib/Employee')

test ('Employee enters needed information (id, name, email)', () => {
    const employee = new Employee ("Frank", 1000, "test@example.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');
});

test (' Can get an Employee name via getName()', () => {
    const employee = new Employee('Frank');
    expect(employee.name).toEqual('Frank');
});

    test ('Can get an Employee ID via getId()', () => {
    const employee = new Employee('Frank', 100);
    expect(employee.id).toEqual(expect.any(Number));
});

test ('Can get an Employee email via getEmail()', () => {
    const employee = new Employee('Frank', 100, 'test@example.com');
    expect(employee.email).toEqual(expect.stringContaining('@'));
});

test('getRole should return \"Employee\"', () => {
    const employee = new Employee('Frank', 100, 'test@example.com');
    expect(employee.role).toEqual('Employee');
});
