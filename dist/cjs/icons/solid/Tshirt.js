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
var Tshirt_exports = {};
__export(Tshirt_exports, {
  default: () => Tshirt_default
});
module.exports = __toCommonJS(Tshirt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TshirtSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M636.627 138.996L593.583 224.994C585.719 240.705 566.661 247.137 550.885 239.406L479.901 200.598L480 480C480.006 497.67 465.684 512 448.012 512H191.989C174.317 512 159.995 497.67 160 480L160.1 200.598L89.116 239.406C73.34 247.137 54.282 240.705 46.418 224.994L3.374 138.996C-4.537 123.193 1.946 103.846 17.78 96L203.465 0C223.59 27.75 268.09 47.25 319.965 47.25C319.977 47.25 319.989 47.248 320 47.248S320.024 47.25 320.036 47.25C371.911 47.25 416.411 27.75 436.536 0L622.221 96C638.055 103.846 644.538 123.193 636.627 138.996Z" })
  }
));
TshirtSolid.displayName = "TshirtSolid";
var Tshirt_default = TshirtSolid;
