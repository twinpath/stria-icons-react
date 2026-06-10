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
var PhoneVolume_exports = {};
__export(PhoneVolume_exports, {
  default: () => PhoneVolume_default
});
module.exports = __toCommonJS(PhoneVolume_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneVolumeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M284.189 181.922C273.908 173.578 258.783 175.047 250.439 185.328C242.033 195.578 243.533 210.703 253.814 219.109C265.127 228.359 271.627 241.797 271.627 255.984C271.627 270.172 265.127 283.609 253.814 292.859C243.533 301.266 242.033 316.391 250.439 326.641C255.158 332.453 262.064 335.453 269.002 335.453C274.345 335.453 279.752 333.672 284.189 330.047C306.72 311.609 319.627 284.641 319.627 255.984S306.72 200.359 284.189 181.922ZM344.752 107.984C334.533 99.641 319.408 101.078 310.97 111.328C302.564 121.578 304.064 136.703 314.314 145.109C348.189 172.891 367.627 213.297 367.627 255.984S348.189 339.078 314.314 366.859C304.064 375.266 302.564 390.391 310.97 400.641C315.72 406.422 322.595 409.422 329.533 409.422C334.908 409.422 340.283 407.641 344.752 403.984C389.783 367.078 415.627 313.109 415.627 255.984S389.783 144.891 344.752 107.984ZM406.002 33.141C395.783 24.797 380.658 26.266 372.22 36.484C363.814 46.734 365.314 61.859 375.564 70.266C431.533 116.109 463.627 183.797 463.627 255.984S431.533 395.859 375.564 441.703C365.314 450.109 363.814 465.234 372.22 475.484C376.97 481.266 383.845 484.266 390.783 484.266C396.158 484.266 401.533 482.484 406.002 478.828C473.127 423.828 511.627 342.609 511.627 255.984S473.127 88.141 406.002 33.141Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M98.056 169.26C78.886 225.412 78.894 286.664 98.074 342.842L151.318 337.527C161.91 336.389 172.103 342.535 176.049 352.498L209.773 436.822C214.074 447.654 209.951 460.023 200.176 466.127L132.691 508.312C123.162 514.289 110.92 512.895 102.937 504.91C-34.309 367.666 -34.319 144.342 102.945 7.08C110.92 -0.895 123.162 -2.289 132.683 3.697L200.15 45.863C209.994 52 214.049 64.353 209.799 75.234L176.049 159.619C172.052 169.531 161.961 175.627 151.334 174.557L98.056 169.26Z" })
    ]
  }
));
PhoneVolumeDuotone.displayName = "PhoneVolumeDuotone";
var PhoneVolume_default = PhoneVolumeDuotone;
