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
var StarSharpHalfStroke_exports = {};
__export(StarSharpHalfStroke_exports, {
  default: () => StarSharpHalfStroke_default
});
module.exports = __toCommonJS(StarSharpHalfStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarSharpHalfStrokeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M537.794 181.641H360.171L305.284 12.566C302.564 4.189 295.281 0 288 0S273.436 4.189 270.716 12.566L215.829 181.641H38.206C20.602 181.641 13.284 204.186 27.526 214.543L171.225 319.035L116.337 488.109C112.192 500.873 122.324 512 133.683 512C137.235 512 140.909 510.91 144.301 508.443L288 403.951L431.699 508.443C435.093 510.912 438.765 512 442.317 512C453.676 512 463.806 500.873 459.663 488.109L404.775 319.035L548.474 214.543C562.716 204.186 555.398 181.641 537.794 181.641ZM376.586 280.203L348.396 300.701L359.164 333.869L385.723 415.68L316.189 365.117L288 344.619V114.662L314.559 196.473L325.327 229.641H446.118L376.586 280.203Z" })
  }
));
StarSharpHalfStrokeSolid.displayName = "StarSharpHalfStrokeSolid";
var StarSharpHalfStroke_default = StarSharpHalfStrokeSolid;
