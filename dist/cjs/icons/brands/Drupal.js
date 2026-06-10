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
var Drupal_exports = {};
__export(Drupal_exports, {
  default: () => Drupal_default
});
module.exports = __toCommonJS(Drupal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrupalBrands = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M303.973,108.136C268.2,72.459,234.187,38.35,224.047,0c-9.957,38.35-44.25,72.459-80.019,108.136C90.467,161.7,29.716,222.356,29.716,313.436c-2.337,107.3,82.752,196.18,190.053,198.517S415.948,429.2,418.285,321.9q.091-4.231,0-8.464C418.285,222.356,357.534,161.7,303.973,108.136Zm-174.326,223a130.282,130.282,0,0,0-15.211,24.153,4.978,4.978,0,0,1-3.319,2.766h-1.659c-4.333,0-9.219-8.481-9.219-8.481h0c-1.29-2.028-2.489-4.149-3.687-6.361l-.83-1.752c-11.247-25.72-1.475-62.318-1.475-62.318h0a160.585,160.585,0,0,1,23.231-49.873A290.8,290.8,0,0,1,138.5,201.613l9.219,9.219,43.512,44.434a4.979,4.979,0,0,1,0,6.638L145.78,312.33h0Zm96.612,127.311a67.2,67.2,0,0,1-49.781-111.915c14.2-16.871,31.528-33.464,50.334-55.313,22.309,23.785,36.875,40.1,51.164,57.986a28.413,28.413,0,0,1,2.95,4.425,65.905,65.905,0,0,1,11.984,37.981,66.651,66.651,0,0,1-66.466,66.836ZM352.371,351.6h0a7.743,7.743,0,0,1-6.176,5.347H344.9a11.249,11.249,0,0,1-6.269-5.07h0a348.21,348.21,0,0,0-39.456-48.952L281.387,284.49,222.3,223.185a497.888,497.888,0,0,1-35.4-36.322,12.033,12.033,0,0,0-.922-1.382,35.4,35.4,0,0,1-4.7-9.219V174.51a31.346,31.346,0,0,1,9.218-27.656c11.432-11.431,22.955-22.954,33.833-34.939,11.984,13.275,24.8,26,37.428,38.627h0a530.991,530.991,0,0,1,69.6,79.1,147.494,147.494,0,0,1,27.011,83.8A134.109,134.109,0,0,1,352.371,351.6Z" })
  }
));
DrupalBrands.displayName = "DrupalBrands";
var Drupal_default = DrupalBrands;
