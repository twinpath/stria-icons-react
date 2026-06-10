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
var GamepadModern_exports = {};
__export(GamepadModern_exports, {
  default: () => GamepadModern_default
});
module.exports = __toCommonJS(GamepadModern_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GamepadModernSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M538.5 480C488.813 480 444.719 449.936 429 405.357L421.5 383.997H218.5L211 405.357C195.281 449.936 151.188 480 101.5 480C38.813 480 -8.906 426.733 1.406 368.215L34.781 156.614C43.625 106.346 83.156 65.845 135.5 53.485C185.719 41.625 268.375 32 320 32C371.594 32 454.25 41.625 504.5 53.485H504.563C556.813 65.845 596.375 106.362 605.219 156.614L638.594 368.215C648.906 426.733 601.188 480 538.5 480ZM280 211.991C280 205.365 274.625 199.99 268 199.99H216V147.988C216 141.363 210.625 135.988 204 135.988H180C173.375 135.988 168 141.363 168 147.988V199.99H116C109.375 199.99 104 205.365 104 211.991V235.991C104 242.617 109.375 247.992 116 247.992H168V299.994C168 306.619 173.375 311.994 180 311.994H204C210.625 311.994 216 306.619 216 299.994V247.992H268C274.625 247.992 280 242.617 280 235.991V211.991ZM472 271.993C472 249.914 454.094 231.991 432 231.991S392 249.914 392 271.993C392 294.072 409.906 311.994 432 311.994S472 294.072 472 271.993ZM536 175.989C536 153.911 518.094 135.988 496 135.988S456 153.911 456 175.989S473.906 215.991 496 215.991S536 198.068 536 175.989Z" })
  }
));
GamepadModernSolid.displayName = "GamepadModernSolid";
var GamepadModern_default = GamepadModernSolid;
