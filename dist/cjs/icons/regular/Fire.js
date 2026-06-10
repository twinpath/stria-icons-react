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
var Fire_exports = {};
__export(Fire_exports, {
  default: () => Fire_default
});
module.exports = __toCommonJS(Fire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M323.5 51.25C302.75 70.5 284 90.75 267.375 111.125C240.125 73.625 206.25 35.5 168 0C69.75 91.125 0 210.001 0 281.625C0 408.875 100.25 512 224 512S448 408.875 448 281.625C448 228.375 396 118.5 323.5 51.25ZM224 464C127 464 48 382.125 48 281.625C48 236.25 92.25 148.375 168.125 67.5C190.5 90.875 211 115.25 228.5 139.375L265.125 189.75L304.5 141.5C310.375 134.375 316.375 127.375 322.5 120.5C368.875 178.001 400 250.375 400 281.625C400 382.125 321 464 224 464ZM313.5 243.125L262.125 301.625C262.125 301.625 181.75 199 175.75 192C133.25 242.875 112 272.625 112 306.375C112 374.25 163.375 416 226.5 416C251.75 416 275.125 408.125 294.125 394.875C337.125 364.75 347.25 306.25 323.375 260.625C320.375 255 317.125 249.125 313.5 243.125Z" })
  }
));
FireRegular.displayName = "FireRegular";
var Fire_default = FireRegular;
