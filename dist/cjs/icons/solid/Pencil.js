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
var Pencil_exports = {};
__export(Pencil_exports, {
  default: () => Pencil_default
});
module.exports = __toCommonJS(Pencil_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PencilSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.939 74.158L437.847 14.062C419.097 -4.688 388.662 -4.688 369.914 14.062L313.384 70.611L441.378 198.633L497.939 142.084C516.687 123.316 516.687 92.91 497.939 74.158ZM31.037 352.955C28.802 355.189 27.281 358.033 26.66 361.131L0.32 492.854C-1.704 502.967 6.156 512 15.945 512C16.994 512 18.062 511.896 19.144 511.68L150.855 485.336C153.953 484.717 156.796 483.195 159.031 480.963L418.75 221.258L290.75 93.232L31.037 352.955ZM131.945 440.168L56.8 455.197L71.828 380.047L96 355.875V416H156.115L131.945 440.168Z" })
  }
));
PencilSolid.displayName = "PencilSolid";
var Pencil_default = PencilSolid;
