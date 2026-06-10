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
var MessageArrowUp_exports = {};
__export(MessageArrowUp_exports, {
  default: () => MessageArrowUp_default
});
module.exports = __toCommonJS(MessageArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageArrowUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.467 399.967 448 399.967H298.662L294.395 403.172L176 492.053V399.967H64C37.533 399.967 16 378.436 16 351.971V63.994C16 37.529 37.533 15.998 64 15.998H448C474.467 15.998 496 37.529 496 63.994V351.971ZM261.656 114.344C260.156 112.844 258.125 112 256 112H255.953C253.828 112 251.781 112.875 250.281 114.406C219.828 145.469 170.109 195.812 163.812 201.188C162.391 202.062 161.219 203.375 160.562 205.062C158.938 209.156 160.953 213.812 165.062 215.438C165.938 215.781 166.672 216.094 167.562 216.094C172.686 216.094 183.162 205.729 248 139.596V296C248 300.406 251.578 304 256 304S264 300.406 264 296V139.312L338.344 213.656C341.469 216.781 346.531 216.781 349.656 213.656S352.781 205.469 349.656 202.344L261.656 114.344Z" })
  }
));
MessageArrowUpThin.displayName = "MessageArrowUpThin";
var MessageArrowUp_default = MessageArrowUpThin;
