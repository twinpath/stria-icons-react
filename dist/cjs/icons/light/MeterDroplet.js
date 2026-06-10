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
var MeterDroplet_exports = {};
__export(MeterDroplet_exports, {
  default: () => MeterDroplet_default
});
module.exports = __toCommonJS(MeterDroplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MeterDropletLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M546.594 205.83C544.053 196.711 536.035 192 527.994 192C520.119 192 512.221 196.514 509.406 205.83C479.656 304.344 416 331.219 416 400.672C416 462.156 466.094 512 528 512S640 462.156 640 400.672C640 330.828 576.49 304.891 546.594 205.83ZM528 480C483.889 480 448 444.414 448 400.672C448 375.557 459.199 358.623 480.66 328.418C495.648 307.322 513.457 282.258 527.99 248.268C542.586 282.463 560.441 307.512 575.467 328.592C596.846 358.582 608 375.408 608 400.672C608 444.414 572.111 480 528 480ZM240 144V208C240 216.844 247.156 224 256 224S272 216.844 272 208V144C272 135.156 264.844 128 256 128S240 135.156 240 144ZM336 144V208C336 216.844 343.156 224 352 224S368 216.844 368 208V144C368 135.156 360.844 128 352 128S336 135.156 336 144ZM144 144V208C144 216.844 151.156 224 160 224S176 216.844 176 208V144C176 135.156 168.844 128 160 128S144 135.156 144 144ZM455.375 196.562C457.875 205.016 466.656 209.891 475.281 207.328C483.75 204.812 488.563 195.906 486.063 187.438C456.031 86.5 361.406 16 256 16C123.656 16 16 123.656 16 256S123.656 496 256 496C299.688 496 342.438 484.156 379.688 461.719C387.25 457.156 389.688 447.312 385.156 439.75C380.562 432.156 370.688 429.844 363.188 434.281C330.938 453.719 293.844 464 256 464C141.312 464 48 370.688 48 256S141.312 48 256 48C347.375 48 429.344 109.094 455.375 196.562Z" })
  }
));
MeterDropletLight.displayName = "MeterDropletLight";
var MeterDroplet_default = MeterDropletLight;
