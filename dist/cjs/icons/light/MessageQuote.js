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
const MessageQuoteLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.84 171.025 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM480 352.002C480 369.602 465.6 384.002 448 384.002H303.924C296.996 384.002 290.254 386.25 284.713 390.408L192 460.002V400.002C192 391.164 184.836 384.002 176 384.002H64C46.4 384.002 32 369.602 32 352.002V64C32 46.4 46.4 32 64 32H448C465.6 32 480 46.4 480 64V352.002ZM327.943 112C297.016 112 271.943 137.072 271.943 168S297.016 224 327.943 224C336.57 224 344.645 221.889 351.943 218.404V224C351.943 250.469 330.412 272 303.943 272C295.1 272 287.943 279.156 287.943 288S295.1 304 303.943 304C348.068 304 383.943 268.125 383.943 224V168C383.943 137.072 358.871 112 327.943 112ZM327.943 192C314.711 192 303.943 181.232 303.943 168C303.943 154.766 314.711 144 327.943 144C341.178 144 351.943 154.766 351.943 168C351.943 181.232 341.178 192 327.943 192ZM183.943 112C153.016 112 127.943 137.072 127.943 168S153.016 224 183.943 224C192.57 224 200.645 221.889 207.943 218.404V224C207.943 250.469 186.412 272 159.943 272C151.1 272 143.943 279.156 143.943 288S151.1 304 159.943 304C204.068 304 239.943 268.125 239.943 224V168C239.943 137.072 214.871 112 183.943 112ZM183.943 192C170.711 192 159.943 181.232 159.943 168C159.943 154.766 170.711 144 183.943 144C197.178 144 207.943 154.766 207.943 168C207.943 181.232 197.178 192 183.943 192Z" })
  }
));
MessageQuoteLight.displayName = "MessageQuoteLight";
var MessageQuote_default = MessageQuoteLight;
