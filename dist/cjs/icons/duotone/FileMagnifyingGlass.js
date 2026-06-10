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
var FileMagnifyingGlass_exports = {};
__export(FileMagnifyingGlass_exports, {
  default: () => FileMagnifyingGlass_default
});
module.exports = __toCommonJS(FileMagnifyingGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileMagnifyingGlassDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 248C145.121 248 120 273.121 120 304S145.121 360 176 360S232 334.879 232 304S206.879 248 176 248ZM256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM315.314 432.004L304.004 443.313C297.756 449.563 287.625 449.563 281.377 443.313L229.254 392.895C213.631 402.277 195.551 408 176 408C118.562 408 72 361.438 72 304S118.562 200 176 200S280 246.562 280 304C280 324.445 273.889 343.375 263.701 359.453L315.314 409.375C321.562 415.625 321.562 425.758 315.314 432.004Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM263.701 359.453C273.889 343.375 280 324.445 280 304C280 246.562 233.438 200 176 200S72 246.562 72 304S118.562 408 176 408C195.551 408 213.631 402.277 229.254 392.895L281.377 443.312C287.625 449.562 297.756 449.562 304.004 443.312L315.314 432.004C321.563 425.758 321.563 415.625 315.314 409.375L263.701 359.453ZM176 360C145.121 360 120 334.879 120 304S145.121 248 176 248S232 273.121 232 304S206.879 360 176 360Z" })
    ]
  }
));
FileMagnifyingGlassDuotone.displayName = "FileMagnifyingGlassDuotone";
var FileMagnifyingGlass_default = FileMagnifyingGlassDuotone;
