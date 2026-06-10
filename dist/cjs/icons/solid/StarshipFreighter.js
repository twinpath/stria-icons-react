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
var StarshipFreighter_exports = {};
__export(StarshipFreighter_exports, {
  default: () => StarshipFreighter_default
});
module.exports = __toCommonJS(StarshipFreighter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarshipFreighterSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.009 207.991C197.509 207.991 176.01 229.491 176.01 255.992S197.509 303.994 224.009 303.994S272.008 282.493 272.008 255.992S250.508 207.991 224.009 207.991ZM560 223.616C568.875 223.616 576 216.491 576 207.616V155.239C576 148.489 571.75 142.488 565.5 140.113L311.382 47.61C255.633 27.485 193.635 25.609 139.261 49.11C-4.11 111.237 0.014 255.992 0.014 255.992S-4.36 400.622 139.261 462.874C193.635 486.375 255.633 484.5 311.382 464.374L327.631 458.499L330.881 462.374C340.006 473.5 353.631 480 368.005 480H432.004C449.628 480 465.878 470.375 474.253 454.874C482.627 439.374 481.877 420.623 472.128 405.872L565.5 371.871C571.75 369.496 576 363.496 576 356.746V304.369C576 295.494 568.875 288.368 560 288.368H416.004V223.616H560ZM80.012 271.993C71.138 271.993 64.013 264.868 64.013 255.992C64.013 247.117 71.138 239.992 80.012 239.992S96.012 247.117 96.012 255.992C96.012 264.868 88.887 271.993 80.012 271.993ZM112.012 367.996C103.137 367.996 96.012 360.871 96.012 351.996S103.137 335.995 112.012 335.995S128.011 343.12 128.011 351.996S120.886 367.996 112.012 367.996ZM112.012 175.99C103.137 175.99 96.012 168.864 96.012 159.989S103.137 143.989 112.012 143.989S128.011 151.114 128.011 159.989S120.886 175.99 112.012 175.99ZM224.009 335.995C179.885 335.995 144.011 300.119 144.011 255.992S179.885 175.99 224.009 175.99C268.258 175.99 304.007 211.866 304.007 255.992S268.133 335.995 224.009 335.995Z" })
  }
));
StarshipFreighterSolid.displayName = "StarshipFreighterSolid";
var StarshipFreighter_default = StarshipFreighterSolid;
