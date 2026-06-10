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
var RadioTuner_exports = {};
__export(RadioTuner_exports, {
  default: () => RadioTuner_default
});
module.exports = __toCommonJS(RadioTuner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RadioTunerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 384H112C103.201 384 96 391.199 96 400C96 408.799 103.201 416 112 416H208C216.801 416 224 408.799 224 400C224 391.199 216.801 384 208 384ZM96 352H224C232.801 352 240 344.799 240 336C240 327.199 232.801 320 224 320H96C87.201 320 80 327.199 80 336C80 344.799 87.201 352 96 352ZM368 432C403.326 432 432 403.324 432 368S403.326 304 368 304C332.676 304 304 332.676 304 368S332.676 432 368 432ZM439.994 127.992H201.248L494.369 47.131C507.148 43.6 514.648 30.381 511.133 17.615C507.617 4.834 494.354 -2.619 481.619 0.85L52.859 119.133C21.734 127.711 0 156.258 0 188.541V439.998C0 479.701 32.297 512 71.998 512H439.994C479.697 512 511.992 479.701 511.992 439.998V199.994C511.992 160.291 479.697 127.992 439.994 127.992ZM463.994 439.998C463.994 453.232 453.229 463.998 439.994 463.998H71.998C58.766 463.998 48 453.232 48 439.998V272H463.994V439.998Z" })
  }
));
RadioTunerRegular.displayName = "RadioTunerRegular";
var RadioTuner_default = RadioTunerRegular;
