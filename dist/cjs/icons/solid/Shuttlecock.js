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
const ShuttlecockSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.995 191.988H463.991C463.991 197.988 468.242 247.735 419.233 263.234L328.091 291.982L301.712 337.354L223.697 373.727L197.942 347.854L268.705 277.108L409.606 232.611C422.859 228.361 431.985 215.987 431.985 202.113V107.993C431.985 92.494 419.483 79.995 403.98 79.995H309.838C295.835 79.995 283.583 89.12 279.332 102.369L234.824 243.235L164.061 313.981L138.307 288.232L174.688 210.237L220.072 183.864L248.827 92.744C263.329 46.747 307.713 47.997 319.965 47.997V27.998C319.965 12.624 307.338 0 291.96 0H237.325C226.573 0 216.571 6.25 211.945 16.249L95.424 266.484L56.167 305.731L206.194 455.722L245.451 416.475L495.747 299.982C505.624 295.357 512 285.483 512 274.608V219.987C512 204.613 499.373 191.988 483.995 191.988ZM31.037 330.98C-10.346 372.352 -10.346 439.598 31.037 480.971S139.682 522.343 181.064 480.971L183.69 478.346L33.662 328.355L31.037 330.98Z" })
  }
));
ShuttlecockSolid.displayName = "ShuttlecockSolid";
var Shuttlecock_default = ShuttlecockSolid;
