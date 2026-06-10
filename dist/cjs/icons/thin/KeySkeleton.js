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
var KeySkeleton_exports = {};
__export(KeySkeleton_exports, {
  default: () => KeySkeleton_default
});
module.exports = __toCommonJS(KeySkeleton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeySkeletonThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 0H320C266.98 0 224 42.98 224 96V192C224 215.619 232.857 236.963 247.004 253.684L2.344 498.344C-0.781 501.469 -0.781 506.531 2.344 509.656C3.906 511.219 5.937 512 8 512S12.094 511.219 13.656 509.656L59.719 463.594L101.094 504.969C105.781 509.656 111.906 512 118.062 512S130.344 509.656 135.031 504.969L184.469 455.531C193.812 446.187 193.812 430.937 184.469 421.594L143.094 380.219L258.316 264.996C275.037 279.143 296.381 288 320 288H416C469.02 288 512 245.02 512 192V96C512 42.98 469.02 0 416 0ZM173.156 432.906C176.281 436.031 176.281 441.094 173.156 444.219L123.719 493.656C120.594 496.781 115.531 496.781 112.406 493.656L71.031 452.281L131.781 391.531L173.156 432.906ZM496 192C496 236.111 460.113 272 416 272H320C275.889 272 240 236.111 240 192V96C240 51.889 275.889 16 320 16H416C460.113 16 496 51.889 496 96V192ZM416 64H320C302.328 64 288 78.326 288 96V192C288 209.674 302.328 224 320 224H416C433.674 224 448 209.674 448 192V96C448 78.326 433.674 64 416 64ZM432 192C432 200.822 424.822 208 416 208H320C311.178 208 304 200.822 304 192V96C304 87.178 311.178 80 320 80H416C424.822 80 432 87.178 432 96V192Z" })
  }
));
KeySkeletonThin.displayName = "KeySkeletonThin";
var KeySkeleton_default = KeySkeletonThin;
