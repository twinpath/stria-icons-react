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
var BarsProgress_exports = {};
__export(BarsProgress_exports, {
  default: () => BarsProgress_default
});
module.exports = __toCommonJS(BarsProgress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarsProgressLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 32H32C14.328 32 0 46.326 0 64V128C0 145.674 14.328 160 32 160H480C497.674 160 512 145.674 512 128V64C512 46.326 497.674 32 480 32ZM352 128H32V64H352V128ZM480 128H384V64H480V128ZM480 192H32C14.328 192 0 206.326 0 224V288C0 305.674 14.328 320 32 320H480C497.674 320 512 305.674 512 288V224C512 206.326 497.674 192 480 192ZM128 288H32V224H128V288ZM480 288H160V224H480V288ZM480 352H32C14.328 352 0 366.326 0 384V448C0 465.674 14.328 480 32 480H480C497.674 480 512 465.674 512 448V384C512 366.326 497.674 352 480 352ZM256 448H32V384H256V448ZM480 448H288V384H480V448Z" })
  }
));
BarsProgressLight.displayName = "BarsProgressLight";
var BarsProgress_default = BarsProgressLight;
