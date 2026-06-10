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
var BracketCurly_exports = {};
__export(BracketCurly_exports, {
  default: () => BracketCurly_default
});
module.exports = __toCommonJS(BracketCurly_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketCurlyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 32H120C89.072 32 64 57.072 64 88V165.5C64 176.065 59.803 186.197 52.333 193.667L7 239C2.5 243.5 0 249.625 0 256C0 262.375 2.5 268.5 7 273L52.333 318.333C59.803 325.803 64 335.935 64 346.5V424C64 454.928 89.072 480 120 480H200C213.255 480 224 469.255 224 456V456C224 442.745 213.255 432 200 432H120C115.6 432 112 428.4 112 424V346.5C112 323.062 102.663 300.59 86.053 284.054L57.875 256L86.053 227.946C102.663 211.41 112 188.938 112 165.5V88C112 83.6 115.6 80 120 80H200C213.255 80 224 69.255 224 56V56C224 42.745 213.255 32 200 32Z" })
  }
));
BracketCurlyRegular.displayName = "BracketCurlyRegular";
var BracketCurly_default = BracketCurlyRegular;
