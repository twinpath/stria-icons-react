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
var ScalpelLineDashed_exports = {};
__export(ScalpelLineDashed_exports, {
  default: () => ScalpelLineDashed_default
});
module.exports = __toCommonJS(ScalpelLineDashed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScalpelLineDashedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 320V328C288 366.375 272.277 404.625 240.191 430.375C239.936 430.5 239.809 430.625 239.553 430.875C174.104 482.875 88.969 512.125 0 512L179.984 320H288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.231 114.367C521.59 83.49 516.467 35.863 482.739 11.861C453.506 -9.014 412.532 -1.139 389.297 26.113L155.922 293.498C146.928 304 154.424 320 168.042 320H299.958C309.327 320 318.196 315.875 324.317 308.75L495.231 114.367ZM304.001 480H240.001C231.165 480 224.001 487.164 224.001 496S231.165 512 240.001 512H304.001C312.836 512 320.001 504.836 320.001 496S312.836 480 304.001 480ZM432.001 480H368.001C359.165 480 352.001 487.164 352.001 496S359.165 512 368.001 512H432.001C440.836 512 448.001 504.836 448.001 496S440.836 480 432.001 480ZM560.001 480H496.001C487.165 480 480.001 487.164 480.001 496S487.165 512 496.001 512H560.001C568.836 512 576.001 504.836 576.001 496S568.836 480 560.001 480Z" })
    ]
  }
));
ScalpelLineDashedDuotone.displayName = "ScalpelLineDashedDuotone";
var ScalpelLineDashed_default = ScalpelLineDashedDuotone;
