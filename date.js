/**
 *  @return {string} // YYYY-MM-DD
 */
function today() {
  let d = new Date(Date.now());
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

module.exports.today = today;