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
var BoothCurtain_exports = {};
__export(BoothCurtain_exports, {
  default: () => BoothCurtain_default
});
module.exports = __toCommonJS(BoothCurtain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoothCurtainSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 32V496C0 504.75 7.25 512 16 512H48C56.75 512 64 504.75 64 496V64H96V0H32C14.25 0 0 14.25 0 32ZM480 0H448V496C448 504.75 455.25 512 464 512H496C504.75 512 512 504.75 512 496V32C512 14.25 497.75 0 480 0ZM128 396.69C128 422.221 146.462 445.734 171.907 447.831C198.2 449.997 220.253 431.072 224 406.459C227.551 429.783 247.541 448 272 448S316.447 429.785 320 406.461C323.706 430.791 345.296 449.562 371.189 447.897C397.199 446.225 416 421.83 416 395.766L416 0H128L128 396.69Z" })
  }
));
BoothCurtainSolid.displayName = "BoothCurtainSolid";
var BoothCurtain_default = BoothCurtainSolid;
