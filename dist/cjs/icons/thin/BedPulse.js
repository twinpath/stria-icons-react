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
var BedPulse_exports = {};
__export(BedPulse_exports, {
  default: () => BedPulse_default
});
module.exports = __toCommonJS(BedPulse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedPulseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.75 80.004H347.062L392.844 171.578C394.219 174.297 396.969 176 400 176H400.344C403.469 175.859 406.25 173.891 407.438 170.969L464.813 27.521L488.844 75.582C490.188 78.285 492.969 80.004 496 80.004H632C636.406 80.004 640 76.426 640 72.004S636.406 64.006 632 64.006H500.938L471.156 4.43C469.75 1.617 467.5 -0.133 463.656 0.008C460.531 0.148 457.75 2.117 456.562 5.039L399.187 148.486L359.156 68.426C357.812 65.725 355.031 64.006 352 64.006C352 64.006 283.656 64.006 238.625 64.006C216.125 64.021 200.25 64.256 200.031 64.006C197.906 64.006 195.875 64.834 194.375 66.334C192.875 67.832 192 69.879 192 72.004C192 80.004 192 80.004 223.75 80.004ZM144 320C188.125 320 224 284.125 224 240S188.125 160 144 160S64 195.875 64 240S99.875 320 144 320ZM144 176C179.289 176 208 204.711 208 240S179.289 304 144 304S80 275.289 80 240S108.711 176 144 176ZM528 160H456C451.582 160 448 163.582 448 168S451.582 176 456 176H528C581.02 176 624 218.98 624 272V352H288V176H344C348.418 176 352 172.418 352 168S348.418 160 344 160H288C279.164 160 272 167.164 272 176V352H16V72C16 67.594 12.422 64 8 64S0 67.594 0 72V504C0 508.406 3.578 512 8 512S16 508.406 16 504V448H624V504C624 508.406 627.578 512 632 512S640 508.406 640 504V272C640 210.145 589.855 160 528 160ZM624 432H16V368H624V432Z" })
  }
));
BedPulseThin.displayName = "BedPulseThin";
var BedPulse_default = BedPulseThin;
