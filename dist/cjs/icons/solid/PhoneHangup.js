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
var PhoneHangup_exports = {};
__export(PhoneHangup_exports, {
  default: () => PhoneHangup_default
});
module.exports = __toCommonJS(PhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneHangupSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M635.389 293.649L582.66 377.894C575.03 390.098 559.569 395.246 546.03 389.875L440.623 347.775C428.17 342.85 420.486 330.125 421.91 316.902L428.551 250.433C358.33 226.49 281.764 226.479 211.574 250.412L218.196 316.922C219.533 330.188 211.916 342.786 199.525 347.775L94.044 389.907C80.441 395.214 65.001 390.151 57.327 377.862L4.619 293.638C-2.862 281.751 -1.118 266.468 8.849 256.514C180.427 85.159 459.581 85.168 631.138 256.504C641.117 266.468 642.86 281.751 635.389 293.649Z" })
  }
));
PhoneHangupSolid.displayName = "PhoneHangupSolid";
var PhoneHangup_default = PhoneHangupSolid;
