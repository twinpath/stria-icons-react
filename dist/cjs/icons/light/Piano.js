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
var Piano_exports = {};
__export(Piano_exports, {
  default: () => Piano_default
});
module.exports = __toCommonJS(Piano_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PianoLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.514 270.195L417.842 240.987C396.171 230.199 384.129 207.67 383.996 183.462C383.438 82.064 301.029 0 199.5 0H184.5C82.603 0 0 82.603 0 184.5V448C0 483.2 28.8 512 64 512H448C483.2 512 512 483.2 512 448V327.5C512 303.213 498.256 281.018 476.514 270.195ZM448 480H64C46.327 480 32 465.673 32 448V384H80V416C80 424.8 87.2 432 96 432H96C104.8 432 112 424.8 112 416V384H144V416C144 424.8 151.2 432 160 432H160C168.8 432 176 424.8 176 416V384H208V416C208 424.8 215.2 432 224 432H224C232.8 432 240 424.8 240 416V384H336V416C336 424.8 343.2 432 352 432H352C360.8 432 368 424.8 368 416V384H400V416C400 424.8 407.2 432 416 432H416C424.8 432 432 424.8 432 416V384H480V448C480 465.673 465.673 480 448 480ZM480 352H32V184.5C32 100.375 100.375 32 184.5 32H199.5C283.625 32 352 100.375 352 184.5C351.875 220.875 372.5 254.125 405.125 270.25L462.25 298.875C473.125 304.375 480 315.375 480 327.5V352Z" })
  }
));
PianoLight.displayName = "PianoLight";
var Piano_default = PianoLight;
