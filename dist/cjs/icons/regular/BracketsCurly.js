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
var BracketsCurly_exports = {};
__export(BracketsCurly_exports, {
  default: () => BracketsCurly_default
});
module.exports = __toCommonJS(BracketsCurly_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsCurlyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 32H120C89.072 32 64 57.072 64 88V165.5C64 176.065 59.803 186.197 52.333 193.667L7 239C2.5 243.5 0 249.625 0 256C0 262.375 2.5 268.5 7 273L52.333 318.333C59.803 325.803 64 335.935 64 346.5V424C64 454.928 89.072 480 120 480H200C213.255 480 224 469.255 224 456V456C224 442.745 213.255 432 200 432H120C115.6 432 112 428.4 112 424V346.5C112 323.062 102.663 300.59 86.053 284.054L57.875 256L86.053 227.946C102.663 211.41 112 188.938 112 165.5V88C112 83.6 115.6 80 120 80H200C213.255 80 224 69.255 224 56V56C224 42.745 213.255 32 200 32ZM569 239L523.667 193.667C516.197 186.197 512 176.065 512 165.5V88C512 57.072 486.928 32 456 32H376C362.745 32 352 42.745 352 56V56C352 69.255 362.745 80 376 80H456C460.4 80 464 83.6 464 88V165.5C464 188.87 473.284 211.284 489.809 227.809L518 256L489.809 284.191C473.284 300.716 464 323.13 464 346.5V424C464 428.4 460.4 432 456 432H376C362.745 432 352 442.745 352 456V456C352 469.255 362.745 480 376 480H456C486.928 480 512 454.928 512 424V346.5C512 335.935 516.197 325.803 523.667 318.333L569 273C573.5 268.5 576 262.375 576 256C576 249.625 573.5 243.5 569 239Z" })
  }
));
BracketsCurlyRegular.displayName = "BracketsCurlyRegular";
var BracketsCurly_default = BracketsCurlyRegular;
