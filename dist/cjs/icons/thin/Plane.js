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
var Plane_exports = {};
__export(Plane_exports, {
  default: () => Plane_default
});
module.exports = __toCommonJS(Plane_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.998 192H365.715L260.619 8.062C258.056 3.609 251.837 0 246.712 0H181.211C170.586 0 162.898 10.172 165.836 20.391L214.868 192H111.991L68.802 134.406C65.771 130.375 61.021 128 55.99 128H15.989C5.582 128 -2.043 137.781 0.488 147.875L31.989 256L0.488 364.125C-2.043 374.219 5.582 384 15.989 384H55.99C61.021 384 65.771 381.625 68.802 377.594L111.991 320H214.868L165.836 491.594C162.898 501.812 170.586 512 181.211 512H246.712C252.431 512 257.744 508.922 260.587 503.938L365.715 320H479.998C515.343 320 576 291.344 576 256S515.343 192 479.998 192ZM181.211 16H246.728L347.288 192H231.509L181.211 16ZM246.712 496L181.219 495.988L231.509 320H347.284L246.712 496ZM479.998 304H103.991L55.99 368L15.848 368.6L48.654 256L15.989 144L56.001 144.006L103.991 208H479.998C511.585 208 560 233.746 560 256S511.585 304 479.998 304Z" })
  }
));
PlaneThin.displayName = "PlaneThin";
var Plane_default = PlaneThin;
