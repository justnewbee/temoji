/* global describe, it, before, bafter, beforeEach, afterEach */
import "should";

import {require4test} from "./_helper";

const dataList = require4test("data/list");

describe("fuck", () => {
	it("", () => {
		console.warn(dataList());
		dataList().should.be.an.Object();
	});
});