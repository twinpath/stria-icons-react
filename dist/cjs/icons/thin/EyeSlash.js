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
var EyeSlash_exports = {};
__export(EyeSlash_exports, {
  default: () => EyeSlash_default
});
module.exports = __toCommonJS(EyeSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EyeSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.999 48C432.956 48 536.37 123.643 589.835 245.297C590.886 247.742 591.999 253.244 591.999 256C591.999 258.754 590.886 264.254 589.882 266.588C577.513 294.736 562.228 320.109 545.025 342.963L557.689 353.027C575.902 328.924 591.74 302.133 604.531 273.025C606.437 268.596 607.999 260.957 607.999 256C607.999 251.023 606.437 243.402 604.531 238.973C550.281 115.525 442.937 32 319.999 32C275.085 32 232.292 43.262 193.365 63.439L207.542 74.707C242.804 57.668 280.734 48 319.999 48ZM297.57 146.268L315.425 160.461C316.974 160.387 318.433 160 319.999 160C367.21 160 406.257 194.145 414.29 239.045L431.683 252.871C429.982 192.59 380.685 144 319.999 144C312.318 144 304.82 144.787 297.57 146.268ZM319.999 464C207.042 464 103.628 388.355 50.163 266.701C49.113 264.254 47.999 258.754 47.999 256C47.999 253.244 49.113 247.742 50.117 245.408C62.466 217.301 77.73 191.967 94.904 169.139L82.238 159.07C64.056 183.146 48.242 209.904 35.468 238.973C33.562 243.402 31.999 251.041 31.999 256C31.999 260.977 33.562 268.596 35.468 273.025C89.718 396.473 197.062 480 319.999 480C364.867 480 407.615 468.76 446.509 448.621L432.327 437.348C397.101 454.348 359.218 464 319.999 464ZM342.253 365.75L324.396 351.557C322.908 351.625 321.505 352 319.999 352C272.847 352 233.827 317.945 225.726 273.127L208.333 259.301C210.126 319.5 259.372 368 319.999 368C327.62 368 335.056 367.207 342.253 365.75ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
EyeSlashThin.displayName = "EyeSlashThin";
var EyeSlash_default = EyeSlashThin;
