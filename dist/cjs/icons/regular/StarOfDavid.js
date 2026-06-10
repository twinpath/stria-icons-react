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
const StarOfDavidRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M435.61 256L490.731 166.625C505.605 142.375 487.106 112 457.609 112H346.993L289.122 18C281.748 6 268.874 0 256 0S230.252 6 222.878 18L165.007 112H54.391C24.769 112 6.395 142.375 21.269 166.625L76.39 256L21.269 345.375C6.395 369.625 24.769 400 54.391 400H165.007L222.878 494C230.252 506 243.126 512 256 512S281.748 506 289.122 494L346.993 400H457.609C487.231 400 505.605 369.625 490.731 345.375L435.61 256ZM436.985 160L406.738 209.125L376.49 160H436.985ZM377.865 256L318.745 352H193.255L134.135 256L193.255 160H318.745L377.865 256ZM256 58.125L289.247 112H222.753L256 58.125ZM75.015 160H135.51L105.262 209.125L75.015 160ZM75.015 352L105.262 302.875L135.51 352H75.015ZM256 453.875L222.753 400H289.247L256 453.875ZM376.49 352L406.738 302.875L436.985 352H376.49Z" })
  }
));
StarOfDavidRegular.displayName = "StarOfDavidRegular";
var StarOfDavid_default = StarOfDavidRegular;
