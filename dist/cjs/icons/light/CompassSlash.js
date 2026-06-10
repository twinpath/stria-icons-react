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
var CompassSlash_exports = {};
__export(CompassSlash_exports, {
  default: () => CompassSlash_default
});
module.exports = __toCommonJS(CompassSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompassSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.999 48C434.691 48 527.999 141.309 527.999 256C527.999 281.428 523.187 305.697 514.798 328.238L541.249 349.119C553.316 320.484 559.999 289.025 559.999 256C559.999 123.451 452.548 16 319.999 16C266.933 16 218.054 33.432 178.317 62.594L204.409 83.193C237.491 60.992 277.251 48 319.999 48ZM415.105 249.531L446.851 161.465C452.413 146.197 436.794 128 421.056 128C418.925 128 416.677 128.365 414.546 129.1L310.224 166.73L339.798 190.08L411.896 164.07L388.624 228.627L415.105 249.531ZM224.874 262.451L193.148 350.533C187.587 365.801 203.206 384 218.944 384C221.192 384 223.323 383.633 225.452 382.9L329.8 345.287L300.222 321.936L228.095 347.936L251.357 283.357L224.874 262.451ZM633.921 483.438L25.921 3.436C18.999 -2.033 8.921 -0.846 3.437 6.092C-2.032 13.029 -0.845 23.092 6.077 28.561L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.906C642.03 498.969 640.843 488.906 633.921 483.438ZM319.999 464C205.308 464 111.999 370.691 111.999 256C111.999 230.572 116.812 206.303 125.2 183.76L98.749 162.879C86.683 191.514 79.999 222.975 79.999 256C79.999 388.549 187.45 496 319.999 496C373.067 496 421.946 478.566 461.683 449.404L435.591 428.807C402.507 451.01 362.747 464 319.999 464Z" })
  }
));
CompassSlashLight.displayName = "CompassSlashLight";
var CompassSlash_default = CompassSlashLight;
