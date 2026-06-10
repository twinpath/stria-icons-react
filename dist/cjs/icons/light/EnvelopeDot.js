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
var EnvelopeDot_exports = {};
__export(EnvelopeDot_exports, {
  default: () => EnvelopeDot_default
});
module.exports = __toCommonJS(EnvelopeDot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopeDotLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0C476.654 0 448 28.654 448 64S476.654 128 512 128S576 99.346 576 64S547.346 0 512 0ZM512 96C494.355 96 480 81.645 480 64S494.355 32 512 32S544 46.355 544 64S529.645 96 512 96ZM528 164.008H517.334C513.871 164.008 510.502 165.131 507.732 167.207L316.812 310.406C299.812 323.125 276.188 323.125 259.188 310.406L64 164.008V128C64 110.326 78.326 96 96 96H400C408.836 96 416 88.836 416 80C416 71.162 408.836 64 400 64H96C60.654 64 32 92.652 32 128V384C32 419.346 60.654 448 96 448H480C515.346 448 544 419.346 544 384V180.008C544 171.17 536.836 164.008 528 164.008ZM512 384C512 401.645 497.645 416 480 416H96C78.355 416 64 401.645 64 384V203.994L240 336C254.125 346.609 271.062 351.906 288 351.906S321.875 346.609 336 336L512 203.994V384Z" })
  }
));
EnvelopeDotLight.displayName = "EnvelopeDotLight";
var EnvelopeDot_default = EnvelopeDotLight;
