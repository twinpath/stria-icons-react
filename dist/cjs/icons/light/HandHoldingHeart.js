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
var HandHoldingHeart_exports = {};
__export(HandHoldingHeart_exports, {
  default: () => HandHoldingHeart_default
});
module.exports = __toCommonJS(HandHoldingHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingHeartLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M275.193 250.467C282.191 257.844 293.689 257.844 300.688 250.467L409.664 136.316C441.156 103.184 439.406 48.17 404.039 17.662C368.672 -12.969 322.684 0.658 299.188 25.289L287.941 36.918L276.818 25.289C253.822 1.158 207.584 -13.344 171.967 17.662C136.725 48.17 134.725 103.184 166.342 136.316L275.193 250.467ZM192.336 41.793C213.207 23.789 240.576 33.166 254.197 47.545L287.941 82.803L321.684 47.545C335.18 33.416 362.674 23.789 383.545 41.793C407.289 62.424 403.664 96.307 386.918 113.936L287.941 217.709L188.963 113.936C172.217 96.557 168.717 62.424 192.336 41.793ZM558.225 333.607C548.725 324.988 536.225 320.24 523.102 320.24C510.602 320.24 498.227 324.488 488.479 332.357L427.025 381.566C425.098 383.111 422.701 383.951 420.23 383.951H378.607C383.232 374.332 385.107 363.215 383.357 351.721C379.357 323.738 353.734 304 325.609 304H181.242C160.492 304 140.244 310.746 123.744 323.238L85.246 351.971H16C7.199 351.971 0 359.166 0 367.961S7.199 383.951 16 383.951H95.996L142.869 348.723C153.992 340.479 167.492 335.98 181.242 335.98H327.984C341.234 335.98 351.984 346.725 351.984 359.967S341.234 383.951 327.984 383.951H239.99C231.24 383.951 223.99 391.197 223.99 399.941C223.99 408.687 231.24 415.934 239.99 415.934H420.23C429.855 415.934 439.23 412.686 446.855 406.688L508.477 357.469C512.727 354.096 517.977 352.221 523.102 352.221C528.102 352.221 532.977 353.971 536.85 357.469C546.975 366.588 546.225 381.953 535.975 390.074L435.23 470.65C427.646 476.715 418.225 480.02 408.512 480.02H16C7.199 480.02 0 487.215 0 496.01S7.199 512 16 512H408.48C425.48 512 441.855 506.129 455.104 495.635L555.975 414.934C568.225 405.189 575.475 390.572 575.973 374.957C576.473 359.342 569.973 344.227 558.225 333.607Z" })
  }
));
HandHoldingHeartLight.displayName = "HandHoldingHeartLight";
var HandHoldingHeart_default = HandHoldingHeartLight;
