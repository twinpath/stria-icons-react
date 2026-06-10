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
var SquareParkingSlash_exports = {};
__export(SquareParkingSlash_exports, {
  default: () => SquareParkingSlash_default
});
module.exports = __toCommonJS(SquareParkingSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareParkingSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M425.551 257.777C429.545 247.232 432 235.928 432 224C432 171.062 388.937 128 336 128H261.166L301.699 160H336C371.281 160 400 188.719 400 224C400 228.314 399.543 232.521 398.725 236.6L425.551 257.777ZM480 64C497.645 64 512 78.355 512 96V326.027L544 351.289V96C544 60.654 515.346 32 480 32H160C154.027 32 148.359 33.082 142.875 34.613L180.1 64H480ZM224 261.762V368C224 376.844 231.156 384 240 384S256 376.844 256 368V320H297.77L257.236 288H256V287.023L224 261.762ZM160 448C142.355 448 128 433.645 128 416V185.971L96 160.709V416C96 451.346 124.654 480 160 480H480C485.973 480 491.643 478.918 497.127 477.387L459.902 448H160ZM633.923 483.438L25.921 3.436C18.999 -2.033 8.921 -0.846 3.437 6.092C-2.032 13.029 -0.845 23.092 6.077 28.561L614.079 508.562C617.016 510.875 620.516 512 623.985 512C628.72 512 633.407 509.906 636.563 505.906C642.032 498.969 640.845 488.906 633.923 483.438Z" })
  }
));
SquareParkingSlashLight.displayName = "SquareParkingSlashLight";
var SquareParkingSlash_default = SquareParkingSlashLight;
