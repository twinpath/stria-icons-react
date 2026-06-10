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
var PenLine_exports = {};
__export(PenLine_exports, {
  default: () => PenLine_default
});
module.exports = __toCommonJS(PenLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.211 56.262L455.703 18.748C443.209 6.252 426.83 0 410.452 0C394.071 0 377.696 6.25 365.196 18.75L45.11 338.885C36.541 347.451 30.584 358.275 27.926 370.094L0.319 492.854C-1.701 502.967 6.159 512 15.946 512C16.993 512 18.061 511.896 19.143 511.68C19.143 511.68 103.75 493.73 141.895 484.748C153.432 482.031 163.76 476.225 172.139 467.844C221.264 418.719 406.649 233.33 493.301 146.676C518.293 121.684 518.202 81.256 493.211 56.262ZM138.202 433.902C136.086 436.018 133.698 437.365 130.893 438.025C112.719 442.307 83.432 448.738 58.203 454.203L74.752 380.627C75.418 377.668 76.903 374.973 79.049 372.824L320.936 130.902L381.065 191.035L138.202 433.902ZM552 464H248C234.746 464 224 474.744 224 488C224 501.254 234.746 512 248 512H552C565.254 512 576 501.254 576 488C576 474.744 565.254 464 552 464Z" })
  }
));
PenLineRegular.displayName = "PenLineRegular";
var PenLine_default = PenLineRegular;
