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
const MessageXmarkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.84 171.023 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM480 352.002C480 369.602 465.602 384.002 448 384.002H303.922C296.996 384.002 290.254 386.25 284.711 390.408L192 460.002V400.002C192 391.164 184.836 384.002 176 384.002H64C46.398 384.002 32 369.602 32 352.002V64C32 46.4 46.398 32 64 32H448C465.602 32 480 46.4 480 64V352.002ZM331.312 132.688C325.062 126.438 314.937 126.438 308.688 132.688L256 185.375L203.312 132.688C197.062 126.438 186.937 126.438 180.688 132.688S174.438 149.063 180.688 155.312L233.375 208L180.688 260.688C174.438 266.938 174.438 277.063 180.688 283.312C186.93 289.559 197.055 289.566 203.312 283.312L256 230.625L308.688 283.312C314.93 289.559 325.055 289.566 331.312 283.312C337.562 277.062 337.562 266.937 331.312 260.688L278.625 208L331.312 155.312C337.562 149.062 337.562 138.938 331.312 132.688Z" })
  }
));
MessageXmarkLight.displayName = "MessageXmarkLight";
var MessageXmark_default = MessageXmarkLight;
