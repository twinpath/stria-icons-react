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
var ClapperboardPlay_exports = {};
__export(ClapperboardPlay_exports, {
  default: () => ClapperboardPlay_default
});
module.exports = __toCommonJS(ClapperboardPlay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClapperboardPlaySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M134.062 32H64C28.654 32 0 60.654 0 96V160H6.062L134.062 32ZM326.062 160L453.508 32.555C451.662 32.395 449.887 32 448 32H361.938L233.938 160H326.062ZM166.062 160L294.062 32H201.938L73.938 160H166.062ZM0 416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V192H0V416ZM208 267.027C208 263.018 210.104 259.322 213.5 257.371C216.875 255.453 221.062 255.539 224.312 257.674L330.979 326.643C334.104 328.656 336 332.191 336 335.996S334.104 343.334 330.979 345.35L224.312 414.318C222.604 415.439 220.625 416 218.666 416C216.896 416 215.104 415.535 213.5 414.621C210.104 412.67 208 408.973 208 404.965V267.027ZM497.748 56.189L393.938 160H512V96C512 80.867 506.529 67.146 497.748 56.189Z" })
  }
));
ClapperboardPlaySolid.displayName = "ClapperboardPlaySolid";
var ClapperboardPlay_default = ClapperboardPlaySolid;
