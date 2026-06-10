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
const BedPulseLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 96H342.109L385.688 183.156C388.406 188.594 393.953 192 400 192H400.672C406.953 191.719 412.516 187.781 414.859 181.938L465.625 55.031L481.688 87.156C484.406 92.562 489.938 96 496 96H624C632.844 96 640 88.844 640 80S632.844 64 624 64H505.891L478.312 8.844C475.5 3.219 470.156 -0.5 463.328 0C457.047 0.281 451.484 4.219 449.141 10.062L398.375 136.969L366.312 72.844C363.594 67.438 358.062 64 352 64H208C199.156 64 192 71.156 192 80S199.156 96 208 96ZM144 320C188.125 320 224 284.125 224 240S188.125 160 144 160S64 195.875 64 240S99.875 320 144 320ZM144 192C170.5 192 192 213.5 192 240S170.5 288 144 288S96 266.5 96 240S117.5 192 144 192ZM528 160H480C471.164 160 464 167.162 464 176C464 184.836 471.164 192 480 192H528C572.184 192 608 227.816 608 272V352H288V192H320C328.836 192 336 184.836 336 176C336 167.162 328.836 160 320 160H272C263.164 160 256 167.162 256 176V352H32V80.971C32 72.992 26.6 65.551 18.732 64.229C8.74 62.551 0 70.303 0 80V495.029C0 503.008 5.4 510.447 13.268 511.77C23.26 513.449 32 505.695 32 496V448H608V495.029C608 503.008 613.4 510.447 621.268 511.77C631.26 513.449 640 505.695 640 496V272C640 210.145 589.855 160 528 160ZM608 416H32V384H608V416Z" })
  }
));
BedPulseLight.displayName = "BedPulseLight";
var BedPulse_default = BedPulseLight;
