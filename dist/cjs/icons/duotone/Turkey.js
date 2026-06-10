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
const TurkeyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488.705 193.92C542.482 252.062 576 325.533 576 384C576 498.867 447.062 512 288 512S0 498.867 0 384C0 269.131 128.938 96.004 288 96C333.934 96.002 377.195 110.734 415.725 134.039C409.283 136.75 402.512 139.322 395.277 141.637C327.383 163.344 310.941 146.779 266.24 163.389C184.404 193.275 172.658 288.822 219.045 342.967C275.723 409.879 392.361 394.883 421.883 298.518C425.469 286.795 440.457 252.465 463.893 221.164C472.129 210.156 480.426 201.482 488.705 193.92Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M639.351 140.338C632.199 185.662 588.046 192.125 555.595 175.721C534.597 164.76 514.732 173.533 500.39 183.762C488.285 192.385 476.007 204.973 463.892 221.164C440.456 252.465 425.468 286.795 421.882 298.518C392.361 394.883 275.722 409.879 219.044 342.967C172.658 288.822 184.404 193.275 266.24 163.389C310.941 146.779 327.382 163.344 395.277 141.637C426.437 131.666 450.779 117.729 463.82 102.375C474.009 90.346 477.474 77.561 474.294 63.27C466.978 29.719 494.439 -1.564 529.021 0.061C571.414 2.018 595.363 48.156 570.513 82.363C607.775 70.594 645.425 101.504 639.351 140.338Z" })
    ]
  }
));
TurkeyDuotone.displayName = "TurkeyDuotone";
var Turkey_default = TurkeyDuotone;
