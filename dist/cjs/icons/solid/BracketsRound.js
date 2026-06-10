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
var BracketsRound_exports = {};
__export(BracketsRound_exports, {
  default: () => BracketsRound_default
});
module.exports = __toCommonJS(BracketsRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsRoundSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M145.875 90.54C160.469 80.728 164.406 60.916 154.625 46.26C144.812 31.542 124.969 27.573 110.25 37.385C105.75 40.385 0 112.54 0 256.005S105.75 471.625 110.25 474.625C115.688 478.25 121.844 480 127.906 480C138.188 480 148.281 475.031 154.469 465.844C164.312 451.251 160.437 431.376 145.875 421.47C142.531 419.189 64 364.378 64 256.005C64 147.758 142.375 92.947 145.875 90.54ZM401.75 37.385C387.062 27.604 367.344 31.542 357.531 46.166C347.688 60.76 351.563 80.634 366.125 90.54C369.469 92.822 448 147.633 448 256.005S369.469 419.189 366.25 421.376C351.531 431.189 347.562 451.032 357.375 465.75C363.531 475 373.688 480 384.031 480C390.125 480 396.281 478.25 401.75 474.625C406.25 471.625 512 399.471 512 256.005S406.25 40.385 401.75 37.385Z" })
  }
));
BracketsRoundSolid.displayName = "BracketsRoundSolid";
var BracketsRound_default = BracketsRoundSolid;
