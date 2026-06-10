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
var Campfire_exports = {};
__export(Campfire_exports, {
  default: () => Campfire_default
});
module.exports = __toCommonJS(Campfire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampfireThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 320.003C335.405 320.003 399.997 255.051 399.997 175.208C399.997 141.193 367.889 74.21 321.811 32.476C318.749 29.726 314.108 29.726 311.077 32.476C301.124 41.46 291.609 51.116 282.687 61.288C266.906 41.101 247.953 20.789 227.376 2.086C224.344 -0.695 219.657 -0.695 216.626 2.086C156.002 57.148 112.003 129.959 112.003 175.208C112.003 255.051 176.595 320.003 256 320.003ZM299.265 290.488C258.445 320.152 187.423 300.334 187.423 233.723C187.423 214.333 197.97 196.77 222.907 164.99C235.469 181.521 263.516 218.879 275.656 235.082C277.125 237.035 279.39 238.207 281.843 238.285C283.437 237.973 286.593 237.285 288.187 235.442L315.765 202.661C316.108 203.333 316.436 203.989 316.765 204.645C332.061 235.051 324.53 271.957 299.265 290.488ZM222 18.898C242.406 38.007 260.953 58.601 275.906 78.803C277.359 80.772 279.656 81.975 282.109 82.038C284.562 81.928 286.921 81.038 288.484 79.132C297.171 68.647 306.53 58.648 316.374 49.351C354.858 87.022 383.998 146.537 383.998 175.208C383.998 218.946 362.115 257.541 328.893 280.83C343.202 256.684 344.866 224.887 331.092 197.536C329.046 193.364 326.655 189.052 324.108 184.599C322.811 182.333 320.483 180.849 317.889 180.614C315.28 180.411 312.733 181.427 311.046 183.427L282.421 217.442C267.953 198.145 232.579 151.037 229.141 146.896C227.626 145.068 225.36 144.006 222.985 144.006C220.594 144.506 218.251 145.115 216.735 147.021C189.361 181.302 171.423 205.864 171.423 233.723C171.423 252.438 176.712 269.029 185.738 282.66C151.023 259.6 128.002 220.104 128.002 175.208C128.002 136.006 168.048 69.772 222 18.898ZM276.679 400.002L507.089 303.378C511.167 301.675 513.089 296.988 511.37 292.91C509.667 288.832 505.011 286.941 500.902 288.628L256 391.33L11.098 288.628C6.989 286.925 2.333 288.832 0.63 292.91C-1.089 296.988 0.833 301.675 4.911 303.378L235.321 400.002L4.911 496.625C0.833 498.328 -1.089 503.016 0.63 507.094C1.911 510.156 4.88 512 8.005 512C9.036 512 10.083 511.797 11.098 511.375L256 408.673L500.902 511.375C501.917 511.797 502.964 512 503.995 512C507.12 512 510.089 510.156 511.37 507.094C513.089 503.016 511.167 498.328 507.089 496.625L276.679 400.002Z" })
  }
));
CampfireThin.displayName = "CampfireThin";
var Campfire_default = CampfireThin;
