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
var Poop_exports = {};
__export(Poop_exports, {
  default: () => Poop_default
});
module.exports = __toCommonJS(Poop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PoopDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.141 311V313C480.161 334.886 470.067 355.555 452.793 369C448.939 368.347 445.038 368.013 441.129 368H71.012C67.104 368.013 63.202 368.347 59.349 369C42.074 355.555 31.98 334.886 32 313V311C32 271.788 63.798 240 103.022 240H409.119C448.343 240 480.141 271.788 480.141 311Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M393.945 240C420.595 216.975 423.529 176.711 400.495 150.068C388.31 135.973 370.568 127.91 351.931 128H346.048C351.947 111.752 353.452 94.236 350.409 77.221C341.034 26.076 291.972 -7.797 240.806 1.551C266.589 37.287 258.513 87.15 222.765 112.926C209.116 122.768 192.704 128.045 175.876 128H159.87C124.646 127.83 95.952 156.238 95.782 191.451C95.693 210.082 103.757 227.818 117.857 240H393.945ZM451.366 369.152L451.763 368.84C448.189 368.285 444.575 368.006 440.958 368H70.843C67.238 368.006 63.64 368.287 60.079 368.84C60.218 368.949 60.349 369.07 60.499 369.17C21.296 375.467 -5.378 412.34 0.921 451.531C6.517 486.354 36.562 511.971 71.843 512H439.958C479.663 512.082 511.917 479.971 511.999 440.279C512.073 404.873 486.341 374.699 451.366 369.152Z" })
    ]
  }
));
PoopDuotone.displayName = "PoopDuotone";
var Poop_default = PoopDuotone;
