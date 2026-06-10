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
var MicrophoneStand_exports = {};
__export(MicrophoneStand_exports, {
  default: () => MicrophoneStand_default
});
module.exports = __toCommonJS(MicrophoneStand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneStandThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.195 32.805C457.326 10.934 428.662 0 399.998 0C371.336 0 342.674 10.934 320.803 32.805L277.492 76.117C258.793 94.816 248.588 118.523 245.875 142.91L12.565 405.953C-4.967 425.844 -4.045 456.078 14.658 474.797L37.065 497.313C46.83 507.078 59.721 512 72.658 512C84.565 512 96.502 507.828 106.065 499.391L248 373.5V504C248 508.422 251.578 512 256 512S264 508.422 264 504V360C264 359.801 263.803 359.688 263.789 359.492L369.055 266.125C393.453 263.422 417.176 253.215 435.883 234.508L479.195 191.195C522.936 147.453 522.936 76.547 479.195 32.805ZM95.479 487.395C89.19 492.945 81.084 496 72.658 496C63.451 496 54.828 492.449 48.406 486.027L25.977 463.488C13.227 450.727 12.608 430.102 24.535 416.57L253.936 157.938L354.049 258.047L95.479 487.395ZM467.883 179.883L424.568 223.195C409.658 238.102 390.303 247.281 368.596 249.969L262.025 143.398C264.717 121.691 273.897 102.34 288.805 87.43L332.117 44.117C350.25 25.984 374.358 16 399.998 16C425.641 16 449.75 25.984 467.881 44.117C505.311 81.547 505.311 142.453 467.883 179.883ZM310.469 65.781L446.219 201.531L457.531 190.219L321.781 54.469L310.469 65.781Z" })
  }
));
MicrophoneStandThin.displayName = "MicrophoneStandThin";
var MicrophoneStand_default = MicrophoneStandThin;
