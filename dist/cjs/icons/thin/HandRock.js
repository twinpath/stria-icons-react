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
var HandRock_exports = {};
__export(HandRock_exports, {
  default: () => HandRock_default
});
module.exports = __toCommonJS(HandRock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandRockThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M394.281 91.422C387.938 91.422 381.625 92.609 375.625 94.891C367.656 74.734 348.031 60.953 325.719 60.953C314.156 60.953 303.125 64.656 294.063 71.297C288.281 47.875 267.094 30.469 241.906 30.469C233 30.469 224.313 32.719 216.563 36.953C209.469 15.438 189.188 0 165.719 0C136.094 0 112 24.094 112 53.719V175.625C112 180.047 115.594 183.625 120 183.625S128 180.047 128 175.625V53.719C128 32.922 144.906 16 165.719 16C185.344 16 201.781 31.438 203.156 51.141C203.414 55.347 206.971 58.598 211.152 58.598C218.283 58.598 222.325 46.469 241.906 46.469C262.719 46.469 279.625 63.391 279.625 84.187V89.453C279.625 91.92 281.512 97.439 287.62 97.439C290.254 97.439 292.756 96.163 294.281 93.875C301.312 83.281 313.062 76.953 325.719 76.953C343.844 76.953 359.406 89.891 362.719 107.703C363.265 110.536 365.848 114.228 370.604 114.228C375.696 114.228 380.262 107.422 394.281 107.422C415.094 107.422 432 124.344 432 145.141V259.781C432 328.355 360 364.365 360 373.719V503.609C360 508.031 363.594 511.609 368 511.609S376 508.031 376 503.609V377.922C396.812 363.219 448 320.797 448 259.781V145.141C448 115.516 423.906 91.422 394.281 91.422ZM85.875 333.578C62.156 316.281 48 288.453 48 259.156V192.609C48 180.953 53.219 170.094 61.781 163.219L92.469 142.641C94.763 141.101 95.999 138.571 95.999 135.992C95.999 131.48 92.317 127.987 87.98 127.987C86.446 127.987 84.897 128.431 83.531 129.359L52.312 150.328C39.406 160.656 32 176.062 32 192.609V259.156C32 293.547 48.625 326.203 76.656 346.672L128 381.469V504C128 508.422 131.594 512 136 512S144 508.422 144 504V377.234C144 374.578 142.688 372.109 140.5 370.609L85.875 333.578Z" })
  }
));
HandRockThin.displayName = "HandRockThin";
var HandRock_default = HandRockThin;
