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
var FireFlameCurved_exports = {};
__export(FireFlameCurved_exports, {
  default: () => FireFlameCurved_default
});
module.exports = __toCommonJS(FireFlameCurved_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireFlameCurvedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 23.994C216 0.244 184.875 -9.132 171.875 10.994C76.5 158.245 200 238.747 200 287.997C200 309.997 182 327.998 160 327.998C138 327.998 120 309.997 120 287.997V182.121C120 162.746 98.125 151.37 82.25 162.496C30.75 198.371 0 257.247 0 319.997C0 425.874 86.125 512 192 512S384 425.874 384 319.997C384 149.745 216 127.12 216 23.994ZM192 463.999C112.625 463.999 48 399.374 48 319.997C48 291.372 56.5 255.247 72 231.996V287.997C72 336.498 111.5 375.998 160 375.998S248 336.498 248 287.997C248 223.746 160 167.996 184 79.995C224 167.996 336 201.746 336 319.997C336 399.374 271.375 463.999 192 463.999Z" })
  }
));
FireFlameCurvedRegular.displayName = "FireFlameCurvedRegular";
var FireFlameCurved_default = FireFlameCurvedRegular;
