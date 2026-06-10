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
var PersonSkiingNordic_exports = {};
__export(PersonSkiingNordic_exports, {
  default: () => PersonSkiingNordic_default
});
module.exports = __toCommonJS(PersonSkiingNordic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkiingNordicSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 96C362.5 96 384 74.5 384 48S362.5 0 336 0S288 21.5 288 48S309.5 96 336 96ZM552 416C538.75 416 528 426.75 528 440S517.25 464 504 464H434.5L460 285.625C471.75 280.875 480.125 269.375 480.125 256C480.125 238.25 465.75 224 448.125 224H404.125L378 170.75C365.5 145.25 342.5 126.625 316.25 119.875L245 98.75C216.75 91.875 187.25 98.25 164.25 115.75L124.5 146.25C110.5 156.875 107.75 177 118.625 191.125C119.25 192 120.25 192.375 121 193.25L66.875 464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H504C543.75 512 576 479.75 576 440C576 426.75 565.25 416 552 416ZM291.5 464H194.625L237.75 373L215.75 360C203.625 352.75 193.75 343.125 186.25 332.25L123.75 464H99.5L151.75 202.625C155.875 201.625 159.875 199.75 163.5 197L203.25 166.625C210.875 160.75 220.625 158.625 228.5 160.5L243.25 164.875L205.75 252.25C193.125 281.75 204.375 316.25 232 332.625L317 382.75L291.5 464ZM402.125 464H358.5L382.125 388.5C388 367.75 379.25 345.375 360.5 334.125L299.25 298L330.625 219.75L350.875 261.125C358.875 277.375 375.75 288 394 288H427.25L402.125 464Z" })
  }
));
PersonSkiingNordicSolid.displayName = "PersonSkiingNordicSolid";
var PersonSkiingNordic_default = PersonSkiingNordicSolid;
