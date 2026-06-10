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
var RotateExclamation_exports = {};
__export(RotateExclamation_exports, {
  default: () => RotateExclamation_default
});
module.exports = __toCommonJS(RotateExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateExclamationSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M458.344 282.094C437.312 274.969 414.719 286.281 407.641 307.219C385.688 372.281 324.734 416 256 416C205.246 416 158.068 391.906 128.07 352L144.008 351.992C161.676 351.992 176 337.668 176 320C176 302.328 161.676 288 144.004 288H47.996C39.156 288 31.156 291.578 25.367 297.367S16 311.156 16 319.996V432.004C16 449.672 30.324 464 47.996 464C65.664 464 79.992 449.676 79.992 432.008V418.695C124.869 467.207 188.227 496 256 496C359.094 496 450.5 430.406 483.453 332.781C490.516 311.875 479.266 289.156 458.344 282.094ZM464.004 48C446.336 48 432.008 62.324 432.008 79.992V93.305C387.131 44.793 323.773 16 256 16C152.922 16 61.531 81.594 28.562 179.188C21.484 200.125 32.719 222.812 53.656 229.906C57.891 231.344 62.219 232 66.453 232C83.141 232 98.719 221.5 104.344 204.812C126.328 139.719 187.266 96 256 96C306.754 96 353.932 120.094 383.93 160L367.992 160.008C350.324 160.008 336 174.332 336 192C336 209.672 350.324 224 367.996 224H464.004C472.844 224 480.844 220.422 486.633 214.633S496 200.844 496 192.004V79.996C496 62.328 481.676 48 464.004 48ZM256 384C273.363 384 287.438 369.924 287.438 352.561C287.438 335.199 273.363 321.123 256 321.123S224.562 335.199 224.562 352.561C224.562 369.924 238.637 384 256 384ZM256 288C269.25 288 280 277.25 280 264V152C280 138.75 269.25 128 256 128S232 138.75 232 152V264C232 277.25 242.75 288 256 288Z" })
  }
));
RotateExclamationSolid.displayName = "RotateExclamationSolid";
var RotateExclamation_default = RotateExclamationSolid;
