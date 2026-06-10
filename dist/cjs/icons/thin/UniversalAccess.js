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
var UniversalAccess_exports = {};
__export(UniversalAccess_exports, {
  default: () => UniversalAccess_default
});
module.exports = __toCommonJS(UniversalAccess_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UniversalAccessThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 184C282.51 184 304 162.51 304 136S282.51 88 256 88S208 109.49 208 136S229.49 184 256 184ZM256 104C273.645 104 288 118.355 288 136S273.645 168 256 168S224 153.645 224 136S238.355 104 256 104ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM365.312 184.469L339.469 193.687C286.406 212.625 225.594 212.625 172.531 193.687L146.688 184.469C142.688 183 137.938 185.125 136.469 189.312C134.969 193.469 137.156 198.062 141.313 199.531L167.156 208.75C183.07 214.441 199.445 218.389 216 220.92V310.688L184.406 405.469C183 409.656 185.281 414.188 189.469 415.594C193.719 417.031 198.187 414.75 199.594 410.531L229.781 320H282.219L312.406 410.531C313.531 413.875 316.656 416 320 416C320.844 416 321.688 415.875 322.531 415.594C326.719 414.188 329 409.656 327.594 405.469L296 310.688V220.92C312.555 218.389 328.93 214.441 344.844 208.75L370.688 199.531C374.844 198.063 377.031 193.469 375.531 189.313C374.062 185.125 369.375 183 365.312 184.469ZM280 304H232V222.977C239.984 223.703 247.988 224.125 256 224.125C264.01 224.125 272.016 223.703 280 222.977V304Z" })
  }
));
UniversalAccessThin.displayName = "UniversalAccessThin";
var UniversalAccess_default = UniversalAccessThin;
