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
var BracketCurlyRight_exports = {};
__export(BracketCurlyRight_exports, {
  default: () => BracketCurlyRight_default
});
module.exports = __toCommonJS(BracketCurlyRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketCurlyRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 56V56C32 69.255 42.745 80 56 80H136C140.4 80 144 83.6 144 88V165.5C144 188.938 153.337 211.41 169.947 227.946L198.125 256L169.947 284.054C153.337 300.59 144 323.062 144 346.5V424C144 428.4 140.4 432 136 432H56C42.745 432 32 442.745 32 456V456C32 469.255 42.745 480 56 480H136C166.928 480 192 454.928 192 424V346.5C192 335.935 196.197 325.803 203.667 318.333L249 273C253.5 268.5 256 262.375 256 256C256 249.625 253.5 243.5 249 239L203.667 193.667C196.197 186.197 192 176.065 192 165.5V88C192 57.072 166.928 32 136 32H56C42.745 32 32 42.745 32 56Z" })
  }
));
BracketCurlyRightRegular.displayName = "BracketCurlyRightRegular";
var BracketCurlyRight_default = BracketCurlyRightRegular;
