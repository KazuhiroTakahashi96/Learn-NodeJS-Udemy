import _ from "lodash";

const original = { prop: { nested: "value" } };
// オブジェクトの複製

const cloned = _.cloneDeep(original);
cloned.prop.nested = "new";

console.log(cloned, original);
