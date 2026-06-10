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
var Broom_exports = {};
__export(Broom_exports, {
  default: () => Broom_default
});
module.exports = __toCommonJS(Broom_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BroomLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M636.5 5.99C630.969 -0.867 620.971 -2.023 614.002 3.49L381.92 189.107L341.549 137.916C341.549 137.9 341.518 137.869 341.487 137.854C329.69 123.014 305.68 124.977 297.051 143.242L273.491 194.492C270.959 199.959 271.741 206.363 275.459 211.08L356.453 313.797C357.596 315.248 363.356 321.588 372.36 319.529L427.075 307.814C446.02 303.928 454.5 281.334 442.387 265.781L401.741 214.242L634 28.482C640.907 22.953 642 12.895 636.5 5.99ZM411.608 278.418L375.422 286.166L306.645 198.959L322.237 165.08L411.608 278.418ZM304.239 332.135C304.114 332.963 289.801 415.094 242.336 452.113C206.838 479.713 93.719 481.4 35.098 479.213C36.473 472.23 38.285 463.516 40.504 453.66L121.717 359.58C136.08 342.934 118.645 318.619 98.344 325.871L78.221 333.041C90.375 306.457 100.907 294.07 108.313 288.307C155.934 251.271 241.242 256.098 242.18 256.16C263.895 256.67 264.791 225.545 244.211 224.232C240.149 223.998 145.967 218.516 88.688 263.049C69.033 278.293 51.535 308.268 35.16 354.66C30.703 367.248 42.897 379.557 55.627 375.059L70.752 369.67L13.662 435.773C11.975 437.742 10.787 440.102 10.194 442.631C3.631 471.139 0.256 491.678 0.256 491.678C-1.738 503.52 8.36 509.797 15.006 510.234C21.442 510.641 44.723 512 74.971 512C135.655 512 224.43 506.58 261.991 477.34C319.395 432.588 335.174 341.258 335.799 337.4C339.223 316.635 307.778 311.137 304.239 332.135Z" })
  }
));
BroomLight.displayName = "BroomLight";
var Broom_default = BroomLight;
