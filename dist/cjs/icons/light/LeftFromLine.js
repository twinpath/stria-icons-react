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
var LeftFromLine_exports = {};
__export(LeftFromLine_exports, {
  default: () => LeftFromLine_default
});
module.exports = __toCommonJS(LeftFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftFromLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 64C423.156 64 416 71.156 416 80V432C416 440.844 423.156 448 432 448S448 440.844 448 432V80C448 71.156 440.844 64 432 64ZM323.172 192H208V133.594C208 118.594 199.094 105.062 185.25 99.062C171.453 93.125 155.469 95.938 144.703 106.125L11.5 228.656C4.188 235.531 0 245.5 0 256S4.188 276.469 11.656 283.5L144.547 405.719C155.469 416.062 171.453 418.875 185.312 412.937C199.094 406.938 208 393.406 208 378.406V320H323.172C347.891 320 368 299.906 368 275.188V236.812C368 212.094 347.891 192 323.172 192ZM336 275.188C336 282.25 330.25 288 323.172 288H176V378.406C176 380.625 174.656 382.656 172.625 383.562C170.547 384.438 168.156 384 166.359 382.312L33.469 260.094C31.656 258.344 31.812 253.5 33.312 252.062L166.516 129.531C168.156 128 170.547 127.562 172.562 128.438C174.656 129.344 176 131.375 176 133.594V224H323.172C330.25 224 336 229.75 336 236.812V275.188Z" })
  }
));
LeftFromLineLight.displayName = "LeftFromLineLight";
var LeftFromLine_default = LeftFromLineLight;
