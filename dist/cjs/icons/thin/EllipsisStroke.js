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
var EllipsisStroke_exports = {};
__export(EllipsisStroke_exports, {
  default: () => EllipsisStroke_default
});
module.exports = __toCommonJS(EllipsisStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EllipsisStrokeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 208C474.467 208 496 229.533 496 256S474.467 304 448 304S400 282.467 400 256S421.533 208 448 208M256 208C282.467 208 304 229.533 304 256S282.467 304 256 304S208 282.467 208 256S229.533 208 256 208M64 208C90.467 208 112 229.533 112 256S90.467 304 64 304S16 282.467 16 256S37.533 208 64 208M448 192C412.611 192 384 220.625 384 256S412.611 320 448 320S512 291.375 512 256S483.389 192 448 192L448 192ZM256 192C220.611 192 192 220.625 192 256S220.611 320 256 320S320 291.375 320 256S291.389 192 256 192L256 192ZM64 192C28.611 192 0 220.625 0 256S28.611 320 64 320S128 291.375 128 256S99.389 192 64 192L64 192Z" })
  }
));
EllipsisStrokeThin.displayName = "EllipsisStrokeThin";
var EllipsisStroke_default = EllipsisStrokeThin;
