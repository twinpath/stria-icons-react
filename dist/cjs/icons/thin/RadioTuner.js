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
const RadioTunerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 408.002H88C83.594 408.002 80 411.594 80 416S83.594 424 88 424H200C204.406 424 208 420.406 208 416S204.406 408.002 200 408.002ZM448 128.027H134.172L506.312 15.689C510.531 14.41 512.937 9.941 511.656 5.723C510.406 1.504 506.125 -0.996 501.688 0.379L78.828 128.027H64C28.652 128.027 0 156.68 0 192.021V448.004C0 483.348 28.652 512 64 512H448C483.348 512 512 483.348 512 448.004V192.021C512 156.68 483.348 128.027 448 128.027ZM496 448.004C496 474.469 474.469 496.002 448 496.002H64C37.531 496.002 16 474.469 16 448.004V272H496V448.004ZM496 256H16V192.021C16 165.557 37.531 144.025 64 144.025H448C474.469 144.025 496 165.557 496 192.021V256ZM72 360.004H216C220.406 360.004 224 356.41 224 352.006C224 347.6 220.406 344.006 216 344.006H72C67.594 344.006 64 347.6 64 352.006C64 356.41 67.594 360.004 72 360.004ZM384 448C419.348 448 448 419.346 448 384S419.348 320 384 320C348.654 320 320 348.654 320 384S348.654 448 384 448ZM384 336C410.467 336 432 357.533 432 384S410.467 432 384 432S336 410.467 336 384S357.533 336 384 336Z" })
  }
));
RadioTunerThin.displayName = "RadioTunerThin";
var RadioTuner_default = RadioTunerThin;
