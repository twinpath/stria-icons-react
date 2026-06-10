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
var Sausage_exports = {};
__export(Sausage_exports, {
  default: () => Sausage_default
});
module.exports = __toCommonJS(Sausage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SausageDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 64C362.981 64 320 106.981 320 160C320 248.22 248.22 320 160 320C106.981 320 64 362.981 64 416S106.981 512 160 512C354.288 512.116 511.884 354.708 512 160.42C512 160.28 512 160.14 512 160C512 106.981 469.019 64 416 64ZM160 400C151.163 400 144 392.836 144 384S151.163 368 160 368C274.69 368 368 274.69 368 160C368 151.163 375.163 144 384 144S400 151.163 400 160C400 292.34 292.34 400 160 400Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24.18 369C14.58 365.82 4.217 371.002 1 380.59C0.354 382.453 0.016 384.408 0 386.381V445.619C0.033 455.771 8.289 463.973 18.441 463.939C20.391 463.932 22.328 463.615 24.18 463L69.439 447.92C62.18 427.246 62.18 404.715 69.439 384.039L24.18 369ZM451.41 1C449.547 0.354 447.592 0.016 445.619 0H386.381C376.24 0.016 368.033 8.25 368.051 18.391C368.061 20.357 368.381 22.312 369 24.18L384.08 69.439C404.754 62.18 427.285 62.18 447.961 69.439L462.961 24.17C466.137 14.584 460.977 4.232 451.41 1ZM384 144C375.164 144 368 151.164 368 160C368 274.689 274.689 368 160 368C151.164 368 144 375.164 144 384S151.164 400 160 400C292.34 400 400 292.34 400 160C400 151.164 392.836 144 384 144Z" })
    ]
  }
));
SausageDuotone.displayName = "SausageDuotone";
var Sausage_default = SausageDuotone;
