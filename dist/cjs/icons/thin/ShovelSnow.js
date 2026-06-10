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
var ShovelSnow_exports = {};
__export(ShovelSnow_exports, {
  default: () => ShovelSnow_default
});
module.exports = __toCommonJS(ShovelSnow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShovelSnowThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M162.343 413.639C163.905 415.201 165.952 415.982 167.999 415.982S172.093 415.201 173.655 413.639L269.655 317.621C272.78 314.494 272.78 309.432 269.655 306.307C266.53 303.18 261.468 303.18 258.343 306.307L162.343 402.324C159.218 405.449 159.218 410.512 162.343 413.639ZM509.655 87.891L424.046 2.25C421.046 -0.75 415.733 -0.75 412.733 2.25L378.358 36.693C365.421 49.604 358.28 66.824 358.28 85.141C358.28 100.729 363.724 115.35 373.249 127.367L270.858 229.777L210.245 169.119C204.038 162.975 195.856 159.811 187.651 159.811C180.821 159.811 173.978 162.002 168.241 166.494L12.349 286.842C-2.778 298.602 -4.278 320.994 9.349 334.506L177.366 502.645C183.647 508.932 191.763 512 199.835 512C209.278 512 218.663 507.803 224.997 499.645L345.386 343.639C355.263 331.004 354.013 313.111 342.761 301.729L282.169 241.094L384.585 138.658C396.343 147.816 411.212 153.184 426.827 153.184C445.233 153.184 462.874 146.059 475.233 133.619L509.655 99.205C511.155 97.705 511.999 95.674 511.999 93.549S511.155 89.391 509.655 87.891ZM331.382 312.98C337.005 318.668 337.605 327.611 332.72 333.859L212.358 489.83C209.317 493.748 204.751 495.996 199.835 495.996C195.649 495.996 191.688 494.34 188.683 491.332L20.612 323.143C17.382 319.939 15.753 315.666 16.028 311.107C16.308 306.469 18.487 302.336 22.124 299.51L178.103 179.096C180.845 176.949 184.147 175.812 187.651 175.812C191.915 175.812 195.94 177.477 198.929 180.432L331.382 312.98ZM463.921 122.303C463.921 122.303 463.905 122.303 463.905 122.334C445.124 141.213 408.483 141.213 389.702 122.303C379.749 112.396 374.28 99.174 374.28 85.141S379.749 57.916 389.671 48.01L418.39 19.223L492.687 93.549L463.921 122.303ZM98.343 338.312C95.218 341.437 95.218 346.5 98.343 349.627C99.905 351.189 101.952 351.971 103.999 351.971S108.093 351.189 109.655 349.627L205.655 253.609C208.78 250.482 208.78 245.42 205.655 242.295C202.53 239.168 197.468 239.168 194.343 242.295L98.343 338.312Z" })
  }
));
ShovelSnowThin.displayName = "ShovelSnowThin";
var ShovelSnow_default = ShovelSnowThin;
