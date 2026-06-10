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
var BracketsRound_exports = {};
__export(BracketsRound_exports, {
  default: () => BracketsRound_default
});
module.exports = __toCommonJS(BracketsRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsRoundThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M140.688 54.46C144.25 51.866 145.063 46.866 142.469 43.303C139.875 39.709 134.844 38.959 131.312 41.491C127.25 44.428 32 114.867 32 255.995S127.25 467.563 131.312 470.5C132.719 471.5 134.375 472 136 472C138.469 472 140.906 470.844 142.469 468.688C145.062 465.125 144.25 460.125 140.687 457.531C139.781 456.844 48 388.655 48 255.995S139.781 55.147 140.688 54.46ZM380.688 41.491C377.125 38.959 372.125 39.741 369.531 43.303C366.938 46.866 367.75 51.866 371.313 54.46C372.219 55.147 464 123.336 464 255.995S372.219 456.844 371.312 457.531C367.75 460.125 366.937 465.125 369.531 468.688C371.094 470.844 373.531 472 376 472C377.625 472 379.281 471.5 380.687 470.5C384.75 467.563 480 397.123 480 255.995S384.75 44.428 380.688 41.491Z" })
  }
));
BracketsRoundThin.displayName = "BracketsRoundThin";
var BracketsRound_default = BracketsRoundThin;
