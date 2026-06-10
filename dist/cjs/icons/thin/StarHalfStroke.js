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
var StarHalfStroke_exports = {};
__export(StarHalfStroke_exports, {
  default: () => StarHalfStroke_default
});
module.exports = __toCommonJS(StarHalfStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarHalfStrokeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M550.762 193.906C547.918 184.938 540.418 178.5 531.201 177.125L378.213 154.5L309.81 13.688C305.685 5.25 297.312 0 287.937 0C278.5 0 270.346 5.125 266.189 13.688L197.787 154.5L44.83 177.125C35.457 178.5 28.113 184.781 25.238 193.875C22.332 202.906 24.613 212.281 31.332 218.906L142.103 328.469L115.918 483.281C114.67 490.531 116.512 497.531 121.105 503.031C125.793 508.656 132.824 512 139.887 512C143.853 512 147.666 511 151.197 509.094L288 436.062L424.803 509.094C434.894 514.5 447.801 511.625 454.894 503C459.457 497.562 461.299 490.594 460.082 483.281L433.896 328.469L544.668 218.906C551.387 212.281 553.668 202.906 550.762 193.906ZM143.572 495C138.742 497.697 130.334 494.07 131.668 485.969L159.291 322.969L42.58 207.531C38.234 203.24 39.498 194.107 47.174 192.938L208.474 169.062L280 21.846V422.207L143.572 495ZM533.42 207.531L416.709 322.969L444.301 485.938C445.613 493.904 437.408 497.768 432.334 494.969L296 422.207V21.846L367.525 169.062L528.826 192.938C536.346 194.094 537.795 203.211 533.42 207.531Z" })
  }
));
StarHalfStrokeThin.displayName = "StarHalfStrokeThin";
var StarHalfStroke_default = StarHalfStrokeThin;
