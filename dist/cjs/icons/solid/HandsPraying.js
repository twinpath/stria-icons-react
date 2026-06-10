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
var HandsPraying_exports = {};
__export(HandsPraying_exports, {
  default: () => HandsPraying_default
});
module.exports = __toCommonJS(HandsPraying_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandsPrayingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 191.896C254.375 191.896 240 206.271 240 223.895V303.889C240 312.764 232.875 319.889 224 319.889S208 312.764 208 303.889V227.395C208 210.021 212.75 192.896 221.75 178.023L299.5 48.408C308.5 33.283 303.625 13.66 288.5 4.535C274 -4.215 255.75 0.16 246.125 13.66C246 13.91 245.5 13.91 245.375 14.16L128.125 190.023C117.5 205.896 112 224.27 112 243.27V323.514L21.875 353.512C8.75 357.887 0 370.135 0 383.885V479.877C0 490.752 8.5 511.875 32 511.875C34.75 511.875 37.375 511.625 40 510.875L219.25 464.254C269.125 450.004 304 403.758 304 351.887V223.895C304 206.271 289.625 191.896 272 191.896ZM618.125 353.637L528 323.639V243.395C528 224.395 522.5 206.021 511.875 190.146L394.625 14.285C394.5 14.035 394 14.035 393.875 13.785C384.25 0.285 366 -4.09 351.5 4.535C336.375 13.66 331.5 33.283 340.5 48.533L418.25 178.023C427.25 193.021 432 210.021 432 227.52V304.014C432 312.889 424.875 320.014 416 320.014S400 312.889 400 304.014V224.02C400 206.396 385.625 192.021 368 192.021S336 206.396 336 224.02V352.012C336 403.883 370.875 450.129 420.75 464.379L600 511C602.625 511.625 605.375 512 608 512C631.5 512 640 490.752 640 480.002V384.01C640 370.26 631.25 358.012 618.125 353.637Z" })
  }
));
HandsPrayingSolid.displayName = "HandsPrayingSolid";
var HandsPraying_default = HandsPrayingSolid;
