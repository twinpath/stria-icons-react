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
var DogLeashed_exports = {};
__export(DogLeashed_exports, {
  default: () => DogLeashed_default
});
module.exports = __toCommonJS(DogLeashed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DogLeashedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.966 243.59V277.465L319.966 231.84V383.965L287.966 384V224.033L38.091 41.215C31.216 35.84 29.965 25.715 35.341 18.715L45.216 6.09C50.591 -0.785 60.591 -2.035 67.591 3.34L319.966 197.84L447.966 243.59Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 224.034H288V384H192V496C192 504.875 184.875 512 176 512H112C103.125 512 96 504.875 96 496V282.125C58.875 268.875 32 233.625 32 192C32 174.375 46.375 160 64 160S96 174.375 96 192S110.375 224.034 128 224.034ZM320 231.841L448 277.466V495.966C448 504.841 440.875 511.966 432 511.966H368C359.125 511.966 352 504.841 352 495.966V383.966H320V231.841ZM528 95.965H464L456.875 81.715C452 71.84 439.125 63.965 428.25 63.965H374.625L347.375 36.715C337.25 26.59 320 33.715 320 47.965V197.84L448 243.59V207.965H480C515.375 207.965 544 179.34 544 143.965V111.965C544 103.09 536.875 95.965 528 95.965ZM416 127.965C407.125 127.965 400 120.84 400 111.965S407.125 95.965 416 95.965S432 103.09 432 111.965S424.875 127.965 416 127.965Z" })
    ]
  }
));
DogLeashedDuotone.displayName = "DogLeashedDuotone";
var DogLeashed_default = DogLeashedDuotone;
