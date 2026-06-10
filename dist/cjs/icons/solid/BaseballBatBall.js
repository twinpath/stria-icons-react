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
const BaseballBatBallSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M57.896 397.188C47.506 382.891 27.49 379.734 13.193 390.109C-1.104 400.5 -4.276 420.516 6.115 434.813L52.631 498.813C58.896 507.422 68.646 512 78.553 512C85.068 512 91.662 510.016 97.334 505.891C111.631 495.5 114.803 475.484 104.412 461.187L57.896 397.188ZM496.131 352C452.006 352 416.381 387.75 416.381 432S452.006 512 496.131 512S576.006 476.25 576.006 432S540.256 352 496.131 352ZM627.287 60.178L603.662 27.678C581.037 -3.447 538.912 -8.197 510.037 12.803L307.787 159.678C262.162 192.803 220.412 230.928 183.412 273.428C159.189 301.305 124.228 337.414 79.918 373.049L136.258 450.566C190.045 415.176 235.412 395.273 263.412 383.303C315.287 361.303 364.662 333.428 410.287 300.303L612.537 153.553C642.287 131.803 648.912 90.053 627.287 60.178Z" })
  }
));
BaseballBatBallSolid.displayName = "BaseballBatBallSolid";
var BaseballBatBall_default = BaseballBatBallSolid;
