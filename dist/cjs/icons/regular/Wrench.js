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
var Wrench_exports = {};
__export(Wrench_exports, {
  default: () => Wrench_default
});
module.exports = __toCommonJS(Wrench_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WrenchRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.496 117.119C504.496 104.994 495.121 95.369 482.996 91.994C470.871 88.743 457.871 92.119 448.997 100.994L390.372 159.62L357.872 154.244L352.497 121.869L411.247 63.118C419.997 54.243 423.497 41.243 420.122 29.243C416.747 17.117 406.997 7.742 394.872 4.617C341.747 -8.508 286.873 6.742 248.248 45.368C210.623 82.993 195.623 136.744 207.498 188.62L24 371.998C8.5 387.498 0 408.123 0 429.999S8.5 472.499 24 488S60.125 512 81.999 512C103.874 512 124.499 503.5 139.999 488L323.372 304.747C375.122 316.622 428.997 301.622 466.871 263.746C504.871 225.746 520.496 169.495 507.496 117.119ZM432.872 229.871C404.372 258.371 362.622 267.996 323.872 255.121L309.748 250.371L105.999 453.999C93.249 466.874 70.749 466.874 57.999 453.999C51.5 447.624 48 439.124 48 429.999C48 420.999 51.5 412.373 57.999 405.998L261.873 202.245L257.248 188.12C244.373 149.244 253.997 107.494 282.248 79.243C302.623 58.993 329.372 47.993 357.247 47.993H358.372L301.123 105.369L316.247 195.87L406.747 210.995L464.121 153.744C464.496 181.995 453.496 209.245 432.872 229.871ZM87.999 407.998C79.124 407.998 71.999 415.124 71.999 423.999C71.999 432.874 79.124 439.999 87.999 439.999S103.999 432.874 103.999 423.999C103.999 415.124 96.874 407.998 87.999 407.998Z" })
  }
));
WrenchRegular.displayName = "WrenchRegular";
var Wrench_default = WrenchRegular;
