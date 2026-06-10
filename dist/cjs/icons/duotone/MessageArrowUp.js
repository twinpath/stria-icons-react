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
var MessageArrowUp_exports = {};
__export(MessageArrowUp_exports, {
  default: () => MessageArrowUp_default
});
module.exports = __toCommonJS(MessageArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM350.621 224.969C345.934 229.656 339.809 232 333.652 232S321.371 229.656 316.684 224.969L277.652 185.937V288C277.652 301.25 266.902 312 253.652 312S229.652 301.25 229.652 288V185.938L190.621 224.969C181.246 234.344 166.059 234.344 156.684 224.969S147.309 200.406 156.684 191.031L236.684 111.031C246.059 101.656 261.246 101.656 270.621 111.031L350.621 191.031C359.996 200.406 359.996 215.594 350.621 224.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.968 224.969C346.28 229.656 340.155 232 333.999 232S321.717 229.656 317.03 224.969L277.999 185.937V288C277.999 301.25 267.249 312 253.999 312S229.999 301.25 229.999 288V185.938L190.968 224.969C181.592 234.344 166.405 234.344 157.03 224.969S147.655 200.406 157.03 191.031L237.03 111.031C246.405 101.656 261.592 101.656 270.968 111.031L350.968 191.031C360.342 200.406 360.342 215.594 350.968 224.969Z" })
    ]
  }
));
MessageArrowUpDuotone.displayName = "MessageArrowUpDuotone";
var MessageArrowUp_default = MessageArrowUpDuotone;
