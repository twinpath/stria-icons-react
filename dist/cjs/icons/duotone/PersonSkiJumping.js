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
var PersonSkiJumping_exports = {};
__export(PersonSkiJumping_exports, {
  default: () => PersonSkiJumping_default
});
module.exports = __toCommonJS(PersonSkiJumping_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkiJumpingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.715 190.199C508.506 177.111 496.102 168.291 483.012 170.5C469.92 172.709 461.1 185.111 463.309 198.199C466.61 217.5 457.309 237.1 441.206 246.301L12.948 466.699C1.182 472.809 -3.404 487.295 2.706 499.059C6.842 507.023 15.075 512.016 24.049 512C27.879 511.984 31.649 511.061 35.051 509.301L464.309 288.4C498.717 268.52 517.204 229.402 510.715 190.199ZM400.001 0C373.487 0 351.995 21.49 351.995 48S373.487 96 400.001 96S448.006 74.51 448.006 48S426.514 0 400.001 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M311.973 96.041H127.996C110.324 96.041 96 110.357 96 128.02S110.324 160 127.996 160H225.484L166.592 236.451C163.191 240.848 166.791 232.854 106.398 379.658C101.438 391.713 104.33 405.57 113.697 414.637L173.99 383.656L218.885 274.727L340.27 164.297C347.787 156.791 352.008 146.604 352 135.982C351.982 113.906 334.062 96.023 311.973 96.041Z" })
    ]
  }
));
PersonSkiJumpingDuotone.displayName = "PersonSkiJumpingDuotone";
var PersonSkiJumping_default = PersonSkiJumpingDuotone;
