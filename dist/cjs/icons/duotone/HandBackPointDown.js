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
var HandBackPointDown_exports = {};
__export(HandBackPointDown_exports, {
  default: () => HandBackPointDown_default
});
module.exports = __toCommonJS(HandBackPointDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandBackPointDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 272C374.852 272 366.385 269.303 359.107 264.857C354.941 287.131 335.467 304 312 304C294.621 304 279.535 294.67 271.111 280.832C266.955 303.117 247.477 320 224 320C211.652 320 200.506 315.203 192 307.541V472C192 494.094 174.094 512 152 512S112 494.094 112 472V247.084L111.988 247.074V176.006C111.988 167.17 104.824 160.006 95.988 160.006C87.15 160.006 79.988 167.17 79.988 176.006V221.475L50 197.484C38.625 188.375 32 174.578 32 160V112C32 101.625 35.375 91.516 41.594 83.203L60.781 57.609C87.844 21.531 130.906 0 176 0L288 0C291.318 0 294.557 0.338 297.686 0.979C372.506 6.064 432 67.91 432 144V224C432 250.516 410.5 272 384 272Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
HandBackPointDownDuotone.displayName = "HandBackPointDownDuotone";
var HandBackPointDown_default = HandBackPointDownDuotone;
