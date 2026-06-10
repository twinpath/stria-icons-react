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
var Binoculars_exports = {};
__export(Binoculars_exports, {
  default: () => Binoculars_default
});
module.exports = __toCommonJS(Binoculars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BinocularsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 48C416 39.125 408.875 32 400 32H336C327.125 32 320 39.125 320 48V96H416V48ZM63.875 160.1C61.336 253.891 3.5 274.295 0 404V448C0 465.6 14.398 480 32 480H160C177.602 480 192 465.6 192 448V128H95.875C78.258 128 64.352 142.486 63.875 160.1ZM448.125 160.1C447.648 142.486 433.742 128 416.125 128H320V448C320 465.6 334.398 480 352 480H480C497.602 480 512 465.6 512 448V404C508.5 274.295 450.664 253.891 448.125 160.1ZM224 288H288V128H224V288ZM176 32H112C103.125 32 96 39.125 96 48V96H192V48C192 39.125 184.875 32 176 32Z" })
  }
));
BinocularsSolid.displayName = "BinocularsSolid";
var Binoculars_default = BinocularsSolid;
