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
var PersonFromPortal_exports = {};
__export(PersonFromPortal_exports, {
  default: () => PersonFromPortal_default
});
module.exports = __toCommonJS(PersonFromPortal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonFromPortalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M150.625 191.064C141.047 178.611 142.613 161.705 152.828 150.471C140.258 61.793 112.414 0 80 0C35.816 0 0 114.613 0 255.996C0 397.377 35.816 511.99 80 511.99C105.25 511.99 127.734 474.465 142.398 415.988H128C110.355 415.967 96.059 401.67 96.037 384.027C96.016 366.354 110.326 352.01 128 351.988H154.133C158.09 320.145 160.049 288.084 160 255.996C160 235.777 159.191 216.203 157.805 197.336C155.104 195.627 152.682 193.512 150.625 191.064ZM368.002 0C341.492 0 320 21.49 320 48C320 48 320 48 320 48.002C320.002 74.51 341.49 96 368 96S416.002 74.512 416.002 48.002S394.512 0 368.002 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M209.65 317.473L194.838 351.988H127.963C110.289 352.01 95.979 366.354 96 384.027C96.022 401.67 110.32 415.969 127.963 415.988H205.4C224.607 416.014 241.973 404.57 249.525 386.912L258.307 366.379L247.65 360.082C230.93 350.092 217.67 335.223 209.65 317.473ZM479.963 223.986H435.932L409.869 170.736C397.369 145.189 374.4 126.518 348.088 119.799L277.025 98.656C248.861 91.83 219.123 98.133 196.15 115.799L156.525 146.205C142.502 156.957 139.85 177.041 150.604 191.064C161.355 205.088 181.439 207.738 195.463 196.986L235.15 166.58C242.807 160.689 252.588 158.58 260.4 160.439L275.088 164.814L237.65 252.207C225.061 281.789 236.309 316.123 263.963 332.52L348.9 382.693L321.463 470.412C316.166 487.254 325.527 505.201 342.369 510.498C342.381 510.5 342.391 510.504 342.4 510.508C359.221 515.822 377.166 506.494 382.482 489.674C382.496 489.629 382.512 489.582 382.525 489.537L414.15 388.475C420.051 367.541 411.189 345.25 392.525 334.082L331.275 297.939L362.588 219.658L382.869 261.098C390.975 277.506 407.662 287.918 425.963 287.988H479.963C497.637 287.988 511.963 273.66 511.963 255.986C511.963 238.314 497.637 223.986 479.963 223.986Z" })
    ]
  }
));
PersonFromPortalDuotone.displayName = "PersonFromPortalDuotone";
var PersonFromPortal_default = PersonFromPortalDuotone;
