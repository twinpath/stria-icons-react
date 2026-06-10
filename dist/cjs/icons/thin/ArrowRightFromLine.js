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
var ArrowRightFromLine_exports = {};
__export(ArrowRightFromLine_exports, {
  default: () => ArrowRightFromLine_default
});
module.exports = __toCommonJS(ArrowRightFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightFromLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.656 261.656C448.781 258.531 448.781 253.469 445.656 250.344L293.656 98.344C292.094 96.781 290.062 96 288 96S283.906 96.781 282.344 98.344C279.219 101.469 279.219 106.531 282.344 109.656L420.688 248H104C99.594 248 96 251.578 96 256S99.594 264 104 264H420.688L282.344 402.344C279.219 405.469 279.219 410.531 282.344 413.656S290.531 416.781 293.656 413.656L445.656 261.656ZM16 440V72C16 67.582 12.418 64 8 64S0 67.582 0 72V440C0 444.418 3.582 448 8 448S16 444.418 16 440Z" })
  }
));
ArrowRightFromLineThin.displayName = "ArrowRightFromLineThin";
var ArrowRightFromLine_default = ArrowRightFromLineThin;
