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
var Moon_exports = {};
__export(Moon_exports, {
  default: () => Moon_default
});
module.exports = __toCommonJS(Moon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoonLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M428.25 367.5C422.641 358.188 412.172 353.594 401.5 355.531C359.109 363.719 315.672 352.594 282.312 325.031C248.359 297 228.891 255.531 228.891 211.25C228.891 158.5 257.094 109.5 302.484 83.406C311.938 78 316.859 67.531 315.031 56.75C313.219 46 305.141 37.75 294.422 35.75C283.094 33.656 265.281 32 253.891 32C131.547 32 32 132.5 32 256S131.547 480 253.891 480C321.078 480 383.906 449.75 426.312 397C433.141 388.438 433.906 376.875 428.25 367.5ZM253.891 448C149.188 448 64 361.875 64 256S149.188 64 253.891 64C258.781 64 265.422 64.406 271.984 65.031C225.281 98.344 196.891 152.906 196.891 211.25C196.891 265.094 220.594 315.562 261.937 349.719C298.187 379.656 344.109 393.594 390.469 389.406C354.75 426.844 305.828 448 253.891 448Z" })
  }
));
MoonLight.displayName = "MoonLight";
var Moon_default = MoonLight;
