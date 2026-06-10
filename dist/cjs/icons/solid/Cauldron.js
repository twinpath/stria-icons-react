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
var Cauldron_exports = {};
__export(Cauldron_exports, {
  default: () => Cauldron_default
});
module.exports = __toCommonJS(Cauldron_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CauldronSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 212V172C448 165.375 441.75 160 433.999 160H13.999C6.25 160 0 165.375 0 172V212C0 218.625 6.25 224 13.999 224H33.75C12.375 262.5 0 305.25 0 345.625C0 384.625 11.875 416.25 32 441.125V488C32 501.25 42.75 512 56 512S80 501.25 80 488V480.5C119 501.75 169.125 512 224 512S329 501.75 368 480.5V488C368 501.25 378.75 512 392 512S416 501.25 416 488V441.125C436.125 416.25 448 384.625 448 345.625C448 305.25 435.625 262.5 414.25 224H433.999C441.75 224 448 218.625 448 212ZM160 64C177.625 64 192 49.625 192 32S177.625 0 160 0S128 14.375 128 32S142.375 64 160 64ZM272 128C298.5 128 320 106.5 320 80S298.5 32 272 32S224 53.5 224 80S245.5 128 272 128Z" })
  }
));
CauldronSolid.displayName = "CauldronSolid";
var Cauldron_default = CauldronSolid;
