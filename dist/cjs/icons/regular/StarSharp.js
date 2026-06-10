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
var StarSharp_exports = {};
__export(StarSharp_exports, {
  default: () => StarSharp_default
});
module.exports = __toCommonJS(StarSharp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarSharpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M537.793 181.641H360.172L305.283 12.566C302.565 4.189 295.282 0 288 0S273.436 4.189 270.717 12.566L215.828 181.641H38.207C20.604 181.641 13.283 204.186 27.526 214.543L171.225 319.035L116.336 488.109C112.194 500.873 122.325 512 133.682 512C137.235 512 140.908 510.91 144.301 508.443L288 403.951L431.7 508.443C435.094 510.912 438.766 512 442.319 512C453.676 512 463.807 500.873 459.664 488.109L404.776 319.035L548.475 214.543C562.717 204.186 555.397 181.641 537.793 181.641ZM351.947 311.76L385.664 415.621L297.41 351.444C291.8 347.365 284.2 347.365 278.59 351.444L190.336 415.621L224.054 311.76C226.193 305.171 223.849 297.953 218.246 293.879L129.905 229.641H239.084C246.017 229.641 252.161 225.175 254.302 218.581L288 114.779L321.699 218.581C323.84 225.175 329.984 229.641 336.917 229.641H446.096L357.755 293.879C352.152 297.953 349.808 305.171 351.947 311.76Z" })
  }
));
StarSharpRegular.displayName = "StarSharpRegular";
var StarSharp_default = StarSharpRegular;
