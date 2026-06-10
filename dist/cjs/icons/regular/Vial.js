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
var Vial_exports = {};
__export(Vial_exports, {
  default: () => Vial_default
});
module.exports = __toCommonJS(Vial_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VialRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.969 183.031L328.969 7.031C324.281 2.344 318.141 0 312 0S299.719 2.344 295.031 7.031C285.656 16.406 285.656 31.594 295.031 40.969L310.19 56.127L32.936 332.625C-5.814 371.375 -12.189 434.625 23.561 476.125C44.078 500 72.764 512 101.488 512H101.936C128.311 512 154.686 502 174.811 481.875L455.846 201.783L471.031 216.969C475.719 221.656 481.844 224 488 224S500.281 221.656 504.969 216.969C514.344 207.594 514.344 192.406 504.969 183.031ZM333.449 256H177.746L344.084 90.115L344.127 90.072L421.901 167.846L333.449 256Z" })
  }
));
VialRegular.displayName = "VialRegular";
var Vial_default = VialRegular;
