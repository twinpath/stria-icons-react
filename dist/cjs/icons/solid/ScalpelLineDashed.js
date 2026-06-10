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
const ScalpelLineDashedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.23 114.367C521.59 83.49 516.467 35.863 482.738 11.861C453.506 -9.014 412.531 -1.139 389.297 26.113L187.922 261.498C178.928 272 186.424 288 200.041 288H331.957C341.326 288 350.195 283.875 356.316 276.75L495.23 114.367ZM240.191 430.375C272.277 404.625 288 366.375 288 328V320H179.984L0 512C88.969 512.125 174.104 482.875 239.553 430.875C239.809 430.625 239.936 430.5 240.191 430.375ZM304 480H240C231.164 480 224 487.164 224 496S231.164 512 240 512H304C312.836 512 320 504.836 320 496S312.836 480 304 480ZM432 480H368C359.164 480 352 487.164 352 496S359.164 512 368 512H432C440.836 512 448 504.836 448 496S440.836 480 432 480ZM560 480H496C487.164 480 480 487.164 480 496S487.164 512 496 512H560C568.836 512 576 504.836 576 496S568.836 480 560 480Z" })
  }
));
ScalpelLineDashedSolid.displayName = "ScalpelLineDashedSolid";
var ScalpelLineDashed_default = ScalpelLineDashedSolid;
