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
var AlignRight_exports = {};
__export(AlignRight_exports, {
  default: () => AlignRight_default
});
module.exports = __toCommonJS(AlignRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlignRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 64.001V64.001C160 68.419 163.582 72.001 168 72.001H440C444.418 72.001 448 68.419 448 64.001V64.001C448 59.582 444.418 56.001 440 56.001H168C163.582 56.001 160 59.582 160 64.001ZM440 184.001H8C3.582 184.001 0 187.582 0 192.001V192.001C0 196.419 3.582 200.001 8 200.001H440C444.418 200.001 448 196.419 448 192.001V192.001C448 187.582 444.418 184.001 440 184.001ZM440 312.001H168C163.582 312.001 160 315.582 160 320.001L160 320.001C160 324.419 163.582 328.001 168 328.001H440C444.418 328.001 448 324.419 448 320.001L448 320.001C448 315.582 444.418 312.001 440 312.001ZM448 448.001L448 448.001C448 443.582 444.418 440.001 440 440.001H8C3.582 440.001 0 443.582 0 448.001L0 448.001C0 452.419 3.582 456.001 8 456.001H440C444.418 456.001 448 452.419 448 448.001Z" })
  }
));
AlignRightThin.displayName = "AlignRightThin";
var AlignRight_default = AlignRightThin;
