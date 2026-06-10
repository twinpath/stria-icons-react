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
var Soap_exports = {};
__export(Soap_exports, {
  default: () => Soap_default
});
module.exports = __toCommonJS(Soap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SoapRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 64C401.674 64 416 49.672 416 32C416 14.326 401.674 0 384 0S352 14.326 352 32C352 49.672 366.326 64 384 64ZM208 96C234.51 96 256 74.51 256 48S234.51 0 208 0S160 21.49 160 48S181.49 96 208 96ZM416 192H398.387C399.438 186.828 400 181.48 400 176C400 131.816 364.184 96 320 96S240 131.816 240 176C240 181.48 240.562 186.828 241.613 192H96C42.98 192 0 234.98 0 288V416C0 469.02 42.98 512 96 512H416C469.02 512 512 469.02 512 416V288C512 234.98 469.02 192 416 192ZM320 144C337.645 144 352 158.355 352 176S337.645 208 320 208S288 193.645 288 176S302.355 144 320 144ZM464 416C464 442.467 442.467 464 416 464H96C69.533 464 48 442.467 48 416V288C48 261.533 69.533 240 96 240H272.939C286.207 249.773 302.256 256 320 256S353.793 249.773 367.061 240H416C442.467 240 464 261.533 464 288V416ZM352 288H160C124.654 288 96 316.654 96 352S124.654 416 160 416H352C387.346 416 416 387.346 416 352S387.346 288 352 288ZM352 384H160C142.355 384 128 369.645 128 352S142.355 320 160 320H352C369.645 320 384 334.355 384 352S369.645 384 352 384Z" })
  }
));
SoapRegular.displayName = "SoapRegular";
var Soap_default = SoapRegular;
