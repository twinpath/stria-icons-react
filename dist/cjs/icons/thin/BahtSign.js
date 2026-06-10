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
var BahtSign_exports = {};
__export(BahtSign_exports, {
  default: () => BahtSign_default
});
module.exports = __toCommonJS(BahtSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BahtSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M222.406 249.861C251.926 232.455 272 200.668 272 164C272 108.875 227.125 64 172 64H136V8C136 3.594 132.406 0 128 0S120 3.594 120 8V64H40C26.781 64 16 74.781 16 88V424C16 437.219 26.781 448 40 448H120V504C120 508.406 123.594 512 128 512S136 508.406 136 504V448H204C259.125 448 304 403.125 304 348C304 299.178 268.752 258.551 222.406 249.861ZM172 80C218.312 80 256 117.688 256 164S218.312 248 172 248H136V80H172ZM32 88C32 83.594 35.594 80 40 80H120V248H32V88ZM40 432C35.594 432 32 428.406 32 424V264H120V432H40ZM204 432H136V264H204C250.312 264 288 301.688 288 348S250.312 432 204 432Z" })
  }
));
BahtSignThin.displayName = "BahtSignThin";
var BahtSign_default = BahtSignThin;
