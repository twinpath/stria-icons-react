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
var DollyEmpty_exports = {};
__export(DollyEmpty_exports, {
  default: () => DollyEmpty_default
});
module.exports = __toCommonJS(DollyEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DollyEmptySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.206 326.403L564.957 296.025C562.207 287.649 553.083 283.149 544.708 285.899L331.225 357.155C314.101 335.154 287.728 320.777 257.73 320.152L158.363 21.877C153.987 8.751 141.739 0 127.99 0H15.999C7.249 0 0 7.251 0 16.001V48.004C0 56.755 7.249 64.005 15.999 64.005H104.867L197.11 340.779C170.987 361.156 155.363 394.283 161.113 431.287C167.237 470.665 198.985 503.543 238.357 510.418C298.602 521.169 350.723 475.665 351.723 417.786L564.957 346.654C573.331 343.779 577.955 334.779 575.206 326.403ZM255.98 448.038C238.315 448.038 223.983 433.704 223.983 416.035C223.983 398.367 238.315 384.033 255.98 384.033S287.978 398.367 287.978 416.035C287.978 433.704 273.646 448.038 255.98 448.038Z" })
  }
));
DollyEmptySolid.displayName = "DollyEmptySolid";
var DollyEmpty_default = DollyEmptySolid;
