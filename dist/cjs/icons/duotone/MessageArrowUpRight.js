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
const MessageArrowUpRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V352C0 387.248 28.75 415.994 64 415.994H160V499.961C160 509.709 171.25 515.459 179.125 509.709L304 415.994H448C483.25 415.994 512 387.248 512 352V63.994C512 28.748 483.25 0 448 0ZM368 264C368 277.25 357.25 288 344 288S320 277.25 320 264V193.938L224 289.938C214.619 299.318 199.436 299.311 190.062 289.938C180.688 280.562 180.688 265.375 190.062 256L286.062 160H216C202.75 160 192 149.25 192 136S202.75 112 216 112H344C357.25 112 368 122.75 368 136V264Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M343.969 112H215.969C202.719 112 191.969 122.75 191.969 136S202.719 160 215.969 160H286.031L190.031 256C180.656 265.375 180.656 280.562 190.031 289.938C199.404 299.311 214.588 299.318 223.969 289.938L319.969 193.938V264C319.969 277.25 330.719 288 343.969 288S367.969 277.25 367.969 264V136C367.969 122.75 357.219 112 343.969 112Z" })
    ]
  }
));
MessageArrowUpRightDuotone.displayName = "MessageArrowUpRightDuotone";
var MessageArrowUpRight_default = MessageArrowUpRightDuotone;
