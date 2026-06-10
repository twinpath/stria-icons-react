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
var PowerOff_exports = {};
__export(PowerOff_exports, {
  default: () => PowerOff_default
});
module.exports = __toCommonJS(PowerOff_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PowerOffDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 288H256C273.673 288 288 273.673 288 256V32C288 14.327 273.673 0 256 0H256C238.327 0 224 14.327 224 32V256C224 273.673 238.327 288 256 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M401.796 65.328C386.397 53.545 363.884 58.824 354.563 75.824L346.755 90.064C339.216 103.814 342.968 120.76 355.262 130.494C393.257 160.57 415.999 206.625 415.999 256C415.999 358.168 319.723 438.289 213.135 410.396C165.19 397.85 125.106 361.961 107.274 315.721C80.35 245.891 103.565 172.719 156.542 130.646C168.897 120.834 172.811 103.869 165.225 90.033L157.448 75.848C148.104 58.807 125.538 53.582 110.11 65.4C37.612 120.937 0.8 214.742 21.915 309.322C44.667 411.238 134.917 488.242 239.094 495.416C379.053 505.055 495.999 393.936 495.999 256C495.999 180.592 460.639 110.359 401.796 65.328Z" })
    ]
  }
));
PowerOffDuotone.displayName = "PowerOffDuotone";
var PowerOff_default = PowerOffDuotone;
