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
const PlaneSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M246.712 0C251.837 0 258.056 3.609 260.619 8.062L365.715 192H479.998C515.343 192 576 220.656 576 256S515.343 320 479.998 320H365.715L260.587 503.938C257.744 508.922 252.431 512 246.712 512H181.211C170.586 512 162.898 501.812 165.836 491.594L214.868 320H111.991L68.802 377.594C65.771 381.625 61.021 384 55.99 384H15.989C5.582 384 -2.043 374.219 0.488 364.125L31.989 256L0.488 147.875C-2.043 137.781 5.582 128 15.989 128H55.99C61.021 128 65.771 130.375 68.802 134.406L111.991 192H214.868L165.836 20.391C162.898 10.172 170.586 0 181.211 0H246.712L246.712 0Z" })
  }
));
PlaneSolid.displayName = "PlaneSolid";
var Plane_default = PlaneSolid;
