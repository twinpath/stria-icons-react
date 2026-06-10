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
var GolfClub_exports = {};
__export(GolfClub_exports, {
  default: () => GolfClub_default
});
module.exports = __toCommonJS(GolfClub_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GolfClubLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.15 1.695C495.229 -2.273 485.65 0.977 481.682 8.852L295.277 381.656L58.406 329.031C44.156 325.844 29.375 329.281 17.953 338.438C6.547 347.594 0 361.25 0 375.906V464C0 490.469 21.531 512 48 512H255.996C262.059 512 267.59 508.562 270.309 503.156L318.152 407.469C318.262 407.281 318.355 407.062 318.449 406.875L510.307 23.164C514.26 15.258 511.057 5.664 503.15 1.695ZM246.107 480H48C39.172 480 32 472.812 32 464H80C88.842 464 95.998 456.844 95.998 448S88.842 432 80 432H32V416H80C88.842 416 95.998 408.844 95.998 400S88.842 384 80 384H32V375.906C32 371.031 34.188 366.469 37.984 363.406C40.859 361.094 44.375 359.875 47.969 359.875C49.125 359.875 50.297 360.031 51.469 360.281L280.527 411.187L246.107 480Z" })
  }
));
GolfClubLight.displayName = "GolfClubLight";
var GolfClub_default = GolfClubLight;
