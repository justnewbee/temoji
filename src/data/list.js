import _db from "./_db";

export default () => new Promise(resolve => resolve(_db.tagMap));