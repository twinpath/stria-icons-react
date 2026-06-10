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
var MeterBolt_exports = {};
__export(MeterBolt_exports, {
  default: () => MeterBolt_default
});
module.exports = __toCommonJS(MeterBolt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MeterBoltLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.562 290.281C495.188 278.969 496 267.438 496 256C496 123.656 388.344 16 256 16S16 123.656 16 256S123.656 496 256 496C321.031 496 381.906 470.406 427.438 423.938C433.625 417.625 433.5 407.5 427.188 401.313C420.906 395.188 410.781 395.25 404.563 401.563C365.125 441.812 312.344 464 256 464C141.312 464 48 370.688 48 256S141.312 48 256 48S464 141.312 464 256C464 265.922 463.281 275.922 461.875 285.734C460.625 294.469 466.688 302.594 475.438 303.844C483.969 304.781 492.281 299.031 493.562 290.281ZM336 144V208C336 216.844 343.156 224 352 224S368 216.844 368 208V144C368 135.156 360.844 128 352 128S336 135.156 336 144ZM638.564 361.369C635.971 355.65 630.283 351.994 624.002 351.994H531.252L620.033 250.525C625.877 243.869 625.189 233.775 618.533 227.963C611.908 222.182 601.814 222.775 595.971 229.463L483.971 357.463C479.814 362.182 478.846 368.9 481.439 374.619S489.721 383.994 496.002 383.994H588.752L499.971 485.463C494.127 492.119 494.814 502.213 501.471 508.025C504.502 510.682 508.252 511.994 512.002 511.994C516.439 511.994 520.877 510.15 524.033 506.525L636.033 378.525C640.189 373.807 641.158 367.088 638.564 361.369ZM144 144V208C144 216.844 151.156 224 160 224S176 216.844 176 208V144C176 135.156 168.844 128 160 128S144 135.156 144 144ZM240 144V208C240 216.844 247.156 224 256 224S272 216.844 272 208V144C272 135.156 264.844 128 256 128S240 135.156 240 144Z" })
  }
));
MeterBoltLight.displayName = "MeterBoltLight";
var MeterBolt_default = MeterBoltLight;
