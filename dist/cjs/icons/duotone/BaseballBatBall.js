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
var BaseballBatBall_exports = {};
__export(BaseballBatBall_exports, {
  default: () => BaseballBatBall_default
});
module.exports = __toCommonJS(BaseballBatBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BaseballBatBallDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.624 432C575.624 476.25 539.874 512 495.749 512S416 476.25 416 432S451.625 352 495.749 352S575.624 387.75 575.624 432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M57.896 397.188C47.505 382.891 27.49 379.734 13.193 390.109C-1.104 400.5 -4.276 420.516 6.115 434.813L52.63 498.813C58.896 507.422 68.646 512 78.552 512C85.067 512 91.661 510.016 97.333 505.891C111.63 495.5 114.802 475.484 104.411 461.187L57.896 397.188ZM627.281 60.178L603.657 27.678C581.032 -3.447 538.907 -8.197 510.032 12.803L307.784 159.678C262.16 192.803 220.41 230.928 183.41 273.428C159.188 301.305 124.227 337.414 79.917 373.049L136.256 450.566C190.043 415.176 235.41 395.273 263.41 383.303C315.284 361.303 364.659 333.428 410.283 300.303L612.532 153.553C642.281 131.803 648.906 90.053 627.281 60.178Z" })
    ]
  }
));
BaseballBatBallDuotone.displayName = "BaseballBatBallDuotone";
var BaseballBatBall_default = BaseballBatBallDuotone;
