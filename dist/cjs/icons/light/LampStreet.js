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
var LampStreet_exports = {};
__export(LampStreet_exports, {
  default: () => LampStreet_default
});
module.exports = __toCommonJS(LampStreet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampStreetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M398.732 239.195C378.943 230.396 357.586 226.068 336 224.654V112C336 50.25 285.75 0 224 0H112C50.25 0 0 50.25 0 112V496C0 504.844 7.156 512 16 512S32 504.844 32 496V112C32 67.891 67.875 32 112 32H224C268.125 32 304 67.891 304 112V224.658C282.439 226.076 261.107 230.402 241.338 239.189C181.553 265.764 137.699 321.598 128.219 388.652C126.25 403.131 137.875 416 152.406 416H487.596C502.127 416 513.752 403.131 511.783 388.652C502.303 321.604 458.492 265.773 398.732 239.195ZM161.473 384C171.723 333.383 206.635 289.635 254.336 268.43C272.893 260.182 294.934 256 319.85 256H320.205C345.129 256 367.174 260.184 385.729 268.436C433.439 289.654 468.346 333.459 478.537 384H161.473ZM320.031 480C299.199 480 281.605 466.584 274.979 448H241.648C249.082 484.471 281.387 512 320.031 512S390.98 484.471 398.414 448H365.084C358.457 466.584 340.863 480 320.031 480Z" })
  }
));
LampStreetLight.displayName = "LampStreetLight";
var LampStreet_default = LampStreetLight;
