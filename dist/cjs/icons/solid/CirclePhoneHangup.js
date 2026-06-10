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
var CirclePhoneHangup_exports = {};
__export(CirclePhoneHangup_exports, {
  default: () => CirclePhoneHangup_default
});
module.exports = __toCommonJS(CirclePhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePhoneHangupSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM419.951 256.055L392.549 299.896C388.561 306.293 380.533 308.928 373.463 306.166L318.629 284.234C312.188 281.639 308.227 275.08 308.924 268.176L312.363 233.553C275.875 221.096 236.072 221.102 199.568 233.564L203.021 268.162C203.762 275.047 199.768 281.67 193.293 284.232L138.496 306.148C131.459 308.945 123.42 306.266 119.455 299.912L92.043 256.061C88.16 249.867 89.066 241.912 94.254 236.725C183.438 147.541 328.557 147.533 417.752 236.73C422.934 241.912 423.84 249.867 419.951 256.055Z" })
  }
));
CirclePhoneHangupSolid.displayName = "CirclePhoneHangupSolid";
var CirclePhoneHangup_default = CirclePhoneHangupSolid;
