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
var ChevronsDown_exports = {};
__export(ChevronsDown_exports, {
  default: () => ChevronsDown_default
});
module.exports = __toCommonJS(ChevronsDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M434.066 226.774L224 460.18L13.934 226.774C12.371 225.024 10.184 224.133 7.996 224.133C6.09 224.133 4.183 224.805 2.652 226.18C-0.629 229.149 -0.91 234.195 2.058 237.492L218.062 477.492C221.062 480.836 226.938 480.836 229.938 477.492L445.942 237.492C448.91 234.195 448.629 229.149 445.348 226.18C442.066 223.195 436.973 223.492 434.066 226.774ZM218.062 285.377C221.062 288.721 226.938 288.721 229.938 285.377L445.942 45.377C448.91 42.08 448.629 37.033 445.348 34.065C442.066 31.08 436.973 31.377 434.066 34.658L224 268.065L13.934 34.658C12.371 32.908 10.184 32.018 7.996 32.018C6.09 32.018 4.183 32.69 2.652 34.065C-0.629 37.033 -0.91 42.08 2.058 45.377L218.062 285.377Z" })
  }
));
ChevronsDownThin.displayName = "ChevronsDownThin";
var ChevronsDown_default = ChevronsDownThin;
