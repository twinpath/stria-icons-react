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
var MessageDots_exports = {};
__export(MessageDots_exports, {
  default: () => MessageDots_default
});
module.exports = __toCommonJS(MessageDots_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageDotsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 175.986C110.328 175.986 96 190.311 96 207.983S110.328 239.981 128 239.981S160 225.656 160 207.983S145.672 175.986 128 175.986ZM128 223.982C119.176 223.982 112 216.805 112 207.983S119.176 191.985 128 191.985S144 199.162 144 207.983S136.824 223.982 128 223.982ZM256 175.986C238.328 175.986 224 190.311 224 207.983S238.328 239.981 256 239.981S288 225.656 288 207.983S273.672 175.986 256 175.986ZM256 223.982C247.176 223.982 240 216.805 240 207.983S247.176 191.985 256 191.985S272 199.162 272 207.983S264.824 223.982 256 223.982ZM384 175.986C366.328 175.986 352 190.311 352 207.983S366.328 239.981 384 239.981S416 225.656 416 207.983S401.672 175.986 384 175.986ZM384 223.982C375.176 223.982 368 216.805 368 207.983S375.176 191.985 384 191.985S400 199.162 400 207.983S392.824 223.982 384 223.982ZM448 0H64C28.75 0 0 28.748 0 63.995V351.972C0 387.219 28.75 415.967 64 415.967H160V499.96C160 507.032 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.972V63.995C512 28.748 483.25 0 448 0ZM496 351.972C496 378.436 474.467 399.968 448 399.968H298.662L294.395 403.173L176 492.052V399.968H64C37.533 399.968 16 378.436 16 351.972V63.995C16 37.53 37.533 15.999 64 15.999H448C474.467 15.999 496 37.53 496 63.995V351.972Z" })
  }
));
MessageDotsThin.displayName = "MessageDotsThin";
var MessageDots_default = MessageDotsThin;
