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
const MessageMiddleTopThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96.033H336.025L268.801 6.4C265.6 2.133 260.801 0 256 0S246.4 2.133 243.199 6.4L175.975 96.033H64C28.75 96.033 0 124.781 0 160.029V448.006C0 483.252 28.75 512 64 512H448C483.25 512 512 483.252 512 448.006V160.029C512 124.781 483.25 96.033 448 96.033ZM496 448.006C496 474.471 474.467 496 448 496H64C37.533 496 16 474.471 16 448.006V160.029C16 133.564 37.533 112.033 64 112.033H183.975L255.963 16.004C255.967 16.004 255.98 16 256 16L328.025 112.033H448C474.467 112.033 496 133.564 496 160.029V448.006Z " })
  }
));
MessageMiddleTopThin.displayName = "MessageMiddleTopThin";
var MessageMiddleTop_default = MessageMiddleTopThin;
