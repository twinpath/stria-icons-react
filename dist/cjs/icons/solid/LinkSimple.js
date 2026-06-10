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
var LinkSimple_exports = {};
__export(LinkSimple_exports, {
  default: () => LinkSimple_default
});
module.exports = __toCommonJS(LinkSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkSimpleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 96H384C366.312 96 352 110.328 352 128S366.312 160 384 160H480C532.938 160 576 203.062 576 256S532.938 352 480 352H384C366.312 352 352 366.328 352 384S366.312 416 384 416H480C568.219 416 640 344.219 640 256S568.219 96 480 96ZM256 352H160C107.062 352 64 308.938 64 256S107.062 160 160 160H256C273.688 160 288 145.672 288 128S273.688 96 256 96H160C71.781 96 0 167.781 0 256S71.781 416 160 416H256C273.688 416 288 401.672 288 384S273.688 352 256 352ZM192 256C192 273.672 206.312 288 224 288H416C433.688 288 448 273.672 448 256S433.688 224 416 224H224C206.312 224 192 238.328 192 256Z" })
  }
));
LinkSimpleSolid.displayName = "LinkSimpleSolid";
var LinkSimple_default = LinkSimpleSolid;
