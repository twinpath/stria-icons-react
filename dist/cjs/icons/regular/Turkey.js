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
var Turkey_exports = {};
__export(Turkey_exports, {
  default: () => Turkey_default
});
module.exports = __toCommonJS(Turkey_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurkeyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.438 242.484C492.643 249.936 488.354 257.531 484.582 264.863C511.783 305.047 528 348.523 528 384C528 434.625 488.752 464 288.004 464C288.002 464 288.002 464 288 464S287.998 464 287.996 464C87.248 464 48 434.625 48 384C48 294.186 151.375 153.309 276.275 144.814C291.693 140.074 304.855 138.545 317.594 137.203C335.25 135.344 353.516 133.422 384.562 121C385.828 120.494 386.912 119.906 388.15 119.385C356.914 104.873 323.273 96 288.004 96C288.002 96 288.002 96 288 96S287.998 96 287.996 96C128.998 96 0 269.125 0 384S128.998 512 287.996 512C287.998 512 287.998 512 288 512S288.002 512 288.004 512C447.002 512 576 498.875 576 384C576 334.715 552.135 274.76 512.465 222.303C507.473 228.086 502.457 234.676 497.438 242.484ZM567.031 79.17C589.393 43.287 562.23 -1.037 519.807 0.018C485.197 0.85 460.023 34.002 469.701 66.949C473.887 80.979 471.336 93.977 462.025 106.699C450.107 122.938 426.814 138.566 396.439 150.723C330.256 177.189 312.682 161.832 269.271 181.57C189.76 217.186 184.82 313.324 234.93 364.043C296.209 426.768 411.49 403.537 434.104 305.32C436.85 293.373 449.365 258.066 470.521 225.184C481.459 208.174 492.812 194.746 504.275 185.287C517.855 174.066 537.049 163.906 558.771 173.352C592.305 187.412 635.887 177.834 639.807 132.117C643.111 92.951 603.365 64.789 567.031 79.17Z" })
  }
));
TurkeyRegular.displayName = "TurkeyRegular";
var Turkey_default = TurkeyRegular;
