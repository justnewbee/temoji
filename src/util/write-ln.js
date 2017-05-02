/**
 * 输出一行内容至 stdout
 * @param {string} [text]
 */
export default text => {
	process.stdout.write((text || "") + "\n");
};