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
var SquareA_exports = {};
__export(SquareA_exports, {
  default: () => SquareA_default
});
module.exports = __toCommonJS(SquareA_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareADuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM330.057 381.77C326.791 383.275 323.369 383.998 320.01 383.998C310.932 383.998 302.262 378.818 298.199 369.996L286.172 343.813H161.828L149.803 369.996C144.225 382.084 130.037 387.357 117.945 381.77C105.914 376.213 100.664 361.865 106.211 349.777L202.205 140.809C210.049 123.73 237.953 123.73 245.797 140.809L341.789 349.777C347.336 361.865 342.086 376.213 330.057 381.77ZM183.979 295.59H264.023L224 208.451L183.979 295.59Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M245.797 140.809C237.953 123.73 210.049 123.73 202.205 140.809L106.211 349.777C100.664 361.865 105.914 376.213 117.945 381.77C130.037 387.357 144.224 382.084 149.803 369.996L161.828 343.813H286.172L298.199 369.996C302.262 378.818 310.931 383.998 320.01 383.998C323.369 383.998 326.791 383.275 330.056 381.77C342.086 376.213 347.336 361.865 341.789 349.777L245.797 140.809ZM183.978 295.59L224 208.451L264.023 295.59H183.978Z" })
    ]
  }
));
SquareADuotone.displayName = "SquareADuotone";
var SquareA_default = SquareADuotone;
