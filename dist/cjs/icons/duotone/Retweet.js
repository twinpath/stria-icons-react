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
var Retweet_exports = {};
__export(Retweet_exports, {
  default: () => Retweet_default
});
module.exports = __toCommonJS(Retweet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RetweetDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.415 415.998H136C100.654 415.998 72 387.344 72 351.998V192.021H32C22.297 192.021 13.547 186.178 9.828 177.207S8.172 157.922 15.031 151.047L95.031 71.033C99.719 66.344 105.859 64 112 64S124.281 66.344 128.969 71.033L208.969 151.047C215.828 157.922 217.891 168.236 214.172 177.207S201.703 192.021 192 192.021H152V335.984H287.415C298.026 335.984 308.201 340.199 315.704 347.702L315.704 347.702C340.907 372.905 323.057 415.998 287.415 415.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592.471 360.953L512.471 440.967C507.783 445.656 501.643 448 495.502 448S483.221 445.656 478.533 440.967L398.533 360.953C391.674 354.076 389.611 343.764 393.33 334.793S405.799 319.977 415.502 319.977H455.502V176.014H320.087C309.477 176.014 299.301 171.799 291.798 164.296L291.798 164.296C266.595 139.093 284.445 96 320.087 96H471.502C506.848 96 535.502 124.654 535.502 160V319.977H575.502C585.205 319.977 593.955 325.822 597.674 334.793S599.33 354.076 592.471 360.953Z" })
    ]
  }
));
RetweetDuotone.displayName = "RetweetDuotone";
var Retweet_default = RetweetDuotone;
