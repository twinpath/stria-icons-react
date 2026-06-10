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
var AlignCenter_exports = {};
__export(AlignCenter_exports, {
  default: () => AlignCenter_default
});
module.exports = __toCommonJS(AlignCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlignCenterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344 56.001H104C99.582 56.001 96 59.582 96 64.001V64.001C96 68.419 99.582 72.001 104 72.001H344C348.418 72.001 352 68.419 352 64.001V64.001C352 59.582 348.418 56.001 344 56.001ZM0 192.001V192.001C0 196.419 3.582 200.001 8 200.001H440C444.418 200.001 448 196.419 448 192.001V192.001C448 187.582 444.418 184.001 440 184.001H8C3.582 184.001 0 187.582 0 192.001ZM96 320.001L96 320.001C96 324.419 99.582 328.001 104 328.001H344C348.418 328.001 352 324.419 352 320.001L352 320.001C352 315.582 348.418 312.001 344 312.001H104C99.582 312.001 96 315.582 96 320.001ZM8 456.001H440C444.418 456.001 448 452.419 448 448.001L448 448.001C448 443.582 444.418 440.001 440 440.001H8C3.582 440.001 0 443.582 0 448.001L0 448.001C0 452.419 3.582 456.001 8 456.001Z" })
  }
));
AlignCenterThin.displayName = "AlignCenterThin";
var AlignCenter_default = AlignCenterThin;
