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
var WaveSine_exports = {};
__export(WaveSine_exports, {
  default: () => WaveSine_default
});
module.exports = __toCommonJS(WaveSine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveSineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M638.911 278.24C632.864 297.254 576.681 464 467.204 464C371.963 464 332.138 357.697 296.999 263.906C267.324 184.627 233.688 94.77 172.794 94.77C116.708 94.77 67.307 186.021 47.792 247.34C43.917 259.602 32.732 263.951 24.332 263.951C21.801 263.951 19.354 263.582 17.652 263.006C11.135 261.209 5.834 257.045 2.729 251.279C-0.222 245.803 -0.798 239.559 1.09 233.736C7.135 214.725 63.323 48 172.794 48C268.037 48 307.862 154.303 342.999 248.096C372.674 327.375 406.309 417.23 467.204 417.23C523.288 417.23 572.689 325.965 592.206 264.635C596.075 252.4 607.324 248.059 615.783 248.059C618.255 248.059 620.646 248.41 622.345 248.971C628.769 250.74 634.208 255.014 637.27 260.697C640.222 266.172 640.798 272.418 638.911 278.24Z" })
  }
));
WaveSineRegular.displayName = "WaveSineRegular";
var WaveSine_default = WaveSineRegular;
