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
var MessageText_exports = {};
__export(MessageText_exports, {
  default: () => MessageText_default
});
module.exports = __toCommonJS(MessageText_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageTextThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 -0.002H64C28.75 -0.002 0 28.746 0 63.992V351.969C0 387.217 28.75 415.965 64 415.965H160V499.957C160 507.029 165.92 511.998 172.178 511.998C174.547 511.998 176.963 511.285 179.125 509.707L304 415.965H448C483.25 415.965 512 387.217 512 351.969V63.992C512 28.746 483.25 -0.002 448 -0.002ZM496 351.969C496 378.434 474.467 399.965 448 399.965H298.662L294.395 403.17L176 492.051V399.965H64C37.533 399.965 16 378.434 16 351.969V63.992C16 37.527 37.533 15.996 64 15.996H448C474.467 15.996 496 37.527 496 63.992V351.969ZM344 143.998H168C163.594 143.998 160 147.592 160 151.998S163.594 159.998 168 159.998H248V295.998C248 300.404 251.594 303.998 256 303.998S264 300.404 264 295.998V159.998H344C348.406 159.998 352 156.404 352 151.998S348.406 143.998 344 143.998Z" })
  }
));
MessageTextThin.displayName = "MessageTextThin";
var MessageText_default = MessageTextThin;
