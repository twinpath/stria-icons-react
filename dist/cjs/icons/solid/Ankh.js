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
const AnkhSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 256H251.375C272.5 222 288 181.625 288 144C288 55.625 230.75 0 160 0S32 55.625 32 144C32 181.625 47.5 222 68.625 256H24C10.75 256 0 266.75 0 280V312C0 325.25 10.75 336 24 336H120V488C120 501.25 130.75 512 144 512H176C189.25 512 200 501.25 200 488V336H296C309.25 336 320 325.25 320 312V280C320 266.75 309.25 256 296 256ZM160 80C189.625 80 208 104.5 208 144C208 178.625 180.875 222.125 160 244.875C139.125 222.125 112 178.625 112 144C112 104.5 130.375 80 160 80Z" })
  }
));
AnkhSolid.displayName = "AnkhSolid";
var Ankh_default = AnkhSolid;
