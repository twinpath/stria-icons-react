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
var MessageMiddleTop_exports = {};
__export(MessageMiddleTop_exports, {
  default: () => MessageMiddleTop_default
});
module.exports = __toCommonJS(MessageMiddleTop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageMiddleTopLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96.033H336.025L268.801 6.4C265.6 2.133 260.801 0 256 0S246.4 2.133 243.199 6.4L175.975 96.033H64C28.75 96.033 0 124.781 0 160.029V448.006C0 483.252 28.75 512 64 512H448C483.25 512 512 483.252 512 448.006V160.029C512 124.781 483.25 96.033 448 96.033ZM480 448.006C480 465.648 465.645 480 448 480H64C46.355 480 32 465.648 32 448.006V160.029C32 142.387 46.355 128.033 64 128.033H191.975L256 42.666L320.025 128.033H448C465.645 128.033 480 142.387 480 160.029V448.006Z " })
  }
));
MessageMiddleTopLight.displayName = "MessageMiddleTopLight";
var MessageMiddleTop_default = MessageMiddleTopLight;
