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
var Shuttlecock_exports = {};
__export(Shuttlecock_exports, {
  default: () => Shuttlecock_default
});
module.exports = __toCommonJS(Shuttlecock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShuttlecockDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M31.037 330.98C-10.346 372.352 -10.346 439.598 31.037 480.971S139.682 522.343 181.064 480.971L206.254 455.782L56.226 305.791L31.037 330.98Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.828 191.988H463.825C463.825 197.988 468.075 247.735 419.066 263.234L327.925 291.982L301.545 337.354L223.531 373.727L197.776 347.854L268.539 277.108L409.44 232.611C422.692 228.361 431.819 215.987 431.819 202.113V107.993C431.819 92.494 419.317 79.995 403.814 79.995H309.671C295.669 79.995 283.417 89.12 279.166 102.369L234.658 243.235L163.895 313.981L138.14 288.232L174.522 210.237L219.905 183.864L248.66 92.744C263.163 46.747 307.546 47.997 319.798 47.997V27.998C319.798 12.624 307.171 0 291.793 0H237.158C226.406 0 216.404 6.25 211.779 16.249L95.257 266.484L56 305.731L206.027 455.722L245.285 416.475L495.581 299.982C505.457 295.357 511.833 285.483 511.833 274.608V219.987C511.833 204.612 499.206 191.988 483.828 191.988Z" })
    ]
  }
));
ShuttlecockDuotone.displayName = "ShuttlecockDuotone";
var Shuttlecock_default = ShuttlecockDuotone;
