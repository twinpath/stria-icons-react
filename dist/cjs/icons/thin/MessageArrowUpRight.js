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
var MessageArrowUpRight_exports = {};
__export(MessageArrowUpRight_exports, {
  default: () => MessageArrowUpRight_default
});
module.exports = __toCommonJS(MessageArrowUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageArrowUpRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.973C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.973V63.994C512 28.748 483.25 0 448 0ZM496 351.973C496 378.436 474.467 399.969 448 399.969H298.662L294.395 403.172L176 492.053V399.969H64C37.533 399.969 16 378.436 16 351.973V63.994C16 37.529 37.533 15.998 64 15.998H448C474.467 15.998 496 37.529 496 63.994V351.973ZM365.652 114.342C364.203 112.895 362.203 112 360 112H219.188C214.781 112 211.188 115.578 211.188 120S214.781 128 219.188 128H340.688L178.344 290.344C175.219 293.469 175.219 298.531 178.344 301.656C179.906 303.219 181.938 304 184 304S188.094 303.219 189.656 301.656L352 139.312V260.797C352 265.219 355.594 268.797 360 268.797S368 265.219 368 260.797V120C368 117.953 367.219 115.906 365.656 114.344C365.654 114.342 365.654 114.344 365.652 114.342Z" })
  }
));
MessageArrowUpRightThin.displayName = "MessageArrowUpRightThin";
var MessageArrowUpRight_default = MessageArrowUpRightThin;
