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
var Pig_exports = {};
__export(Pig_exports, {
  default: () => Pig_default
});
module.exports = __toCommonJS(Pig_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PigSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.999 192H530.498C521.747 172 508.872 154.25 493.121 139.5L511.997 64H479.995C450.619 64 424.618 77.5 406.992 98.375C399.366 97.25 391.866 96 383.991 96H255.984C178.606 96 113.978 151 99.227 224H55.975C41.224 224 29.473 210.5 32.474 195.25C34.599 183.875 45.349 176 56.975 176H57.975C61.225 176 63.975 173.25 63.975 170.001V150.001C63.975 146.75 61.225 144 57.975 144C29.473 144 4.097 164.375 0.472 192.625C-3.903 226.75 22.723 256 55.975 256H95.977C95.977 308.125 121.353 354.125 159.98 383.25V448C159.98 465.673 174.307 480 191.981 480H223.983C241.657 480 255.984 465.673 255.984 448V416H383.991V448C383.991 465.673 398.318 480 415.992 480H447.994C465.668 480 479.995 465.673 479.995 448V383.25C491.871 374.375 502.371 363.875 511.247 352H559.999C568.836 352 576 344.837 576 336V208C576 199.163 568.836 192 559.999 192ZM431.993 256C423.118 256 415.992 248.875 415.992 240S423.118 224 431.993 224S447.994 231.125 447.994 240S440.868 256 431.993 256Z" })
  }
));
PigSolid.displayName = "PigSolid";
var Pig_default = PigSolid;
