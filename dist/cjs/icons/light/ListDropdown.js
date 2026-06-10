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
var ListDropdown_exports = {};
__export(ListDropdown_exports, {
  default: () => ListDropdown_default
});
module.exports = __toCommonJS(ListDropdown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListDropdownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.641 32 0 60.641 0 96V416C0 451.359 28.641 480 64 480H448C483.359 480 512 451.359 512 416V96C512 60.641 483.359 32 448 32ZM480 416C480 433.625 465.625 448 448 448H64C46.375 448 32 433.625 32 416V192H480V416ZM480 160H32V96C32 78.375 46.375 64 64 64H448C465.625 64 480 78.375 480 96V160ZM128 288H384C392.844 288 400 280.844 400 272S392.844 256 384 256H128C119.156 256 112 263.156 112 272S119.156 288 128 288ZM128 384H384C392.844 384 400 376.844 400 368S392.844 352 384 352H128C119.156 352 112 359.156 112 368S119.156 384 128 384ZM405.999 86.703L384 104.312L361.999 86.703C355.109 81.187 345.062 82.344 339.5 89.203C333.984 96.109 335.109 106.172 341.999 111.703L373.999 137.297C376.922 139.625 380.469 140.797 384 140.797S391.078 139.625 393.999 137.297L425.999 111.703C432.891 106.172 434.016 96.109 428.5 89.203C422.953 82.328 412.922 81.172 405.999 86.703Z" })
  }
));
ListDropdownLight.displayName = "ListDropdownLight";
var ListDropdown_default = ListDropdownLight;
