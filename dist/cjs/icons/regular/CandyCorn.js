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
var CandyCorn_exports = {};
__export(CandyCorn_exports, {
  default: () => CandyCorn_default
});
module.exports = __toCommonJS(CandyCorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CandyCornRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.998 0C314.242 1.625 315.492 39.5 322.117 72.502C352.492 224.006 416.121 416.01 479.873 416.01H479.998C543.752 415.885 607.504 224.131 637.881 72.502C644.506 39.5 645.756 1.625 479.998 0ZM479.873 365.633C467.873 355.383 450.623 326.008 432.371 281.506C463.623 279.631 496.375 279.631 527.627 281.506C509.25 326.133 492 355.383 479.873 365.633ZM591.004 63.002C587.754 79.252 584.254 94.877 580.754 110.127C517 102.127 442.998 102.127 379.244 110.127C375.744 94.877 372.244 79.252 368.994 63.002C368.869 62.377 368.744 61.752 368.619 61.252C378.869 57 407.621 48.75 479.998 48C552.377 48.75 581.129 57 591.379 61.252C591.254 61.752 591.129 62.377 591.004 63.002ZM84.98 205.754C-31.148 324.258 -3.398 350.133 24.479 368.758C153.109 454.387 333.992 545.139 378.994 500.012H379.119C423.996 454.762 333.617 274.131 247.863 145.379C229.238 117.502 203.361 89.752 84.98 205.754ZM91.605 354.883C78.355 346.633 64.855 338.133 50.98 328.883C50.48 328.508 49.98 328.133 49.479 327.883C53.73 317.633 68.23 291.506 118.857 239.756C170.609 189.129 196.736 174.629 206.986 170.379C207.236 170.879 207.611 171.379 207.986 171.879C217.236 185.754 225.738 199.254 233.988 212.504C183.236 251.881 130.982 304.133 91.605 354.883ZM317.617 371.258C336.242 415.76 344.742 448.635 343.367 464.387C327.617 465.637 294.74 457.137 250.238 438.635C271.115 415.26 294.24 392.01 317.617 371.258Z" })
  }
));
CandyCornRegular.displayName = "CandyCornRegular";
var CandyCorn_default = CandyCornRegular;
