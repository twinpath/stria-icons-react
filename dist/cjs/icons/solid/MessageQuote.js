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
var MessageQuote_exports = {};
__export(MessageQuote_exports, {
  default: () => MessageQuote_default
});
module.exports = __toCommonJS(MessageQuote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageQuoteSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V352C0 387.246 28.75 415.994 64 415.994H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.994H448C483.25 415.994 512 387.246 512 352V63.994C512 28.748 483.25 0 448 0ZM240 224C240 268.188 204.188 304 160 304H156C149.375 304 144 298.625 144 292V268C144 261.375 149.375 256 156 256H160C177.625 256 192 241.625 192 224V208H152C138.75 208 128 197.25 128 184V136C128 122.75 138.75 112 152 112H216C229.25 112 240 122.75 240 136V224ZM384 224C384 268.188 348.188 304 304 304H300C293.375 304 288 298.625 288 292V268C288 261.375 293.375 256 300 256H304C321.625 256 336 241.625 336 224V208H296C282.75 208 272 197.25 272 184V136C272 122.75 282.75 112 296 112H360C373.25 112 384 122.75 384 136V224Z" })
  }
));
MessageQuoteSolid.displayName = "MessageQuoteSolid";
var MessageQuote_default = MessageQuoteSolid;
