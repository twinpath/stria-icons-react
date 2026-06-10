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
const BracketsRoundDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384.042 480C373.698 480 363.542 475 357.386 465.75C347.573 451.032 351.542 431.189 366.261 421.376C369.479 419.189 448.011 364.378 448.011 256.005S369.479 92.822 366.136 90.54C351.573 80.634 347.698 60.76 357.542 46.166C367.354 31.542 387.073 27.604 401.761 37.385C406.261 40.385 512.011 112.54 512.011 256.005S406.261 471.625 401.761 474.625C396.292 478.25 390.136 480 384.042 480Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M127.906 480C121.844 480 115.688 478.25 110.25 474.625C105.75 471.625 0 399.471 0 256.005S105.75 40.385 110.25 37.385C124.969 27.573 144.812 31.542 154.625 46.26C164.406 60.916 160.469 80.728 145.875 90.54C142.375 92.947 64 147.758 64 256.005C64 364.378 142.531 419.189 145.875 421.47C160.438 431.376 164.313 451.251 154.469 465.844C148.281 475.031 138.188 480 127.906 480Z" })
    ]
  }
));
BracketsRoundDuotone.displayName = "BracketsRoundDuotone";
var BracketsRound_default = BracketsRoundDuotone;
