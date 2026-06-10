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
var Ankh_exports = {};
__export(Ankh_exports, {
  default: () => Ankh_default
});
module.exports = __toCommonJS(Ankh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnkhRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 272H227.125C256.5 235.625 281.875 184.125 281.875 137.125C281.875 53 227.375 0 160 0S38.125 53 38.125 137.125C38.125 184.125 63.5 235.625 92.875 272H24C10.745 272 0 282.745 0 296V296C0 309.255 10.745 320 24 320H136V488C136 501.255 146.745 512 160 512H160C173.255 512 184 501.255 184 488V320H296C309.255 320 320 309.255 320 296V296C320 282.745 309.255 272 296 272ZM160 48C204.25 48 233.875 83.875 233.875 137.125C233.875 191 184.25 256.625 160 270.5C135.75 256.625 86.125 191 86.125 137.125C86.125 83.875 115.75 48 160 48Z" })
  }
));
AnkhRegular.displayName = "AnkhRegular";
var Ankh_default = AnkhRegular;
