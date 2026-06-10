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
var MessageCode_exports = {};
__export(MessageCode_exports, {
  default: () => MessageCode_default
});
module.exports = __toCommonJS(MessageCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageCodeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.973C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.973V63.994C512 28.748 483.25 0 448 0ZM496 351.973C496 378.436 474.467 399.969 448 399.969H298.662L294.395 403.172L176 492.053V399.969H64C37.533 399.969 16 378.436 16 351.973V63.994C16 37.529 37.533 15.998 64 15.998H448C474.467 15.998 496 37.529 496 63.994V351.973ZM212.766 122.344C209.641 119.219 204.578 119.219 201.453 122.344L121.453 202.344C118.328 205.469 118.328 210.531 121.453 213.656L201.453 293.656C203.016 295.219 205.062 296 207.109 296S211.203 295.219 212.766 293.656C215.891 290.531 215.891 285.469 212.766 282.344L138.422 208L212.766 133.656C215.891 130.531 215.891 125.469 212.766 122.344ZM310.547 122.344C307.422 119.219 302.359 119.219 299.234 122.344S296.109 130.531 299.234 133.656L373.578 208L299.234 282.344C296.109 285.469 296.109 290.531 299.234 293.656C300.797 295.219 302.844 296 304.891 296S308.984 295.219 310.547 293.656L390.547 213.656C393.672 210.531 393.672 205.469 390.547 202.344L310.547 122.344Z" })
  }
));
MessageCodeThin.displayName = "MessageCodeThin";
var MessageCode_default = MessageCodeThin;
