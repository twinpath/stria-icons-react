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
var DropletSlash_exports = {};
__export(DropletSlash_exports, {
  default: () => DropletSlash_default
});
module.exports = __toCommonJS(DropletSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 333.878C144 432.376 222.75 512 320 512C372.811 512 420.039 488.403 452.291 451.169L174.773 233.659C156.59 263.935 144 294.646 144 333.878ZM349.25 22.132C341.25 -6.742 299.75 -7.992 290.75 22.132C274.314 77.591 251.314 118.695 228.383 153.691L493.754 361.682C495.184 352.622 496 343.352 496 333.878C496 222.129 396.25 180.63 349.25 22.132Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.811 469.103L38.814 5.11C34.407 1.672 29.189 0.001 24.032 0.001C16.907 0.001 9.845 3.157 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.368 641.249 477.275 630.811 469.103Z" })
    ]
  }
));
DropletSlashDuotone.displayName = "DropletSlashDuotone";
var DropletSlash_default = DropletSlashDuotone;
