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
var Eggplant_exports = {};
__export(Eggplant_exports, {
  default: () => Eggplant_default
});
module.exports = __toCommonJS(Eggplant_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EggplantLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 16C512 7.473 505.134 0 496 0C491.906 0 487.812 1.562 484.687 4.688L458.587 30.787C444.917 21.473 428.427 16 410.673 16H304.005C286.333 16 272.005 30.326 272.005 48C272.005 57.361 273.521 66.375 276.318 74.809C185.691 146.49 123.753 177.076 100.763 186.076C31.934 214.647 0 275.951 0 337.356C0 478.474 129.155 512 172.562 512C230.241 512 280.802 498.682 385.808 339.088C407.738 305.502 426.914 271.629 445.08 237.623C451.197 239.02 457.47 240 464.005 240C481.679 240 496.005 225.672 496.005 208V101.334C496.005 83.576 490.529 67.086 481.21 53.414L507.312 27.312C510.437 24.188 512 20.094 512 16ZM359.076 321.5C267.622 460.497 226.808 480 172.562 480C122.751 480 77.716 454.301 52.091 411.254C17.628 353.354 22.558 253.193 112.429 215.875C130.505 208.797 194.326 179.789 292.332 102.84C302.236 114.561 315.052 123.748 329.875 128.799C338.394 153.799 358.208 173.611 383.207 182.133C389.203 199.729 400.884 214.631 415.941 224.959C397.759 258.693 379.07 290.879 359.076 321.5ZM464.005 208C434.552 208 410.673 184.121 410.673 154.666C381.218 154.666 357.339 130.787 357.339 101.334C327.884 101.334 304.005 77.455 304.005 48H410.673C440.128 48 464.005 71.877 464.005 101.334V208Z" })
  }
));
EggplantLight.displayName = "EggplantLight";
var Eggplant_default = EggplantLight;
