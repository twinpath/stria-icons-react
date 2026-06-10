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
var Elephant_exports = {};
__export(Elephant_exports, {
  default: () => Elephant_default
});
module.exports = __toCommonJS(Elephant_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ElephantSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32C498.875 32 486.5 34.625 474.625 38.375C464.75 15.875 442.25 0 416 0C380.625 0 352 28.625 352 64C352 87.625 365 108 384 119.125V160C384 177.625 398.375 192 416 192H424C428.375 192 432 195.625 432 200V216C432 220.375 428.375 224 424 224H416C380.75 224 352 195.25 352 160V135.25C331.875 117.125 320 91.25 320 64C320 52.75 322.25 42.001 325.875 32H192C85.999 32 0 118.001 0 224V336C0 344.875 7.125 352 16 352H32V496C32 504.875 39.125 512 48 512H112C120.875 512 128 504.875 128 496V388.125C160.375 405.75 198.75 416 240 416S319.625 405.75 352 388.125V496C352 504.875 359.125 512 368 512H432C440.875 512 448 504.875 448 496V288H512C535.5 288 557.125 281.25 576 270.25V368C576 376.875 568.875 384 560 384S544 376.875 544 368S536.875 352 528 352H496C487.125 352 480 359.125 480 368C480 414.875 520.5 452.5 568.375 447.625C609.999 443.375 640 405.125 640 363.25V160C640 89.25 582.75 32 512 32ZM528 160C519.125 160 512 152.875 512 144S519.125 128 528 128S544 135.125 544 144S536.875 160 528 160Z" })
  }
));
ElephantSolid.displayName = "ElephantSolid";
var Elephant_default = ElephantSolid;
