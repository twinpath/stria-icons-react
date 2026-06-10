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
var Droplet_exports = {};
__export(Droplet_exports, {
  default: () => Droplet_default
});
module.exports = __toCommonJS(Droplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M221.25 22.127C217.207 7.539 204.611 0 191.979 0C179.607 0 167.203 7.223 162.75 22.127C116 179.877 16 222.752 16 333.875C16 432.375 94.75 512 192 512S368 432.375 368 333.875C368 222.127 268.25 180.627 221.25 22.127ZM192 496C103.775 496 32 423.271 32 333.875C32 280.533 57.457 244.055 89.688 197.869C120.377 153.891 155.162 104.043 178.08 26.707C180.967 17.043 188.762 16 191.979 16C197.281 16 203.707 18.732 205.91 26.676C228.967 104.428 263.752 154.133 294.443 197.986C326.6 243.936 352 280.229 352 333.875C352 423.271 280.225 496 192 496ZM184 424C139.875 424 104 388.109 104 344C104 339.578 100.406 336 96 336S88 339.578 88 344C88 396.938 131.062 440 184 440C188.406 440 192 436.422 192 432S188.406 424 184 424Z" })
  }
));
DropletThin.displayName = "DropletThin";
var Droplet_default = DropletThin;
