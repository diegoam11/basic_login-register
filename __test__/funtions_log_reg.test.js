const is_empty_log = require('../assets/javascript/funtions_log_reg');
it("Si todos los inputs tienen values, return false", () => {
    expect(is_empty_log("diego@gmail.com", "clave123")).toBe(false)
})

const is_empty_regist = require('../assets/javascript/funtions_log_reg');
it("Alguno de los inputs no tiene value, return true", () => {
    expect(is_empty_regist(" ", " ", " "," ")).toBe(true)
})