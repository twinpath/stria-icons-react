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
var Lasso_exports = {};
__export(Lasso_exports, {
  default: () => Lasso_default
});
module.exports = __toCommonJS(Lasso_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LassoLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 0C128.943 0 0 78.797 0 176C0 244.023 63.258 302.92 155.686 332.219C223.234 357.559 208.861 419.951 203.494 433.48C192.152 462.072 163.207 479.84 132.447 479.84H48.08C39.199 479.84 32 487.039 32 495.92S39.199 512 48.08 512H130.197C178.428 512 223.285 481.857 236.752 435.543C245.955 403.895 239.463 372.26 222.957 347.324C243.889 350.283 265.596 352 288 352C447.059 352 576 273.201 576 176C576 78.797 447.059 0 288 0ZM288 320C149.234 320 32 254.057 32 176S149.234 32 288 32C426.768 32 544 97.943 544 176S426.768 320 288 320Z" })
  }
));
LassoLight.displayName = "LassoLight";
var Lasso_default = LassoLight;
