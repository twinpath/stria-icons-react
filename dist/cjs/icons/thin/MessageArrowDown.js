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
var MessageArrowDown_exports = {};
__export(MessageArrowDown_exports, {
  default: () => MessageArrowDown_default
});
module.exports = __toCommonJS(MessageArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageArrowDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.467 399.967 448 399.967H298.662L294.395 403.172L176 492.053V399.967H64C37.533 399.967 16 378.436 16 351.971V63.994C16 37.529 37.533 15.998 64 15.998H448C474.467 15.998 496 37.529 496 63.994V351.971ZM346.938 200.562C346.062 200.219 345.328 199.906 344.438 199.906C339.314 199.906 328.838 210.271 264 276.404V120C264 115.594 260.422 112 256 112S248 115.594 248 120V276.688L173.656 202.344C170.531 199.219 165.469 199.219 162.344 202.344S159.219 210.531 162.344 213.656L250.344 301.656C251.844 303.156 253.875 304 256 304H256.047C258.172 304 260.219 303.125 261.719 301.594C292.172 270.531 341.891 220.188 348.187 214.812C349.609 213.937 350.781 212.625 351.437 210.937C353.062 206.844 351.047 202.188 346.938 200.562Z" })
  }
));
MessageArrowDownThin.displayName = "MessageArrowDownThin";
var MessageArrowDown_default = MessageArrowDownThin;
