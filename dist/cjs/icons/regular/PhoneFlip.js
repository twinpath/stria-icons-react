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
var PhoneFlip_exports = {};
__export(PhoneFlip_exports, {
  default: () => PhoneFlip_default
});
module.exports = __toCommonJS(PhoneFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneFlipRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.359 380.126L22.421 471.469C27.889 495.313 48.858 512 73.419 512C315.256 512 512 315.251 512 73.393C512 48.831 495.297 27.862 471.392 22.409L380.145 1.347C355.614 -4.325 330.427 8.331 320.271 31.534L278.023 130.096C268.945 151.44 275.132 176.518 293.038 191.143L326.584 218.627C300.834 263.376 263.32 300.876 218.54 326.626L191.103 293.126C176.541 275.064 151.308 268.892 129.902 278.173L31.702 320.251C8.39 330.314 -4.36 355.47 1.359 380.126ZM48.108 369.313C47.654 367.345 48.779 365.157 50.654 364.345L148.917 322.251C150.651 321.439 152.729 321.97 153.839 323.376L193.853 372.251C200.915 380.876 213.009 383.501 223.009 378.594C290.288 345.563 345.536 290.345 378.551 223.111C383.457 213.111 380.832 201.033 372.207 193.971L323.427 154.002C321.928 152.768 321.428 150.705 322.178 148.94L364.317 50.612C365.004 49.05 366.629 48.003 368.364 48.003C368.676 48.003 369.004 48.034 369.317 48.112L460.658 69.19C462.705 69.659 464.001 71.3 464.001 73.393C464.001 288.783 288.788 464 73.419 464C71.31 464 69.669 462.719 69.201 460.719L48.123 369.313H48.108Z" })
  }
));
PhoneFlipRegular.displayName = "PhoneFlipRegular";
var PhoneFlip_default = PhoneFlipRegular;
