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
var MessageXmark_exports = {};
__export(MessageXmark_exports, {
  default: () => MessageXmark_default
});
module.exports = __toCommonJS(MessageXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageXmarkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.922 512 172.18 512C174.547 512 176.961 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.469 399.967 448 399.967H298.664L294.395 403.172L176 492.053V399.967H64C37.531 399.967 16 378.436 16 351.971V63.994C16 37.529 37.531 15.998 64 15.998H448C474.469 15.998 496 37.529 496 63.994V351.971ZM333.656 130.344C330.531 127.219 325.469 127.219 322.344 130.344L256 196.686L189.656 130.344C186.531 127.219 181.469 127.219 178.344 130.344S175.219 138.531 178.344 141.656L244.688 207.998L178.344 274.342C175.219 277.467 175.219 282.529 178.344 285.654C181.469 288.781 186.531 288.781 189.656 285.654L256 219.311L322.344 285.654C325.469 288.781 330.531 288.781 333.656 285.654C336.781 282.529 336.781 277.467 333.656 274.342L267.312 207.998L333.656 141.656C336.781 138.531 336.781 133.469 333.656 130.344Z" })
  }
));
MessageXmarkThin.displayName = "MessageXmarkThin";
var MessageXmark_default = MessageXmarkThin;
