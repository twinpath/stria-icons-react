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
var AudioDescription_exports = {};
__export(AudioDescription_exports, {
  default: () => AudioDescription_default
});
module.exports = __toCommonJS(AudioDescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AudioDescriptionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M170.836 280H213.164L192 237.672L170.836 280ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM274.719 349.469C271.281 351.188 267.625 352 264.031 352C255.219 352 246.75 347.141 242.531 338.734L233.164 320H150.836L141.469 338.734C135.562 350.594 121.156 355.438 109.281 349.469C97.406 343.531 92.594 329.125 98.531 317.266L170.531 173.266C178.656 157.016 205.344 157.016 213.469 173.266L285.469 317.266C291.406 329.125 286.594 343.531 274.719 349.469ZM384 352H328C314.75 352 304 341.25 304 328V184C304 170.75 314.75 160 328 160H384C436.938 160 480 203.062 480 256S436.938 352 384 352ZM384 208H352V304H384C410.469 304 432 282.469 432 256S410.469 208 384 208Z" })
  }
));
AudioDescriptionSolid.displayName = "AudioDescriptionSolid";
var AudioDescription_default = AudioDescriptionSolid;
