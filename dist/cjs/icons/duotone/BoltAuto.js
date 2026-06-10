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
var BoltAuto_exports = {};
__export(BoltAuto_exports, {
  default: () => BoltAuto_default
});
module.exports = __toCommonJS(BoltAuto_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoltAutoDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M373.054 280.086L117.066 504.078C111.066 509.344 103.535 512 96.005 512C89.411 512 82.818 509.984 77.193 505.891C65.1 497.11 60.694 481.126 66.6 467.392L143.477 288.008H32.008C18.664 288.008 6.728 279.743 2.04 267.259C-2.647 254.79 0.915 240.713 10.946 231.932L266.934 7.94C278.183 -1.951 294.745 -2.654 306.807 6.127C318.9 14.908 323.306 30.892 317.4 44.626L240.523 224.01H351.992C365.336 224.01 377.272 232.276 381.96 244.759C386.647 257.228 383.085 271.305 373.054 280.086Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M572.614 465.312L492.621 304.358C481.78 282.546 446.221 282.546 435.379 304.358L355.387 465.312C347.481 481.218 353.887 500.55 369.698 508.503C385.571 516.425 404.741 509.979 412.631 494.104L419.786 479.71H508.215L515.37 494.104C521.543 506.53 539.344 517.976 558.303 508.503C574.114 500.55 580.52 481.218 572.614 465.312ZM447.784 423.374L464 390.745L480.217 423.374H447.784Z" })
    ]
  }
));
BoltAutoDuotone.displayName = "BoltAutoDuotone";
var BoltAuto_default = BoltAutoDuotone;
