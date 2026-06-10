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
var Caravan_exports = {};
__export(Caravan_exports, {
  default: () => Caravan_default
});
module.exports = __toCommonJS(Caravan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CaravanLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 128H112C94.375 128 80 142.375 80 160V224C80 241.625 94.375 256 112 256H240C257.625 256 272 241.625 272 224V160C272 142.375 257.625 128 240 128ZM240 224H112V160H240V224ZM624 384H576V192C576 103.634 504.366 32 416 32H96C42.981 32 0 74.981 0 128V320C0 373 43 416 96 416C96 469 139 512 192 512S288 469 288 416H624C632.8 416 640 408.8 640 400V400C640 391.2 632.8 384 624 384ZM192 480C156.625 480 128 451.375 128 416S156.625 352 192 352S256 380.625 256 416S227.375 480 192 480ZM448 224H416C407.164 224 400 231.162 400 240C400 248.836 407.164 256 416 256H448V384H352V160H448V224ZM544 384H480V160C480 142.375 465.625 128 448 128H352C334.375 128 320 142.375 320 160V384H282.125C268.875 346.75 233.75 320 192 320S115.125 346.75 101.875 384H96C60.625 384 32 355.375 32 320V128C32 92.625 60.625 64 96 64H416C486.625 64.125 543.875 121.375 544 192V384Z" })
  }
));
CaravanLight.displayName = "CaravanLight";
var Caravan_default = CaravanLight;
