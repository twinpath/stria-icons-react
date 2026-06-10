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
var StarOfDavid_exports = {};
__export(StarOfDavid_exports, {
  default: () => StarOfDavid_default
});
module.exports = __toCommonJS(StarOfDavid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarOfDavidSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M490.732 345.375L435.61 256L490.732 166.625C505.605 142.375 487.107 112 457.608 112H346.991L289.122 18C281.747 6 268.874 0 255.999 0C243.126 0 230.251 6 222.878 18L165.007 112H54.392C24.769 112 6.396 142.375 21.269 166.625L76.39 256L21.269 345.375C6.396 369.625 24.769 400 54.392 400H165.007L222.878 494C230.251 506 243.126 512 255.999 512C268.874 512 281.747 506 289.122 494L346.991 400H457.608C487.232 400 505.605 369.625 490.732 345.375ZM255.999 73.75L279.622 112H232.376L255.999 73.75ZM89.513 344L110.011 310.75L130.509 344H89.513ZM110.011 201.25L89.513 168H130.509L110.011 201.25ZM255.999 438.25L232.376 400H279.622L255.999 438.25ZM313.995 344H198.005L143.759 256L197.88 168H313.995L368.241 256L313.995 344ZM381.489 344L401.987 310.75L422.485 344H381.489ZM401.987 201.25L381.489 168H422.485L401.987 201.25Z" })
  }
));
StarOfDavidSolid.displayName = "StarOfDavidSolid";
var StarOfDavid_default = StarOfDavidSolid;
