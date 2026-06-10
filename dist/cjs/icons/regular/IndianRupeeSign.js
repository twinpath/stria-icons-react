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
var IndianRupeeSign_exports = {};
__export(IndianRupeeSign_exports, {
  default: () => IndianRupeeSign_default
});
module.exports = __toCommonJS(IndianRupeeSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndianRupeeSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 176C320 189.25 309.25 200 296 200H245.574C234.065 267.961 175.188 320 104 320H98.891L261.953 436.469C272.734 444.172 275.234 459.156 267.531 469.953C262.844 476.5 255.469 480 247.984 480C243.156 480 238.281 478.547 234.047 475.531L10.047 315.531C1.563 309.469 -2.031 298.609 1.141 288.672C4.328 278.734 13.563 272 24 272H104C148.602 272 185.859 241.289 196.592 200H24C10.75 200 0 189.25 0 176S10.75 152 24 152H196.592C185.859 110.711 148.602 80 104 80H24C10.75 80 0 69.25 0 56S10.75 32 24 32H296C309.25 32 320 42.75 320 56S309.25 80 296 80H210.547C228.461 99.865 240.918 124.51 245.574 152H296C309.25 152 320 162.75 320 176Z" })
  }
));
IndianRupeeSignRegular.displayName = "IndianRupeeSignRegular";
var IndianRupeeSign_default = IndianRupeeSignRegular;
