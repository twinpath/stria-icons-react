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
var Walker_exports = {};
__export(Walker_exports, {
  default: () => Walker_default
});
module.exports = __toCommonJS(Walker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WalkerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.986 448C447.986 483.346 419.335 512 383.993 512S320 483.346 320 448C320 412.652 348.651 384 383.993 384S447.986 412.652 447.986 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.953 0H190.592C143.722 -0.125 103.602 33.75 95.977 80L0.238 487.75C-1.262 496.5 4.487 504.75 13.236 506.25L44.733 511.75C53.482 513.25 61.731 507.5 63.231 498.75L127.724 224H351.95V392.91C361.408 387.391 372.266 384 384.007 384C395.699 384 406.51 387.367 415.943 392.844V96C415.943 43 372.948 0 319.953 0ZM351.95 160H142.847L159.096 90.75C161.595 75.25 174.969 64 190.592 64H319.953C337.576 64 351.95 78.375 351.95 96V160Z" })
    ]
  }
));
WalkerDuotone.displayName = "WalkerDuotone";
var Walker_default = WalkerDuotone;
