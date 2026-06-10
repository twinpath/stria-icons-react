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
var Star_exports = {};
__export(Star_exports, {
  default: () => Star_default
});
module.exports = __toCommonJS(Star_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M139.886 512C132.824 512 125.793 508.656 121.106 503.031C116.513 497.531 114.669 490.531 115.919 483.281L142.104 328.469L31.331 218.906C24.613 212.281 22.332 202.906 25.238 193.875C28.113 184.781 35.456 178.5 44.83 177.125L197.788 154.5L266.189 13.688C270.345 5.125 278.501 0 287.938 0C297.312 0 305.686 5.25 309.811 13.688L378.212 154.5L531.201 177.125C540.419 178.5 547.918 184.937 550.762 193.906C553.668 202.906 551.387 212.281 544.669 218.906L433.896 328.469L460.081 483.281C461.3 490.594 459.456 497.562 454.894 503C447.801 511.625 434.895 514.5 424.802 509.094L288 436.062L151.198 509.094C147.667 511 143.854 512 139.886 512ZM280.563 20.688L208.475 169.062L47.174 192.938C39.498 194.107 38.234 203.242 42.581 207.531L159.291 322.969L131.668 485.969C130.333 494.072 138.742 497.699 143.573 495L288 417.938L432.333 494.969C437.408 497.769 445.613 493.905 444.301 485.938L416.709 322.969L533.419 207.531C537.796 203.212 536.345 194.094 528.826 192.938L367.525 169.062L295.437 20.687C292.502 14.754 283.818 14.07 280.563 20.688Z" })
  }
));
StarThin.displayName = "StarThin";
var Star_default = StarThin;
