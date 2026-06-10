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
var Ornament_exports = {};
__export(Ornament_exports, {
  default: () => Ornament_default
});
module.exports = __toCommonJS(Ornament_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OrnamentSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.906 153.875V112C287.906 103.25 280.658 96 271.912 96H247.045C252.543 86.625 255.918 75.75 255.918 64C255.918 28.75 227.176 0 191.938 0S127.959 28.75 127.959 64C127.959 75.75 131.332 86.625 136.83 96H111.965C103.217 96 95.969 103.25 95.969 112V153.875C66.854 170.75 42.736 195 25.867 224H358.01C341.139 195 317.021 170.75 287.906 153.875ZM191.938 96C174.443 96 159.949 81.5 159.949 64S174.443 32 191.938 32S223.928 46.5 223.928 64S209.432 96 191.938 96ZM191.938 512C262.914 512 324.77 473.25 358.01 416H25.867C59.105 473.25 120.961 512 191.938 512ZM372.504 256H11.371C4.25 276.125 0 297.5 0 320S4.125 364 11.246 384H372.754C379.877 364 384 342.5 384 320C383.875 297.5 379.627 276.125 372.504 256Z" })
  }
));
OrnamentSolid.displayName = "OrnamentSolid";
var Ornament_default = OrnamentSolid;
