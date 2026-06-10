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
var SwordLaserAlt_exports = {};
__export(SwordLaserAlt_exports, {
  default: () => SwordLaserAlt_default
});
module.exports = __toCommonJS(SwordLaserAlt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwordLaserAltDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.494 40.393L308.703 256.01H198L471.496 6.395C480.996 -2.355 495.746 -2.105 504.869 7.02C513.994 16.143 514.244 30.893 505.494 40.393Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M94.246 327.256L9.375 412.129C-3.125 424.627 -3.125 444.877 9.375 457.377L116.871 349.881L94.246 327.256ZM128.121 361.256L20.625 468.627L43.248 491.375L150.744 383.879L128.121 361.256ZM308.988 256.01H171.994C167.744 256.01 163.744 257.76 160.744 260.76L105.496 315.883L196.117 406.504L320.238 283.383C330.488 273.383 323.363 256.01 308.988 256.01ZM54.623 502.625C67.123 515.125 87.373 515.125 99.871 502.625L184.744 417.754L162.119 395.129L54.623 502.625Z" })
    ]
  }
));
SwordLaserAltDuotone.displayName = "SwordLaserAltDuotone";
var SwordLaserAlt_default = SwordLaserAltDuotone;
