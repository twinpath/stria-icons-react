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
var ArrowDownLeftAndArrowUpRightToCenter_exports = {};
__export(ArrowDownLeftAndArrowUpRightToCenter_exports, {
  default: () => ArrowDownLeftAndArrowUpRightToCenter_default
});
module.exports = __toCommonJS(ArrowDownLeftAndArrowUpRightToCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownLeftAndArrowUpRightToCenterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M45.769 477.543L208.117 315.195V455.885C208.117 460.305 211.697 463.885 216.115 463.885C220.535 463.885 224.115 460.31 224.115 455.885V295.883C224.115 291.467 220.539 287.885 216.115 287.885H56.115C51.676 287.885 48.115 291.477 48.115 295.883C48.115 300.303 51.695 303.883 56.115 303.883H196.803L34.457 466.228C26.97 473.717 38.289 485.025 45.769 477.543ZM295.89 224.115H455.89C460.33 224.115 463.89 220.525 463.89 216.117C463.89 211.697 460.31 208.117 455.89 208.117H315.203L477.548 45.769C485.017 38.305 473.732 26.963 466.236 34.457L303.888 196.805V56.115C303.888 51.695 300.308 48.115 295.89 48.115C291.47 48.115 287.89 51.691 287.89 56.115V216.117C287.89 220.535 291.466 224.115 295.89 224.115Z" })
  }
));
ArrowDownLeftAndArrowUpRightToCenterThin.displayName = "ArrowDownLeftAndArrowUpRightToCenterThin";
var ArrowDownLeftAndArrowUpRightToCenter_default = ArrowDownLeftAndArrowUpRightToCenterThin;
