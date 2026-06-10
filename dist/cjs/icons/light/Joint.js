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
var Joint_exports = {};
__export(Joint_exports, {
  default: () => Joint_default
});
module.exports = __toCommonJS(Joint_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JointLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M591.955 352H263.318C173.76 352 85.949 374.824 8 418.049C-2.727 423.996 -2.727 440.004 8 445.951C85.949 489.176 173.76 512 263.318 512H591.955C618.465 512 639.955 490.51 639.955 464V400C639.955 373.49 618.465 352 591.955 352ZM263.318 480C189.443 480 116.943 463.5 50.693 432C110.818 403.375 176.193 387.875 243.068 385.125L324.318 480H263.318ZM366.568 480L284.318 384H400.318L482.568 480H366.568ZM607.955 464C607.955 472.836 600.793 480 591.955 480H524.818L442.568 384H591.955C600.793 384 607.955 391.164 607.955 400V464ZM454.346 156.812C490.424 183.844 511.955 226.938 511.955 272C511.955 280.844 519.111 288 527.955 288S543.955 280.844 543.955 272C543.955 216.906 517.643 164.281 473.564 131.188C437.486 104.156 415.955 61.062 415.955 16C415.955 7.156 408.799 0 399.955 0S383.955 7.156 383.955 16C383.955 71.094 410.268 123.719 454.346 156.812ZM550.346 156.812C586.424 183.844 607.955 226.938 607.955 272C607.955 280.844 615.111 288 623.955 288S639.955 280.844 639.955 272C639.955 216.906 613.643 164.281 569.564 131.188C533.486 104.156 511.955 61.062 511.955 16C511.955 7.156 504.799 0 495.955 0S479.955 7.156 479.955 16C479.955 71.094 506.268 123.719 550.346 156.812Z" })
  }
));
JointLight.displayName = "JointLight";
var Joint_default = JointLight;
