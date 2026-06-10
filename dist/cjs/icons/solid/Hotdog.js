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
var Hotdog_exports = {};
__export(Hotdog_exports, {
  default: () => Hotdog_default
});
module.exports = __toCommonJS(Hotdog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HotdogSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488.537 23.463C457.474 -7.725 406.824 -7.725 375.761 23.463L24.46 374.765C3.626 394.725 -4.732 424.416 2.628 452.36C9.988 480.305 31.695 502.012 59.64 509.372S117.275 508.374 137.235 487.54L488.537 136.239C519.725 105.176 519.725 54.526 488.537 23.463ZM438.761 118.399C419.175 137.985 401.335 140.979 386.989 143.474C374.015 145.72 364.658 147.342 352.308 159.692C339.957 172.043 338.336 181.399 336.09 194.373C333.595 208.72 330.601 226.559 311.015 246.145C291.429 265.731 273.589 268.725 259.243 271.22C246.269 273.466 236.912 275.088 224.562 287.438C212.211 299.789 210.59 309.145 208.344 322.119C205.849 336.466 202.855 354.305 183.269 373.891C163.683 393.477 145.843 396.471 131.497 398.966C118.523 401.212 109.166 402.834 96.816 415.184C90.578 421.422 80.473 421.422 74.236 415.184C67.998 408.947 67.998 398.842 74.236 392.604C93.822 373.018 111.661 370.024 126.008 367.529C138.982 365.283 148.338 363.662 160.689 351.311C173.039 338.961 174.661 329.604 176.907 316.63C179.402 302.284 182.396 284.444 201.982 264.858C221.568 245.272 239.407 242.278 253.754 239.783C266.728 237.537 276.084 235.916 288.435 223.565C300.785 211.215 302.407 201.858 304.653 188.884C307.148 174.538 310.142 156.698 329.728 137.112S367.153 114.532 381.5 112.037C394.474 109.791 403.83 108.17 416.181 95.819C422.418 89.582 432.523 89.582 438.761 95.819C444.999 102.057 444.999 112.162 438.761 118.399ZM32.444 321.495L322.492 31.447L311.015 19.845C286.065 -5.105 247.267 -6.727 224.437 16.103L17.099 223.44C-5.73 246.27 -4.108 285.068 20.842 310.018L32.444 321.495ZM480.553 189.508L190.505 479.556L201.982 491.158C226.932 516.109 265.73 517.73 288.56 494.901L456.519 326.941L460.662 322.798L495.897 287.563C518.727 264.733 517.105 225.935 492.155 200.985L480.553 189.508Z" })
  }
));
HotdogSolid.displayName = "HotdogSolid";
var Hotdog_default = HotdogSolid;
