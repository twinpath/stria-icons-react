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
var CatSpace_exports = {};
__export(CatSpace_exports, {
  default: () => CatSpace_default
});
module.exports = __toCommonJS(CatSpace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CatSpaceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M285.032 59.229L245.317 42.67L228.758 2.957C227.451 0.324 224.256 -0.752 221.621 0.557C220.58 1.072 219.737 1.916 219.219 2.957L202.656 42.67L162.947 59.229C160.313 60.549 159.246 63.756 160.566 66.391C161.082 67.42 161.918 68.254 162.947 68.77L202.656 85.33L219.219 125.041C220.526 127.676 223.719 128.752 226.354 127.447C227.397 126.93 228.242 126.084 228.758 125.041L245.317 85.33L285.032 68.77C287.666 67.449 288.733 64.244 287.413 61.609C286.897 60.58 286.061 59.744 285.032 59.229ZM448.003 0H448.001C359.635 0 288 71.635 288 160S359.635 320 448.001 320S608.002 248.365 608.002 160S536.369 0.002 448.003 0ZM544.001 176C544.001 229.02 501.021 272 448.001 272S352.001 229.02 352.001 176V48L416.001 112H480.001L544.001 48V176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M291.89 194.303V194.314C256.053 199.656 200.102 217.572 160 277.953V192C159.942 139.006 116.994 96.059 64 96C46.326 96 32 110.328 32 128C32 145.674 46.326 160 64 160C81.662 160.023 95.977 174.336 96 192V448C96.033 483.332 124.668 511.965 160 512H335.999C344.831 512.004 351.995 504.85 351.999 496.018V480C351.999 462.326 337.673 448 319.999 448H287.999L415.999 352V496C415.995 504.83 423.15 511.994 431.982 512H464C472.832 512.004 479.996 504.85 480 496.018V316.775C469.468 318.918 458.748 319.998 447.999 320C371.437 320 307.62 266.145 291.89 194.303ZM480 112H415.999L351.999 48V176C351.999 229.02 394.98 272 447.999 272S544 229.02 544 176V48L480 112ZM408.019 192H407.999C399.163 192 391.999 184.836 391.999 176S399.163 160 407.999 160C416.837 160 423.999 167.164 423.999 176C424.005 184.832 416.849 191.996 408.019 192ZM488.019 192H488C479.164 192 472 184.836 472 176S479.164 160 488 160S504 167.164 504 176C504.005 184.832 496.849 191.996 488.019 192Z" })
    ]
  }
));
CatSpaceDuotone.displayName = "CatSpaceDuotone";
var CatSpace_default = CatSpaceDuotone;
