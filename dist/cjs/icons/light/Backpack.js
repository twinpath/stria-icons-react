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
var Backpack_exports = {};
__export(Backpack_exports, {
  default: () => Backpack_default
});
module.exports = __toCommonJS(Backpack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BackpackLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 64H304V48C304 21.5 282.5 0 256 0H192C165.5 0 144 21.5 144 48V64H128C57.25 64 0 121.25 0 192V448C0 483.375 28.625 512 64 512H384C419.375 512 448 483.375 448 448V192C448 121.25 390.75 64 320 64ZM176 48C176 39.125 183.25 32 192 32H256C264.75 32 272 39.125 272 48V64H176V48ZM336 480H112V384H336V480ZM336 352H112V320C112 302.375 126.375 288 144 288H304C321.625 288 336 302.375 336 320V352ZM416 448C416 465.625 401.625 480 384 480H368V320C368 284.75 339.25 256 304 256H144C108.75 256 80 284.75 80 320V480H64C46.375 480 32 465.625 32 448V192C32 139 75 96 128 96H320C373 96 416 139 416 192V448ZM304 160H144C135.2 160 128 167.2 128 176V176C128 184.8 135.2 192 144 192H304C312.8 192 320 184.8 320 176V176C320 167.2 312.8 160 304 160Z" })
  }
));
BackpackLight.displayName = "BackpackLight";
var Backpack_default = BackpackLight;
