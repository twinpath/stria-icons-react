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
var Swatchbook_exports = {};
__export(Swatchbook_exports, {
  default: () => Swatchbook_default
});
module.exports = __toCommonJS(Swatchbook_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwatchbookLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 432C104.875 432 112 424.875 112 416S104.875 400 96 400S80 407.125 80 416S87.125 432 96 432ZM480 320H327.75L435.375 212.375C447.875 199.875 447.875 179.625 435.375 167.125L344.875 76.625C338.625 70.375 330.5 67.25 322.25 67.25C314.125 67.25 305.875 70.375 299.625 76.625L192 184.25V32C192 14.375 177.625 0 160 0H32C14.375 0 0 14.375 0 32V416C0 469 43 512 96 512H480C497.625 512 512 497.625 512 480V352C512 334.375 497.625 320 480 320ZM160 416C160 451.25 131.25 480 96 480S32 451.25 32 416V288H160V416ZM160 256H32V160H160V256ZM160 128H32V32H160V128ZM192 229.5L322.25 99.25L412.75 189.75L192 410.5V229.5ZM480 480H167.75L295.75 352H480V480Z" })
  }
));
SwatchbookLight.displayName = "SwatchbookLight";
var Swatchbook_default = SwatchbookLight;
