var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Percent_exports = {};
__export(Percent_exports, {
  default: () => Percent_default
});
module.exports = __toCommonJS(Percent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PercentSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M63.432 190.863C98.492 190.863 126.863 162.492 126.863 127.432S98.492 64 63.432 64S0 92.371 0 127.432S28.371 190.863 63.432 190.863ZM320.568 321.137C285.508 321.137 257.137 349.508 257.137 384.568S285.508 448 320.568 448S384 419.629 384 384.568S355.629 321.137 320.568 321.137ZM372.281 75.719C356.656 60.094 331.344 60.094 315.719 75.719L11.719 379.719C-3.906 395.344 -3.906 420.656 11.719 436.281C19.531 444.094 29.766 448 40 448S60.469 444.094 68.281 436.281L372.281 132.281C387.906 116.656 387.906 91.344 372.281 75.719Z" })
  }
));
PercentSolid.displayName = "PercentSolid";
var Percent_default = PercentSolid;
