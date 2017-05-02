import _db from "./_db";

export default tag => new Promise(resolve => resolve(_db.tagMap[tag] || []));