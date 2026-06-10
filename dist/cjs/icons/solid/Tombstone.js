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
var Tombstone_exports = {};
__export(Tombstone_exports, {
  default: () => Tombstone_default
});
module.exports = __toCommonJS(Tombstone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TombstoneSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 192C416 86 330 0 224 0C118 0 32 86 32 192V416H416V192ZM320 192C320 200.875 312.875 208 304 208H248V336C248 344.875 240.875 352 232 352H216C207.125 352 200 344.875 200 336V208H144C135.125 208 128 200.875 128 192V176C128 167.125 135.125 160 144 160H200V112C200 103.125 207.125 96 216 96H232C240.875 96 248 103.125 248 112V160H304C312.875 160 320 167.125 320 176V192ZM432 448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H432C440.875 512 448 504.875 448 496V464C448 455.125 440.875 448 432 448Z" })
  }
));
TombstoneSolid.displayName = "TombstoneSolid";
var Tombstone_default = TombstoneSolid;
