/**
 * Created by manuelo on 10/8/2016.
 */
var helper = require('../helper.js');
describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    it("contains spec with an expectation 1", function() {
        expect(true).toBe(true);
    });

    it("get unix time", function() {
        expect(helper.getUnixTime("2013-08-11T01:10:12.474Z")).toBe('{"unixtime":1376183412474}');
    });

    it("get json time", function() {
        expect(helper.getTimeJson("2013-08-11T01:10:15.474Z")).toBe('{"hour":18,"minute":10,"second":15}');
    });
	
	it("To upper", function() {
        expect(helper.toUpper("bla")).toBe('BLA');
    });
	
	it("To upper is undefined", function() {
        expect(helper.toUpper(undefined)).toBe('');
    });
	
	
	it("To upper is null", function() {
        expect(helper.toUpper(null)).toBe('');
    });
});