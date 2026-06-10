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
var Drumstick_exports = {};
__export(Drumstick_exports, {
  default: () => Drumstick_default
});
module.exports = __toCommonJS(Drumstick_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumstickSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 169.222C512 212.496 495.503 255.78 462.525 288.825C427.032 324.323 384.041 351.946 320.054 351.946H234.196L193.704 392.568C187.602 398.671 184.781 406.537 184.781 414.694C184.781 428.38 192.021 432.92 192.021 451.708C192.021 485.392 164.571 512 131.654 512C116.075 512 100.637 505.977 88.974 494.312C77.488 482.73 72.173 467.885 72.173 452.877C72.173 447.963 72.743 443.031 73.852 438.19C69.012 439.3 64.074 439.87 59.151 439.87C16.905 439.87 0 403.144 0 380.285C0 368.824 3.27 357.304 9.99 347.196C21.414 329.786 40.535 320.006 60.336 320.006C79.327 320.006 83.372 327.247 97.379 327.247C105.56 327.247 113.445 324.426 119.468 318.323L160.085 277.826V191.956C160.085 127.961 187.705 84.963 223.198 49.591C256.254 16.53 299.558 0 342.846 0S429.407 16.53 462.4 49.591C495.472 82.604 512 125.908 512 169.222Z " })
  }
));
DrumstickSolid.displayName = "DrumstickSolid";
var Drumstick_default = DrumstickSolid;
