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
var WatchFitness_exports = {};
__export(WatchFitness_exports, {
  default: () => WatchFitness_default
});
module.exports = __toCommonJS(WatchFitness_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchFitnessRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 73.613V48C320 21.602 298.4 0 272 0H112C85.6 0 64 21.602 64 48V73.613C27.484 81.027 0 113.297 0 152V360C0 398.703 27.484 430.973 64 438.387V464C64 490.398 85.6 512 112 512H272C298.4 512 320 490.398 320 464V438.387C356.516 430.973 384 398.703 384 360V152C384 113.297 356.516 81.027 320 73.613ZM336 360C336 377.645 321.645 392 304 392H80C62.355 392 48 377.645 48 360V152C48 134.355 62.355 120 80 120H304C321.645 120 336 134.355 336 152V360ZM199.189 191.82L192 199.008L184.811 191.82C166.473 173.273 136.779 170.25 116.775 186.922C93.854 206.094 92.707 240.477 113.129 261.211L183.77 332.578C185.957 334.77 188.875 336.02 192 336.02S198.043 334.77 200.23 332.578L270.871 261.211C291.293 240.477 290.146 206.094 267.225 186.922C247.221 170.25 217.527 173.273 199.189 191.82Z" })
  }
));
WatchFitnessRegular.displayName = "WatchFitnessRegular";
var WatchFitness_default = WatchFitnessRegular;
