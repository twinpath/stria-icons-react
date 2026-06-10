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
var TirePressureWarning_exports = {};
__export(TirePressureWarning_exports, {
  default: () => TirePressureWarning_default
});
module.exports = __toCommonJS(TirePressureWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TirePressureWarningThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 352C264.822 352 272 344.822 272 336S264.822 320 256 320S240 327.178 240 336S247.178 352 256 352ZM255.938 272C260.344 272 263.938 268.406 263.938 264V104C263.938 99.594 260.344 96 255.938 96S247.938 99.594 247.938 104V264C247.938 268.406 251.531 272 255.938 272ZM485.5 213.203C477.688 185.891 469.375 164.031 461.344 142.891C444.938 99.703 432 65.594 432 8C432 3.578 428.406 0 424 0S416 3.578 416 8C416 68.531 430.094 105.625 446.406 148.578C454.312 169.406 462.5 190.953 470.125 217.609C476.688 240.453 480 264.312 480 288.531C480 352.156 457.094 411.938 415.5 456.828C411.281 461.391 404.938 464 398.156 464H113.844C107.062 464 100.719 461.391 96.5 456.828C54.906 411.938 32 352.156 32 288.531C32 264.312 35.312 240.453 41.875 217.609C49.5 190.953 57.688 169.406 65.594 148.578C81.906 105.625 96 68.531 96 8C96 3.578 92.406 0 88 0S80 3.578 80 8C80 65.594 67.062 99.703 50.656 142.891C42.625 164.031 34.312 185.891 26.5 213.203C19.531 237.484 16 262.828 16 288.531C16 356.203 40.406 419.844 84.75 467.719C91.613 475.066 101.502 479.146 112 479.629V504C112 508.418 115.582 512 120 512S128 508.418 128 504V480H208V504C208 508.418 211.582 512 216 512S224 508.418 224 504V480H288V504C288 508.418 291.582 512 296 512S304 508.418 304 504V480H384V504C384 508.418 387.582 512 392 512S400 508.418 400 504V479.629C410.498 479.146 420.387 475.066 427.25 467.703C471.594 419.844 496 356.203 496 288.531C496 262.828 492.469 237.484 485.5 213.203Z" })
  }
));
TirePressureWarningThin.displayName = "TirePressureWarningThin";
var TirePressureWarning_default = TirePressureWarningThin;
