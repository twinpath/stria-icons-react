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
var LassoSparkles_exports = {};
__export(LassoSparkles_exports, {
  default: () => LassoSparkles_default
});
module.exports = __toCommonJS(LassoSparkles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LassoSparklesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 424H504V368C504 363.594 500.406 360 496 360S488 363.594 488 368V424H432C427.594 424 424 427.594 424 432S427.594 440 432 440H488V496C488 500.406 491.594 504 496 504S504 500.406 504 496V440H560C564.406 440 568 436.406 568 432S564.406 424 560 424ZM264 80C264 84.406 267.594 88 272 88H328V144C328 148.406 331.594 152 336 152S344 148.406 344 144V88H400C404.406 88 408 84.406 408 80S404.406 72 400 72H344V16C344 11.594 340.406 8 336 8S328 11.594 328 16V72H272C267.594 72 264 75.594 264 80ZM576 175.955C576 101.598 500.43 38.182 393.775 12.4C388.807 11.199 384 15.055 384 20.168C384 23.834 386.553 26.98 390.119 27.836C489.58 51.652 560 108.988 560 175.955C560 264.189 437.982 335.977 288 335.977C138.02 335.977 16 264.189 16 175.955C16 89.264 133.793 18.447 280.166 16C284.5 15.928 288 12.455 288 8.119V7.988C288 3.561 284.352 -0.074 279.924 0C124.602 2.615 0 80.391 0 175.955C0 244.816 64.842 304.277 159.105 333.203C193.186 345.232 216 376.537 216 412.018C216 458.336 177.344 495.998 129.812 495.998H40C35.578 495.998 32 499.592 32 503.998C32 508.406 35.578 512 40 512H129.812C186.156 512 232 467.15 232 412.018C232 386.291 221.836 362.48 204.889 344.463C231.217 349.307 259.088 351.979 288 351.979C447.059 351.979 576 273.172 576 175.955Z" })
  }
));
LassoSparklesThin.displayName = "LassoSparklesThin";
var LassoSparkles_default = LassoSparklesThin;
