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
var ArrowRightToLine_exports = {};
__export(ArrowRightToLine_exports, {
  default: () => ArrowRightToLine_default
});
module.exports = __toCommonJS(ArrowRightToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M349.656 261.656C352.781 258.531 352.781 253.469 349.656 250.344L197.656 98.344C196.094 96.781 194.062 96 192 96S187.906 96.781 186.344 98.344C183.219 101.469 183.219 106.531 186.344 109.656L324.688 248H8C3.594 248 0 251.578 0 256S3.594 264 8 264H324.688L186.344 402.344C183.219 405.469 183.219 410.531 186.344 413.656S194.531 416.781 197.656 413.656L349.656 261.656ZM448 440V72C448 67.582 444.418 64 440 64S432 67.582 432 72V440C432 444.418 435.582 448 440 448S448 444.418 448 440Z" })
  }
));
ArrowRightToLineThin.displayName = "ArrowRightToLineThin";
var ArrowRightToLine_default = ArrowRightToLineThin;
