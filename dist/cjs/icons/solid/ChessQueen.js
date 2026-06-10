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
var ChessQueen_exports = {};
__export(ChessQueen_exports, {
  default: () => ChessQueen_default
});
module.exports = __toCommonJS(ChessQueen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessQueenSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.97 112C286.845 112 311.97 86.875 311.97 56S286.845 0 255.97 0S199.97 25.125 199.97 56S225.095 112 255.97 112ZM399.97 448H111.97C85.461 448 63.97 469.49 63.97 496V496C63.97 504.837 71.134 512 79.97 512H431.97C440.807 512 447.97 504.837 447.97 496V496C447.97 469.49 426.48 448 399.97 448ZM504.845 184.125L476.345 168.25C468.845 163.25 459.47 165.75 454.095 172.875C443.095 187.5 424.72 194.625 406.845 191.125C383.72 186.875 367.97 164.875 367.97 141.375C367.97 134 361.97 128 354.595 128H315.845C309.845 128 304.22 132 302.97 137.875C298.22 160.125 278.72 176 255.97 176S213.72 160.125 208.97 137.875C207.72 132 202.22 128 196.095 128H157.345C149.97 128 143.97 134 143.97 141.375C143.97 167.125 124.97 190.125 99.345 191.875C83.095 193 67.47 185.75 57.72 172.75C52.47 165.625 42.97 163.25 35.72 168.25L7.095 184.25C0.345 188.625 -1.905 197.5 1.72 204.625L104.22 416H407.72L510.22 204.625C513.845 197.375 511.595 188.625 504.845 184.125Z" })
  }
));
ChessQueenSolid.displayName = "ChessQueenSolid";
var ChessQueen_default = ChessQueenSolid;
