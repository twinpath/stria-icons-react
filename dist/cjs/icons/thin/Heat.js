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
var Heat_exports = {};
__export(Heat_exports, {
  default: () => Heat_default
});
module.exports = __toCommonJS(Heat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeatThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 169.812V104C64 99.594 60.406 96 56 96S48 99.594 48 104V169.812C48 221.625 65.656 272.562 97.719 313.25C127.562 351.156 144 398.562 144 446.781V472C144 476.406 147.594 480 152 480S160 476.406 160 472V446.781C160 395 142.344 344.063 110.281 303.375C80.438 265.469 64 218.062 64 169.812ZM220.25 259.938C196.531 224.406 184 183.031 184 140.25V40C184 35.594 180.406 32 176 32S168 35.594 168 40V140.25C168 186.188 181.469 230.656 206.938 268.812L227.75 300.062C251.469 335.594 264 376.969 264 419.75V472C264 476.406 267.594 480 272 480S280 476.406 280 472V419.75C280 373.812 266.531 329.344 241.062 291.188L220.25 259.938ZM366.281 303.375C336.438 265.469 320 218.062 320 169.812V104C320 99.594 316.406 96 312 96S304 99.594 304 104V169.812C304 221.625 321.656 272.562 353.719 313.25C383.562 351.156 400 398.562 400 446.781V472C400 476.406 403.594 480 408 480S416 476.406 416 472V446.781C416 395 398.344 344.062 366.281 303.375Z" })
  }
));
HeatThin.displayName = "HeatThin";
var Heat_default = HeatThin;
