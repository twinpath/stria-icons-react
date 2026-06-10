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
var DiceD6_exports = {};
__export(DiceD6_exports, {
  default: () => DiceD6_default
});
module.exports = __toCommonJS(DiceD6_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD6Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.875 116.125L239.875 4.312C235.812 1.938 228.719 0 224 0S212.188 1.938 208.125 4.312L16.125 116.125C6.156 121.938 0 132.75 0 144.469V367.562C0 379.25 6.156 390.062 16.125 395.875L208.125 507.687C210.203 508.902 213.062 509.979 216 510.764V512H232V510.764C234.938 509.979 237.797 508.902 239.875 507.687L431.875 395.875C441.844 390.062 448 379.25 448 367.562V144.469C448 132.75 441.844 121.938 431.875 116.125ZM216 493.76L24.184 382.053C19.137 379.109 16 373.557 16 367.562V146.361L216 260.635V493.76ZM224 246.795L22.5 131.664C23.125 131.154 23.469 130.363 24.176 129.951L216.199 18.125C217.832 17.172 222.133 16 224 16S230.168 17.172 231.824 18.139L423.816 129.947C424.523 130.361 424.867 131.154 425.5 131.666L224 246.795ZM432 367.562C432 373.557 428.863 379.109 423.824 382.049L232 493.76V260.635L432 146.361V367.562Z " })
  }
));
DiceD6Thin.displayName = "DiceD6Thin";
var DiceD6_default = DiceD6Thin;
