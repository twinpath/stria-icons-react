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
var BahtSign_exports = {};
__export(BahtSign_exports, {
  default: () => BahtSign_default
});
module.exports = __toCommonJS(BahtSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BahtSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M271.734 238.246C281.812 221.061 288 201.322 288 180C288 117.4 238.078 66.566 176 64.404V32C176 14.312 161.688 0 144 0S112 14.312 112 32V64H40C17.906 64 0 81.906 0 104V408C0 430.094 17.906 448 40 448H112V480C112 497.688 126.312 512 144 512S176 497.688 176 480V448H204C267.969 448 320 395.969 320 332C320 293.379 300.844 259.342 271.734 238.246ZM208 180C208 198.426 193.879 213.104 176 215.189V144.811C193.879 146.896 208 161.574 208 180ZM80 144H112V216H80V144ZM80 368V296H112V368H80ZM204 368H176V296H204C223.844 296 240 312.156 240 332S223.844 368 204 368Z" })
  }
));
BahtSignSolid.displayName = "BahtSignSolid";
var BahtSign_default = BahtSignSolid;
