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
var DeleteRight_exports = {};
__export(DeleteRight_exports, {
  default: () => DeleteRight_default
});
module.exports = __toCommonJS(DeleteRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DeleteRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 128V384C0 419.375 28.625 448 64 448H370.75C387.75 448 404 441.25 416 429.25L566.625 278.625C579.125 266.125 579.125 245.875 566.625 233.375L416 82.75C404 70.75 387.75 64 370.75 64H64C28.625 64 0 92.625 0 128ZM32 128C32 110.355 46.355 96 64 96H370.75C379.291 96 387.324 99.33 393.371 105.377L543.996 256.002L393.371 406.621C387.324 412.67 379.291 416 370.75 416H64C46.355 416 32 401.645 32 384V128ZM148.688 203.312L201.375 256L148.688 308.688C142.438 314.938 142.438 325.063 148.688 331.312C154.941 337.566 165.066 337.559 171.312 331.312L224 278.625L276.688 331.312C282.941 337.566 293.066 337.559 299.312 331.312C305.562 325.062 305.562 314.937 299.312 308.688L246.625 256L299.312 203.312C305.562 197.062 305.562 186.937 299.312 180.688S282.937 174.438 276.688 180.688L224 233.375L171.312 180.688C165.062 174.438 154.937 174.438 148.688 180.688S142.438 197.062 148.688 203.312Z" })
  }
));
DeleteRightLight.displayName = "DeleteRightLight";
var DeleteRight_default = DeleteRightLight;
