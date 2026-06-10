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
var HandFingersCrossed_exports = {};
__export(HandFingersCrossed_exports, {
  default: () => HandFingersCrossed_default
});
module.exports = __toCommonJS(HandFingersCrossed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandFingersCrossedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M241.914 268.689C251.253 277.832 255.466 286.478 256.004 287.536V224.009C256.004 221.853 256.429 219.818 256.638 217.716L245.676 195.791L217.231 252.682C218.604 253.198 231.346 258.514 241.914 268.689ZM138.334 124.231L174.115 52.671L156.631 17.703C151.022 6.496 139.719 0 127.978 0C111.011 0 95.995 13.663 95.995 32.036C95.995 36.847 97.084 41.731 99.382 46.327L138.334 124.231ZM416.001 224.009C398.313 224.009 384.001 238.337 384.001 256.008V320.006C384.001 337.677 398.313 352.005 416.001 352.005S448 337.677 448 320.006V256.008C448 238.337 433.688 224.009 416.001 224.009ZM320.002 352.005C337.69 352.005 352.002 337.677 352.002 320.006V224.009C352.002 206.338 337.69 192.01 320.002 192.01S288.003 206.338 288.003 224.009V320.006C288.003 337.677 302.315 352.005 320.002 352.005ZM176.005 249.805C178.46 249.249 180.894 249.196 183.341 248.901L284.628 46.327C286.926 41.731 288.015 36.847 288.015 32.036C288.015 14.429 273.728 0 256.051 0C244.32 0 233.01 6.496 227.379 17.703L103.007 266.457L176.005 249.805ZM368.002 361.931C356.269 375.35 339.227 384.004 320.002 384.004C292.511 384.004 269.265 366.577 260.203 342.242C248.807 377.078 218.277 387.863 208.005 390.207L157.825 401.654C156.639 401.924 155.446 402.055 154.265 402.055C148.896 402.055 143.782 399.345 140.798 394.691L140.798 394.691C139.059 391.979 138.255 389.004 138.255 386.089C138.255 378.972 143.043 372.204 150.709 370.456L198.763 359.495C217.73 355.169 231.983 338.469 231.983 319.649C231.983 299.895 215.904 280.009 192.036 280.009C189.092 280.009 186.099 280.333 183.099 281.007L64.336 308.1C41.424 313.326 32 331.908 32 347.393C32 352.975 33.167 358.559 35.508 363.77L57.601 412.878C84.663 473.095 144.787 512 210.817 512H272.003C354.545 512 423.819 454.789 442.727 377.989C434.571 381.758 425.575 384.004 416.001 384.004C396.776 384.004 379.734 375.35 368.002 361.931Z" })
  }
));
HandFingersCrossedSolid.displayName = "HandFingersCrossedSolid";
var HandFingersCrossed_default = HandFingersCrossedSolid;
