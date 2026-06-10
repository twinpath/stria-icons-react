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
var ArrowLeftFromLine_exports = {};
__export(ArrowLeftFromLine_exports, {
  default: () => ArrowLeftFromLine_default
});
module.exports = __toCommonJS(ArrowLeftFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftFromLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.344 250.344C-0.781 253.469 -0.781 258.531 2.344 261.656L154.344 413.656C155.906 415.219 157.937 416 160 416S164.094 415.219 165.656 413.656C168.781 410.531 168.781 405.469 165.656 402.344L27.312 264H344C348.406 264 352 260.422 352 256S348.406 248 344 248H27.312L165.656 109.656C168.781 106.531 168.781 101.469 165.656 98.344S157.469 95.219 154.344 98.344L2.344 250.344ZM432 72V440C432 444.418 435.582 448 440 448S448 444.418 448 440V72C448 67.582 444.418 64 440 64S432 67.582 432 72Z" })
  }
));
ArrowLeftFromLineThin.displayName = "ArrowLeftFromLineThin";
var ArrowLeftFromLine_default = ArrowLeftFromLineThin;
