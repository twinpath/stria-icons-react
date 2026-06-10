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
var UmbrellaSimple_exports = {};
__export(UmbrellaSimple_exports, {
  default: () => UmbrellaSimple_default
});
module.exports = __toCommonJS(UmbrellaSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 320C247.156 320 240 327.156 240 336V448C240 465.656 225.656 480 208 480S176 465.656 176 448V432C176 423.156 168.844 416 160 416S144 423.156 144 432V448C144 483.281 172.719 512 208 512S272 483.281 272 448V336C272 327.156 264.844 320 256 320ZM271.844 32.777C271.857 32.504 272 32.275 272 32V16C272 7.156 264.844 0 256 0S240 7.156 240 16V32C240 32.275 240.143 32.504 240.156 32.777C106.389 40.77 0 148.432 0 280C0 284.406 3.594 288 8 288H504C508.406 288 512 284.406 512 280C512 148.432 405.611 40.77 271.844 32.777ZM33.373 256C45.795 148.152 140.898 64 256 64S466.205 148.152 478.627 256H33.373Z" })
  }
));
UmbrellaSimpleLight.displayName = "UmbrellaSimpleLight";
var UmbrellaSimple_default = UmbrellaSimpleLight;
