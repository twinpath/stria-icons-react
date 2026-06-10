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
var FolderGrid_exports = {};
__export(FolderGrid_exports, {
  default: () => FolderGrid_default
});
module.exports = __toCommonJS(FolderGrid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderGridRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H275.883L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V160C512 124.656 483.346 96 448 96ZM464 416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V96C48 87.176 55.178 80 64 80H181.49C185.764 80 189.783 81.664 192.805 84.688L256 144H448C456.822 144 464 151.176 464 160V416ZM160 240H96C87.156 240 80 247.156 80 256V320C80 328.844 87.156 336 96 336H160C168.844 336 176 328.844 176 320V256C176 247.156 168.844 240 160 240ZM288 240H224C215.156 240 208 247.156 208 256V320C208 328.844 215.156 336 224 336H288C296.844 336 304 328.844 304 320V256C304 247.156 296.844 240 288 240ZM416 240H352C343.156 240 336 247.156 336 256V320C336 328.844 343.156 336 352 336H416C424.844 336 432 328.844 432 320V256C432 247.156 424.844 240 416 240Z" })
  }
));
FolderGridRegular.displayName = "FolderGridRegular";
var FolderGrid_default = FolderGridRegular;
