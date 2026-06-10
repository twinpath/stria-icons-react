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
var ArrowDownToBracket_exports = {};
__export(ArrowDownToBracket_exports, {
  default: () => ArrowDownToBracket_default
});
module.exports = __toCommonJS(ArrowDownToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToBracketLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 352C228.094 352 232.188 350.438 235.312 347.312L379.312 203.312C385.562 197.062 385.562 186.937 379.312 180.688S362.937 174.438 356.688 180.688L240 297.375V16C240 7.156 232.844 0 224 0S208 7.156 208 16V297.375L91.312 180.688C85.062 174.438 74.937 174.438 68.688 180.688S62.438 197.063 68.688 203.312L212.688 347.312C215.812 350.438 219.906 352 224 352ZM448 432V336C448 327.156 440.844 320 432 320S416 327.156 416 336V432C416 458.469 394.469 480 368 480H80C53.531 480 32 458.469 32 432V336C32 327.156 24.844 320 16 320S0 327.156 0 336V432C0 476.125 35.875 512 80 512H368C412.125 512 448 476.125 448 432Z" })
  }
));
ArrowDownToBracketLight.displayName = "ArrowDownToBracketLight";
var ArrowDownToBracket_default = ArrowDownToBracketLight;
