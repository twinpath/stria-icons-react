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
var Alien8bit_exports = {};
__export(Alien8bit_exports, {
  default: () => Alien8bit_default
});
module.exports = __toCommonJS(Alien8bit_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Alien8bitLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 320H224V224H192V320ZM352 320H384V224H352V320ZM544 112H512C494.375 112 480 126.375 480 144V160H416V128H448C465.625 128 480 113.625 480 96V64C480 46.375 465.625 32 448 32H416C398.375 32 384 46.375 384 64H352C334.375 64 320 78.375 320 96V128H256V96C256 78.375 241.625 64 224 64H192C192 46.375 177.625 32 160 32H128C110.375 32 96 46.375 96 64V96C96 113.625 110.375 128 128 128H160V160H96V144C96 126.375 81.625 112 64 112H32C14.375 112 0 126.375 0 144V288C0 305.625 14.375 320 32 320H64V352C64 369.625 78.375 384 96 384H128V448C128 465.625 142.375 480 160 480H240C257.625 480 272 465.625 272 448V416C272 398.375 257.625 384 240 384H336C318.375 384 304 398.375 304 416V448C304 465.625 318.375 480 336 480H416C433.625 480 448 465.625 448 448V384H480C497.625 384 512 369.625 512 352V320H544C561.625 320 576 305.625 576 288V144C576 126.375 561.625 112 544 112ZM416 64H448V96H416V64ZM128 96V64H160V96H128ZM240 448H160V384H192V416H240V448ZM416 448H336V416H384V384H416V448ZM544 288H480V352H96V288H32V144H64V256H96V192H192V96H224V160H352V96H384V192H480V256H512V144H544V288Z" })
  }
));
Alien8bitLight.displayName = "Alien8bitLight";
var Alien8bit_default = Alien8bitLight;
